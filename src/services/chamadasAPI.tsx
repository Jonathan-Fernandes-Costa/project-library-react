import axios from 'axios';
import { FormData } from '../types/livro.d';

const headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lVXN1YXJpbyI6IkVTVEFHSUFSSU8iLCJub21lQ29sYWJvcmFkb3IiOiJBTlRPTklPIEFNQVVSSSBCRVNFUlJBIERFIFNPVVNBIiwiaWRDb2xhYm9yYWRvciI6Ijg1NiIsImlkQ2FyZ28iOiI0MiIsImNhcmdvIjoiUEVEUkVJUk8iLCJpZFVzdWFyaW8iOiIyNTEiLCJhbWJpZW50ZSI6IlBST0QiLCJleHAiOjE2OTgyOTA3MzUsImlzcyI6IkJPWDNfRVJQX0FQSSIsImF1ZCI6Imh0dHBzOi8vcGxhc2ZyYW4uY29tIn0.ojzUXf3rCSzHQCp-iX3WqndxQ-8_lG3B7-Bp-a-4nwk'
  };

  
async function listagemLivros(pageSize:number, currentPage:number, pesquisa:string | null, livroCategoriaId:number | null){
    const data = {
        "pageSize": pageSize,
        "currentPage": currentPage,
        "pesquisa": pesquisa,
        "livroCategoriaId": livroCategoriaId
    }
    try{
        const response = await axios.post("https://beta-api-new.plasfran.com/api/livro/listagem", data, { headers: headers});
        return response.data;
    }catch(error){
        return ("Error a encontrar" + error)
    }
}
async function cadastrarLivro(livro:FormData){
    const data = {
        "titulo": livro.titulo,
        "subtitulo": livro.subtitulo,
        "codigo": livro.codigo,
        "editora": livro.editora,
        "autor": livro.autor,
        "sinopse": livro.sinopse,
        "anoEdicao": livro.anoEdicao,
        "livroCategoriaId": livro.livroCategoria
    }
    try {
        const response = await axios.post("https://beta-api-new.plasfran.com/api/livro", data, {headers: headers})
        return response.data
    } catch (error) {
        return("Erro ao cadastrar Livro" + error)
    }
}

async function listagemCategorias(pesquisa:string){
    const data ={
        "pesquisa": pesquisa
    }
    try{
        const response = await axios.post("https://beta-api-new.plasfran.com/api/LivroCategoria/Select", data, {headers: headers})
        return response.data
    }catch(error){
        return ("Erro ao cadastrar o Livro" + error)
    }
}
async function listarLivroId(id:number){
    try{
        const response = await axios.get("https://beta-api-new.plasfran.com/api/livro/"+id, {headers: headers})
        return response.data
    }catch(error){
        return("Erro ao buscar o livro"+ error)
    }
}
export { listagemLivros, cadastrarLivro, listagemCategorias, listarLivroId}