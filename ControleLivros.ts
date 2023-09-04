import Editora from "../modelo/Editora";

const livros: Livro[] = [
  new Livro(1, 1, "IT: A Coisa", "A história se passa na fictícia cidade de Derry, no Maine, e é contada em duas linhas do tempo: a primeira em 1958, quando um grupo de crianças enfrenta uma força maligna que assume a forma de seus piores medos, incluindo o palhaço Pennywise; a segunda em 1985, quando essas mesmas crianças, agora adultos, são forçadas a retornar a Derry para enfrentar novamente a ameaça, que parece ter ressurgido.", ["Stephen King"]),
  new Livro(2, 2, "O Senhor dos Anéis - A Sociedade do Anel", "A história começa com a descoberta do Um Anel, um poderoso artefato criado pelo Senhor das Trevas, Sauron, para dominar o mundo. O anel tem o poder de corromper e controlar quem o possui, e Sauron busca recuperá-lo para recuperar todo o seu poder. O anel cai nas mãos de Frodo Bolseiro, um hobbit, que é encarregado de levá-lo até o Monte da Perdição, onde ele pode ser destruído e Sauron derrotado.", ["John Ronald Reuel Tolkien"]),
  new Livro(3, 3, "Star Wars: Episode IV - A New Hope", "O livro se passa em uma galáxia distante, onde a tirania do Império Galáctico está espalhada por muitos sistemas planetários. A Aliança Rebelde luta contra o Império, e a história começa quando uma jovem fazendeira chamada Luke Skywalker descobre uma mensagem secreta escondida em um droide chamado R2-D2. A mensagem é um pedido de ajuda da Princesa Leia Organa, que está detida pelo vilão Darth Vader.", ["George Lucas"]),
];

class ControleLivros {
  obterLivros(): Livro[] {
    return livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...livros.map((l) => l.codigo), 0) + 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export default ControleLivros;
