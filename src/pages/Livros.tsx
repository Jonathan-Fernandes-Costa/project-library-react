/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from '../components/Header/Header'
import Filtro from '../templates/Filtros/Filtro'
import TabelaLivros from '../templates/TabelaLivros/TabelaLivros'
import { deletarLivroId, listagemCategorias, listagemLivros } from '../services/chamadasAPI'
import { useState, useEffect } from 'react';
import { debounce } from '../services/debounce';



function Livros() {
  const [livros, setLivros] = useState([]);
  const [dados, setDados] = useState({});
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
  function changePage(page:number){
    setCurrentPage(page)
  }

  async function ApagaLivro(id: number) {
    await deletarLivroId(id)
    PegaLivros()
  }

  async function PegaLivros() {
    const livros = await listagemLivros(12, currentPage, pesquisa, categoriaPesquisa);
    setLivros(livros.dados.dados)
    setDados(livros.dados)
  }

  const debouncedPegaLivros = debounce(PegaLivros, 2000);

  function handlePesquisa(value: string) {
    setPesquisa(value);
    debouncedPegaLivros();
  }


  useEffect(() => {
    PegaLivros();
  }, [currentPage, categoriaPesquisa]);

  useEffect(() => {
    PegaCategorias()
  }, [])

  return (
    <div>

        <Header />
        <Filtro
          categorias={categorias}
          handlePesquisa={handlePesquisa}
          setCategoriaPesquisa={setCategoriaPesquisa}
          categoriaPesquisa={categoriaPesquisa}
          pesquisa={pesquisa}
        />
        <TabelaLivros
          dados={dados}
          livros={livros}
          handleExcluir={ApagaLivro}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
          changePage={changePage}
        />

    </div>
  )
}

export default Livros
