const produtos = [
  { id: 1, nome: "Brigadeiro gourmet", categoria: "Doces", preco: 3.5, emoji: "🍫" },
  { id: 2, nome: "Beijinho", categoria: "Doces", preco: 3.0, emoji: "🥥" },
  { id: 3, nome: "Fatia de bolo de chocolate", categoria: "Bolos", preco: 9.0, emoji: "🎂" },
  { id: 4, nome: "Fatia de bolo de cenoura", categoria: "Bolos", preco: 8.0, emoji: "🥕" },
  { id: 5, nome: "Torta de limão", categoria: "Tortas", preco: 10.0, emoji: "🍋" },
  { id: 6, nome: "Torta de morango", categoria: "Tortas", preco: 11.0, emoji: "🍓" },
  { id: 7, nome: "Café coado", categoria: "Bebidas", preco: 5.0, emoji: "☕" },
  { id: 8, nome: "Suco de laranja", categoria: "Bebidas", preco: 6.0, emoji: "🍊" },
  { id: 9, nome: "Kit buffet infantil", categoria: "Kits", preco: 180.0, emoji: "🎈", descricao: "Serve 10 crianças: mini doces, mini bolo, salgadinhos e suco." },
  { id: 10, nome: "Kit buffet adulto", categoria: "Kits", preco: 260.0, emoji: "🍰", descricao: "Serve 10 pessoas: tortas, bolos em fatias, doces finos e café." },
  { id: 11, nome: "Kit buffet empresarial", categoria: "Kits", preco: 420.0, emoji: "💼", descricao: "Serve 20 pessoas: coffee break com doces, salgados, bolos, café e suco." }
];
function formatarReais(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
