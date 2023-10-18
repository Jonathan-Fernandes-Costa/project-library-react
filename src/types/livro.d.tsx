export type LivroCadastro = {
    id?: number | null;
    fotoCapaId: number | null;
    titulo: string;
    subtitulo: string;
    codigo: string;
    editora: string;
    autor: string;
    sinopse: string;
    anoEdicao: number;
    livroCategoriaId: number;
}