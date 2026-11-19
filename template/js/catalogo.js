const grade = document.getElementById("grade");
const filtro = document.getElementById("filtro");
const resumo = document.getElementById("resumo");

// Preenche o filtro com as categorias que existem no array (sem repetir).
const categorias = [...new Set(produtos.map(p => p.categoria))];
categorias.forEach(cat => {
  const opcao = document.createElement("option");
  opcao.value = cat;
  opcao.textContent = cat;
  filtro.appendChild(opcao);
});

function mostrar(lista) {
  grade.innerHTML = ""; // limpa antes de redesenhar
  lista.forEach(p => {
    const cartao = document.createElement("article");
    cartao.className = "cartao caixa";
    cartao.innerHTML = `
      <div class="emoji" aria-hidden="true">${p.emoji}</div>
      <h3>${p.nome}</h3>
      <p class="categoria">${p.categoria}</p>
      <p class="preco">${formatarReais(p.preco)}</p>`;
    grade.appendChild(cartao);
  });
  const total = lista.reduce((soma, p) => soma + p.preco, 0);
  resumo.textContent = `${lista.length} itens, somando ${formatarReais(total)}`;
}

filtro.addEventListener("change", () => {
  const escolhida = filtro.value;
  mostrar(escolhida === "todas" ? produtos : produtos.filter(p => p.categoria === escolhida));
});

mostrar(produtos);
