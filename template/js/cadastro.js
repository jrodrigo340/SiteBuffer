const form = document.getElementById("form-cadastro");
const mensagem = document.getElementById("mensagem");

// Cada regra devolve um texto de erro, ou "" se o campo está certo.
const regras = {
  nome: v => v.trim().split(/\s+/).length >= 2 ? "" : "Digite nome e sobrenome.",
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Digite um e-mail válido, como nome@site.com.",
  telefone: v => /^\d{10,11}$/.test(v.replace(/\D/g, "")) ? "" : "Digite o telefone com DDD (10 ou 11 números).",
  senha: v => v.length >= 6 ? "" : "A senha precisa de pelo menos 6 caracteres.",
  confirmar: v => v === document.getElementById("senha").value && v !== "" ? "" : "As senhas não são iguais.",
  termos: (v, campo) => campo.checked ? "" : "Marque que aceita os termos."
};

function validarCampo(campo) {
  const texto = regras[campo.id](campo.value, campo);
  document.getElementById("erro-" + campo.id).textContent = texto;
  campo.classList.toggle("invalido", texto !== "");
  campo.setAttribute("aria-invalid", texto !== "");
  return texto === "";
}

// Valida ao sair do campo, para o erro aparecer cedo.
Object.keys(regras).forEach(id => {
  document.getElementById(id).addEventListener("blur", e => validarCampo(e.target));
});

form.addEventListener("submit", evento => {
  evento.preventDefault();
  // map (não "every" direto) para validar TODOS e mostrar todos os erros de uma vez.
  const resultados = Object.keys(regras).map(id => validarCampo(document.getElementById(id)));
  if (resultados.every(Boolean)) {
    mensagem.textContent = `Cadastro feito! Bem-vindo(a), ${document.getElementById("nome").value.trim().split(" ")[0]}.`;
    form.reset();
  } else {
    mensagem.textContent = "";
  }
});
