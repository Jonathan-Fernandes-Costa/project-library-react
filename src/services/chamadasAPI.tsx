import api from './api';
import { FormData } from '../types/livro.d';
import { toast } from 'react-toastify';
import { LoginForm } from '../types/login.d';

async function listagemLivros(pageSize:number, currentPage:number, pesquisa:string | null, livroCategoriaId:string |number | null){
    const data = {
        "pageSize": pageSize,
        "currentPage": currentPage,
        "pesquisa": pesquisa?.toUpperCase(),
        "livroCategoriaId": livroCategoriaId
    }
    try{
        const response = await api.post("https://localhost:7246/api/Livros", data);
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
        "livroCategoriaId": livro.livroCategoriaId
    }
    try {
        const response = await api.post("/Livros/cadastro", data)
        toast.success("Cadastro realizado com sucesso")
        return response.data
    } catch (error) {
        toast.error("Erro ao cadastrar livro")
        return("Erro ao cadastrar Livro" + error)
    }
}

async function listagemCategorias(){
    try{
        const response = await api.get("/LivroCategoria")
        return response.data
    }catch(error){
        return ("Erro ao cadastrar o Livro" + error)
    }
}
async function listarLivroId(id:number){
    try{
        const response = await api.get("/Livros/"+id)
        return response.data
    }catch(error){
        return("Erro ao buscar o livro"+ error)
    }
}
async function deletarLivroId(id:number){
    try{
        const response = await api.delete("/Livros/"+id)
        toast.success("Contato deletado com sucesso")
        return response.data

    }catch(error){
        toast.error("Erro ao deletar : "+error)
        return("Erro ao buscar o livro"+ error)
    }
}
async function atualizarLivro(id:number , livro: FormData){
    try{
        const response = await api.put("/Livros/"+id, livro)
        toast.success("Livro atualizado com sucesso")
        return response.data
    }catch(error){
        toast.error("Erro ao atualizar contato")
        return("Erro ao atualizar"+error)
    }
}

async function login(data: LoginForm){
    try{
        const response = await api.post("/login", data)
        toast.success("Login concluído")
        return response.data
    }catch(error){
        toast.error("Login ou senha inválidos")
        return("Login ou senha inválidos"+ error)
    }
}
async function validaToken(){
    try{
        const response = await api.get("/sessao/validar")
        if(response.data){
            return true
        }
    }catch(error){
        return(false)
    }
}
export {validaToken, login, listagemLivros, cadastrarLivro, listagemCategorias, listarLivroId, deletarLivroId, atualizarLivro}