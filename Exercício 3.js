// Array inicial de livros
let estoque = [];

// Função para adicionar livro
function adicionarLivro(titulo, autor, quantidade) {
  // Verifica se já existe
  for (let livro of estoque) {
    if (livro.titulo === titulo) {
      console.log(`⚠ O livro "${titulo}" já existe no estoque.`);
      return;
    }
  }

  estoque.push({ titulo, autor, quantidade });
  console.log(`✔ Livro "${titulo}" adicionado com sucesso!`);
}

// Função para remover livro
function removerLivro(titulo) {
  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].titulo === titulo) {
      estoque.splice(i, 1);
      console.log(`✔ Livro "${titulo}" removido!`);
      return;
    }
  }

  console.log(`⚠ Livro "${titulo}" não encontrado!`);
}

// Atualizar quantidade
function atualizarQuantidade(titulo, novaQuantidade) {
  for (let livro of estoque) {
    if (livro.titulo === titulo) {
      livro.quantidade = novaQuantidade;
      console.log(`✔ Quantidade de "${titulo}" atualizada para ${novaQuantidade}!`);
      return;
    }
  }

  console.log(`⚠ Livro "${titulo}" não encontrado para atualizar!`);
}

// Listar todos
function listarLivros() {
  console.log("📚 Livros disponíveis no estoque:");
  
  for (let livro of estoque) {
    console.log(`📖 ${livro.titulo} | Autor: ${livro.autor} | Quantidade: ${livro.quantidade}`);
  }
}
