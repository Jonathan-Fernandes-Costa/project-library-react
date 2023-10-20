import React from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

function BotaoAção() {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button className="p-2 bg-gray-300 rounded-md focus:outline-none">
            <BsThreeDotsVertical/>
          </button>
        </DropdownMenu.Trigger>
        
        <DropdownMenu.Content className="mt-2 bg-white border border-gray-200 shadow-md">
          <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-200">
            Editar
          </DropdownMenu.Item>
          <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-200">
            Excluir
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}

export default BotaoAção