/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from '../components/Header/Header'
import Filtro from '../templates/Filtros/Filtro'
import TabelaLivros from '../templates/TabelaLivros/TabelaLivros'
import { deletarLivroId, listagemCategorias, listagemLivros } from '../services/chamadasAPI'
import { useState, useEffect } from 'react';
import { debounce } from '../services/debounce';
import { dadosListagem } from '../types/livro.d';





function Livros() {
  const [livros, setLivros] = useState([]);
  const [dados, setDados] = useState<dadosListagem>({
    dados: [],
    totalPages: 0,
    currentPage: 0,
    pageSize: 0,
    totalRegister: 0
  });
  const [currentPage, setCurrentPage] = useState(0);
  const [pesquisa, setPesquisa] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [categoriaPesquisa, setCategoriaPesquisa] = useState<number | string | null>(null);

  async function PegaCategorias() {
    const categorias = await listagemCategorias();
    setCategorias(categorias)
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
    setDados(livros)
    setLivros(livros.dados)
  }

  const debouncedPegaLivros = debounce(PegaLivros, 2000);

  function handlePesquisa(value: string) {
    setPesquisa(value);
    debouncedPegaLivros();
  }


  useEffect(() => {
    PegaLivros();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, categoriaPesquisa]);

  useEffect(() => {
    PegaCategorias()
  }, [])
  document.body.style.backgroundColor = "lightgray";
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
