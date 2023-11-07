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
        descricao: string;
    }
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
    descricao: string;
}
export type dadosListagem = {
    dados: Livro[],
    totalPages: number,
    currentPage: number,
    pageSize: number,
    totalRegisters: number
}