import Header from '../components/Header/Header'
import Filtro from '../templates/Filtros/Filtro'
import TabelaLivros from '../templates/TabelaLivros/TabelaLivros'
import { deletarLivroId, listagemCategorias, listagemLivros } from '../services/chamadasAPI'
import { useState, useEffect } from 'react';

function Livros() {
  const [livros, setLivros] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pesquisa, setPesquisa] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [categoriaPesquisa, setCategoriaPesquisa] = useState(null);

  async function PegaCategorias() {
    const categorias = await listagemCategorias("");
    setCategorias(categorias.dados)
  }
  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    if (currentPage >= 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  async function ApagaLivro(id: number) {
    await deletarLivroId(id)
    PegaLivros()
  }
  async function PegaLivros() {
    const livros = await listagemLivros(12, currentPage, pesquisa, categoriaPesquisa);
    setLivros(livros.dados.dados)
  }
  useEffect(() => {
    PegaLivros()
  },  [currentPage, pesquisa, categoriaPesquisa]);


  useEffect(() =>{
    PegaCategorias()
  },[])
  return (
    <div>
      <Header />
      <Filtro
        categorias={categorias}
        handlePesquisa={setPesquisa}
        setCategoriaPesquisa={setCategoriaPesquisa}
        categoriaPesquisa={categoriaPesquisa}
        pesquisa={pesquisa}
      />
      <TabelaLivros
        livros={livros}
        handleExcluir={ApagaLivro}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />


    </div>
  )
}

export default Livros