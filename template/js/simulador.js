const seletor = document.getElementById("item");
const form = document.getElementById("form-simulador");
const saida = document.getElementById("saida");

produtos.forEach(p => {
  const opcao = document.createElement("option");
  opcao.value = p.id;
  opcao.textContent = `${p.nome} (${formatarReais(p.preco)})`;
  seletor.appendChild(opcao);
});

// Regra especial do tema: a "fornada grande" tem desconto progressivo.
function descontoPorQuantidade(qtd) {
  if (qtd >= 10) return 0.15;
  if (qtd >= 5) return 0.10;
  return 0;
}

form.addEventListener("submit", evento => {
  evento.preventDefault(); // impede a página de recarregar
  const produto = produtos.find(p => p.id === Number(seletor.value));
  const qtd = parseInt(document.getElementById("quantidade").value, 10);

  if (!produto || !Number.isInteger(qtd) || qtd < 1) {
    saida.innerHTML = '<span class="erro">Escolha um item e informe uma quantidade de 1 ou mais.</span>';
    return;
  }
  const subtotal = produto.preco * qtd;
  const taxa = descontoPorQuantidade(qtd);
  const desconto = subtotal * taxa;
  saida.innerHTML = `
    <p>${qtd} × ${produto.nome}: ${formatarReais(subtotal)}</p>
    <p>Desconto da fornada (${taxa * 100}%): −${formatarReais(desconto)}</p>
    <p class="total">Total: ${formatarReais(subtotal - desconto)}</p>`;
});
