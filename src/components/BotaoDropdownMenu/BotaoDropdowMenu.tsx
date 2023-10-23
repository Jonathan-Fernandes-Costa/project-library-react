import {BsThreeDotsVertical} from 'react-icons/bs'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

function BotaoDropdowMenu({editar, excluir, handleEditar, handleExcluir}: {editar?: boolean, excluir?: boolean, handleEditar?: ()=> void, handleExcluir?: ()=> void}) {
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
          <DropdownMenu.Item onClick={handleEditar} className="px-4 py-2 hover:bg-gray-200">
            Editar
          </DropdownMenu.Item>
          )}
          {excluir && (
            <DropdownMenu.Item onClick={handleExcluir} className="px-4 py-2 hover:bg-gray-200">
            Excluir
          </DropdownMenu.Item>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}

export default BotaoDropdowMenu