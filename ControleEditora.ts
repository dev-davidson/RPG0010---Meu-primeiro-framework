import Editora from "../modelo/Livro";

const editoras: Editora[] = [
    new Editora(1, "Viking"),
    new Editora(2, "Martins Fontes"),
    new Editora(3, "Ballantine Books")
];

class ControleEditora {
  getEditoras(): Editora[] {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }
}

export default ControleEditora;
