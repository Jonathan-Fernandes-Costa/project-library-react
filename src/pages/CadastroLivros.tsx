import { useEffect, useState } from "react";
import Header from "../components/Header/Header"
import HeaderLivros from "../components/HeaderLivros/HeaderLivros"
import { listagemCategorias } from "../services/chamadasAPI"
import FormCadastroLivro from "../templates/FormulárioCadastroLivro/FormCadastroLivro"

function CadastroLivros() {
  const [categorias, setCategorias] = useState([]);
  async function PegaCategorias() {
    const categorias = await listagemCategorias("");
    setCategorias(categorias.dados)
  }
  useEffect(() => {
    PegaCategorias()
  }, []);
  return (
    <div>
      <Header/>
      <HeaderLivros thema="Adicionar"/>
      <FormCadastroLivro categorias={categorias}/>
    </div>
  )
}

export default CadastroLivros