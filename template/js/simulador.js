const form = document.getElementById("form-simulador");
const saida = document.getElementById("saida");
const itens = document.getElementById("itens");
const adicionarItem = document.getElementById("adicionar-item");

function criarOpcoes() {
  const categorias = [...new Set(produtos.map(p => p.categoria))];
  return categorias.map(categoria => {
    const grupo = document.createElement("optgroup");
    grupo.label = categoria;
    produtos.filter(p => p.categoria === categoria).forEach(p => {
      const opcao = document.createElement("option");
      opcao.value = p.id;
      opcao.textContent = `${p.nome} (${formatarReais(p.preco)})`;
      grupo.appendChild(opcao);
    });
    return grupo;
  });
}

function criarLinha() {
  const linha = document.createElement("div");
  linha.className = "linha-item";

  const rotuloItem = document.createElement("label");
  rotuloItem.textContent = "Item";
  const seletor = document.createElement("select");
  criarOpcoes().forEach(grupo => seletor.appendChild(grupo));
  rotuloItem.appendChild(seletor);

  const rotuloQuantidade = document.createElement("label");
  rotuloQuantidade.textContent = "Quantidade";
  const quantidade = document.createElement("input");
  quantidade.type = "number";
  quantidade.min = "1";
  quantidade.value = "1";
  rotuloQuantidade.appendChild(quantidade);

  const remover = document.createElement("button");
  remover.type = "button";
  remover.className = "botao-remover";
  remover.textContent = "×";
  remover.setAttribute("aria-label", "Remover item");
  remover.addEventListener("click", () => {
    linha.remove();
    if (!itens.querySelector(".linha-item")) criarLinha();
  });

  linha.append(rotuloItem, rotuloQuantidade, remover);
  itens.appendChild(linha);
}

function descontoPorQuantidade(qtd) {
  if (qtd >= 10) return 0.15;
  if (qtd >= 5) return 0.10;
  return 0;
}

adicionarItem.addEventListener("click", criarLinha);

form.addEventListener("submit", evento => {
  evento.preventDefault();
  const pedido = [...itens.querySelectorAll(".linha-item")].map(linha => ({
    produto: produtos.find(p => p.id === Number(linha.querySelector("select").value)),
    qtd: Number(linha.querySelector("input").value)
  }));

  if (pedido.some(({ produto, qtd }) => !produto || !Number.isInteger(qtd) || qtd < 1)) {
    saida.innerHTML = '<span class="erro">Escolha itens válidos e informe quantidades de 1 ou mais.</span>';
    return;
  }

  const detalhes = pedido.map(({ produto, qtd }) => {
    const subtotal = produto.preco * qtd;
    const taxa = descontoPorQuantidade(qtd);
    const desconto = subtotal * taxa;
    return { produto, qtd, subtotal, taxa, desconto };
  });
  const descontoTotal = detalhes.reduce((soma, d) => soma + d.desconto, 0);
  const total = detalhes.reduce((soma, d) => soma + d.subtotal - d.desconto, 0);

  saida.innerHTML = `
    <ul class="lista-total">
      ${detalhes.map(d => `
        <li>${d.qtd} × ${d.produto.nome}: ${formatarReais(d.subtotal)}${d.desconto ? ` <span class="desconto">(desconto ${d.taxa * 100}%: −${formatarReais(d.desconto)})</span>` : ""}</li>`).join("")}
    </ul>
    <p>Desconto total: −${formatarReais(descontoTotal)}</p>
    <p class="total">Total: ${formatarReais(total)}</p>`;
});

criarLinha();
