export type Livro = {
    id: number;
    titulo: string;
    subtitulo: string;
    codigo: string;
    editora: string;
    autor: string;
    sinopse: string;
    anoEdicao: string;
    livroCategoriaId: number;
    livroCategoria: {
        id: number;
        nome: string;
    }
    qtdReservas: number;
    usuarioUltimaAlteracao: string;
    dataUltimaAlteracao: string;
}
export type FormData = {
    id?: number;
    codigo: string;
    anoEdicao: string;
    titulo: string;
    subtitulo: string;
    livroCategoriaId: number;
    editora: string;
    autor: string;
    sinopse: string;
  };
export type CategoriaLivros = {
    id: number;
    nome: string;
}
export type dadosListagem = {
    dados: Livro[],
    totalPages: number,
    currentPage: number,
    pageSize: number,
    totalRegister: number
}