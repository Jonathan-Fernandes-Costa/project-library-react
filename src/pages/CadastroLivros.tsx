import { useEffect, useState } from "react";
import Header from "../components/Header/Header"
import HeaderLivros from "../components/HeaderLivros/HeaderLivros"
import { atualizarLivro, cadastrarLivro, listagemCategorias, listarLivroId } from "../services/chamadasAPI"
import FormCadastroLivro from "../templates/FormulárioCadastroLivro/FormCadastroLivro"
import { useNavigate, useParams } from "react-router-dom";
import { FormData } from "../types/livro.d";


function CadastroLivros() {
  const [categorias, setCategorias] = useState([]);
  const { id: idString } = useParams<{ id?: string }>();
  const [livro, setLivro] = useState({});
  const id = idString ? parseInt(idString, 10) : undefined;
  async function PegaCategorias() {
    const categorias = await listagemCategorias("");
    setCategorias(categorias.dados)
  }
  async function PegaLivro(){
    if(id){
      const livro = await listarLivroId(id!)
      setLivro(livro.dados)
    }
  }
  const navigation = useNavigate();
  async function HandleCadastrar(livro:FormData){
    await cadastrarLivro(livro)
    navigation('/')
  }
  async function HandleAtualizar(livro:FormData){
    await atualizarLivro(livro)
    navigation('/')
  }
  useEffect(() => {
    PegaCategorias()
    PegaLivro()
  }, []);
  return (
    <div>
      <Header/>
      <HeaderLivros thema="Adicionar"/>
      <FormCadastroLivro handleCadastrar={HandleCadastrar} handleAtualizar={HandleAtualizar} categorias={categorias} livro={livro}/>
    </div>
  )
}

export default CadastroLivros