export type Livro = {
    id?: number | null;
    titulo: string;
    subtitulo: string;
    codigo: string;
    editora: string;
    autor: string;
    livroCategoriaId: number;
    livroCategoria: {
        descricao: string;
    }
    usuarioUltimaAlteracao: string;
    dataUltimaAlteracao: string;
}