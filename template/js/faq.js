document.querySelectorAll(".faq-item button").forEach(botao => {
  botao.addEventListener("click", () => {
    const resposta = document.getElementById(botao.getAttribute("aria-controls"));
    const abrir = botao.getAttribute("aria-expanded") !== "true";
    botao.setAttribute("aria-expanded", abrir);
    resposta.hidden = !abrir;
  });
});
