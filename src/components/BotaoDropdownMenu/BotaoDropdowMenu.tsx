import {BsThreeDotsVertical, BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

function BotaoDropdowMenu({livroid, editar, excluir, handleEditar, handleExcluir}: {livroid:  number, editar?: boolean, excluir?: boolean, handleEditar?: ()=> void, handleExcluir: (id:number)=> void}) {
  function Apaga(){
    handleExcluir(livroid)
  }
  return (
    <div className="flex justify-center items-center ">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button className="p-2 bg-gray-300 rounded-md focus:outline-none">
            <BsThreeDotsVertical/>
          </button>
        </DropdownMenu.Trigger>
        
        <DropdownMenu.Content className="mt-2 bg-white border border-gray-200 shadow-md">
          {editar && (
          <DropdownMenu.Item onClick={handleEditar} className="px-4 py-2  flex align-middle hover:bg-green-400">
            <BsFillPencilFill className="mr-1"/>Editar
          </DropdownMenu.Item>
          )}
          {excluir && (
            <DropdownMenu.Item onClick={Apaga} className="px-4 py-2 flex align-middle hover:bg-red-400">
            <BsFillTrashFill className="mr-1"/> Excluir
          </DropdownMenu.Item>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}

export default BotaoDropdowMenu