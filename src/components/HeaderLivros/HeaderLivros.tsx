import { FaBook, FaPrint } from 'react-icons/fa';
import { Link } from "react-router-dom";

function HeaderLivros({thema}: {thema: "Adicionar" | "Lista"}) {
  if(thema == "Adicionar"){
    return (
        <div className='p-3'>
        <div className='bg-white shadow-md rounded-md p-4'>
          <div className='justify-between flex itens-end'>
            <div>
              <h2 className='text-green-800 flex text-xl font-semibol'><FaBook className="mt-1" /> <div className='ml-1'>Livros</div> </h2>
              <h3 className='text-gray-400'>Cadastro de Livros</h3>
            </div>
            <div className='text-white'>
              <button className='flex p-3 bg-gray-800 mr-3 rounded-md'><FaPrint className="mt-1 mr-1" />Imprimir</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  if(thema == "Lista"){
    return(
      <div className='p-3'>
          <div className='justify-between flex itens-end mb-5'>
            <div>
              <h2 className='text-green-800 flex text-xl font-semibol'><FaBook className="mt-1" /> <div className='ml-1'>Livros</div> </h2>
            </div>
            <div className='flex text-white'>
              <button className='flex p-2 bg-gray-800 mr-3 rounded-md'><FaPrint className="mt-1 mr-1" />Imprimir</button>
              <Link to="/cadastroLivro">
                <button className='flex p-2 bg-green-700 rounded-md '>Adicionar</button>
              </Link>
            </div>
        </div>
      </div>
    )
  }
}

export default HeaderLivros