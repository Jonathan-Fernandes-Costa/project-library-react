/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Header from "../components/Header/Header"
import HeaderLivros from "../components/HeaderLivros/HeaderLivros"
import { atualizarLivro, cadastrarLivro, listagemCategorias, listarLivroId } from "../services/chamadasAPI"
import FormCadastroLivro from "../templates/FormulárioCadastroLivro/FormCadastroLivro"
import { useNavigate, useParams } from "react-router-dom";
import { FormData } from "../types/livro.d";
import { debounce } from "../services/debounce";


function CadastroLivros() {
  const [categorias, setCategorias] = useState([]);
  const { id: idString } = useParams<{ id?: string }>();
  const [livro, setLivro] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const id = idString ? parseInt(idString, 10) : undefined;

  async function PegaCategorias() {
    const categorias = await listagemCategorias();
    setCategorias(categorias)
  }
  async function PegaLivro() {
    if (id) {
      const livro = await listarLivroId(id!)
      setLivro(livro)
    }
  }
  const navigation = useNavigate();
  async function HandleCadastrar(livro: FormData) {
    setIsLoading(true);
    try {
      await cadastrarLivro(livro);
    } finally {
      navigation('/livros');
      setIsLoading(false);
    }
  }
  async function HandleAtualizar(livro: FormData) {
    setIsLoading(true);
    try {
      await atualizarLivro(id!, livro);
    } finally {
      navigation('/livros');
      setIsLoading(false);
    }
  }
  const debouncedCadastro = debounce(HandleCadastrar, 2000)
  const debouncedAtualizar = debounce(HandleAtualizar, 2000)
  const startCadastro = (livro: FormData) => {
    setIsLoading(true);
    debouncedCadastro(livro);
  }

  const startAtualizar = (livro: FormData) => {
    setIsLoading(true);
    debouncedAtualizar(livro);
  }

  useEffect(() => {
    PegaCategorias()
    PegaLivro()
  }, []);
  document.body.style.backgroundColor = "lightgray";
  return (
    <div>
      <Header />
      <HeaderLivros thema="Adicionar" />
      <FormCadastroLivro
        handleCadastrar={startCadastro}
        handleAtualizar={startAtualizar}
        categorias={categorias}
        livro={livro}
        isLoading={isLoading}
      />
    </div>
  )
}

export default CadastroLivros