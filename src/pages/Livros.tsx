import Header from '../components/Header/Header'
import Filtro from '../templates/Filtros/Filtro'
import TabelaLivros from '../templates/TabelaLivros/TabelaLivros'
import { listagemLivros } from '../services/chamadasAPI'
import { useState, useEffect } from 'react';

function Livros() {
  const [livros, setLivros] = useState([]);


  async function PegaLivros() {
    const livros = await listagemLivros(12, 0, "", null);
    setLivros(livros.dados.dados)
  }
  useEffect(() => {
    PegaLivros()
  }, []);

  return (
    <div>
      <Header />
      <Filtro />
      <TabelaLivros livros={livros} />


    </div>
  )
}

export default Livros