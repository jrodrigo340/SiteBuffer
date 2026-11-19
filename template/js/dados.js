const produtos = [
  { id: 1, nome: "Brigadeiro gourmet", categoria: "Doces", preco: 3.5, emoji: "🍫" },
  { id: 2, nome: "Beijinho", categoria: "Doces", preco: 3.0, emoji: "🥥" },
  { id: 3, nome: "Fatia de bolo de chocolate", categoria: "Bolos", preco: 9.0, emoji: "🎂" },
  { id: 4, nome: "Fatia de bolo de cenoura", categoria: "Bolos", preco: 8.0, emoji: "🥕" },
  { id: 5, nome: "Torta de limão", categoria: "Tortas", preco: 10.0, emoji: "🍋" },
  { id: 6, nome: "Torta de morango", categoria: "Tortas", preco: 11.0, emoji: "🍓" },
  { id: 7, nome: "Café coado", categoria: "Bebidas", preco: 5.0, emoji: "☕" },
  { id: 8, nome: "Suco de laranja", categoria: "Bebidas", preco: 6.0, emoji: "🍊" }
];
function formatarReais(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
