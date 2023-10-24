import Header from "../components/Header/Header"
import HeaderLivros from "../components/HeaderLivros/HeaderLivros"
import FormCadastroLivro from "../templates/FormulárioCadastroLivro/FormCadastroLivro"

function CadastroLivros() {
  return (
    <div>
      <Header/>
      <HeaderLivros thema="Adicionar"/>
      <FormCadastroLivro/>
    </div>
  )
}

export default CadastroLivros