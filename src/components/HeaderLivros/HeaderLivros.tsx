import {FaBook, FaPrint} from 'react-icons/fa';
function HeaderLivros() {
  return (
    <div className='justify-between flex itens-end mb-5'>
        <div>
        <h2 className='text-green-700 flex text-xl font-semibol'><FaBook className="mt-1"/> <div className='ml-1'>Livros</div> </h2>
        </div>
        <div className='flex text-white'>
        <button className='flex p-2 bg-gray-800 mr-3 rounded-md'><FaPrint className="mt-1 mr-1"/>Imprimir</button>
        <button className='flex p-2 bg-green-700 rounded-md '>Adicionar</button>
        </div>
    </div>
  )
}

export default HeaderLivros