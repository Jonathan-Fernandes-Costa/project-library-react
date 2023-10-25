export type Livro = {
    id?: number | null;
    titulo: string;
    subtitulo: string;
    codigo: string;
    editora: string;
    autor: string;
    sinopse: string;
    anoEdicao: number;
    livroCategoriaId: number;
    livroCategoria: {
        descricao: string;
    }
    usuarioUltimaAlteracao: string;
    dataUltimaAlteracao: string;
}
export type FormData = {
    codigo: string;
    anoEdicao: string;
    titulo: string;
    subtitulo: string;
    livroCategoria: string;
    editora: string;
    autor: string;
    sinopse: string;
    arquivo: FileList;
  };
export type CategoriaLivros = {
    id: number;
    descricao: string;
}