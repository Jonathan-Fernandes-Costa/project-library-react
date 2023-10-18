import Header from '../components/Header'
import Filtro from '../components/Filtros/Filtro'
import { listagemLivros } from '../services/chamadasAPI'

function Livros() {
  listagemLivros(12, 0 , null, null).then(response =>{
    console.log(response);
  })
  return (
    <div>  
        <Header/>
        <Filtro/>

    </div>
  )
}

export default Livros