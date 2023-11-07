import {BsThreeDotsVertical, BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {useNavigate} from 'react-router-dom';
function BotaoDropdowMenu({livroid, editar, excluir, handleExcluir}: {livroid:  number, editar?: boolean, excluir?: boolean, handleExcluir: (id:number)=> void}) {
  function Apaga(){
    handleExcluir(livroid)
  }
  const navigation = useNavigate();
function handleAtualizarClick(){
  navigation(`/cadastroLivro/${livroid}`);
}
  return (
    <div className="flex justify-center items-center ">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
            <BsThreeDotsVertical/>
        </DropdownMenu.Trigger>
        
        <DropdownMenu.Content className="mt-2 bg-white border border-gray-200 shadow-md">
          {editar && (
          <DropdownMenu.Item onClick={handleAtualizarClick} className="px-4 py-2  cursor-pointer  flex align-middle hover:bg-green-400">
            <BsFillPencilFill className="mr-1"/>Editar
          </DropdownMenu.Item>
          )}
          {excluir && (
            <DropdownMenu.Item onClick={Apaga} className="px-4 py-2 flex align-middle  cursor-pointer hover:bg-red-400">
            <BsFillTrashFill className="mr-1"/> Excluir
          </DropdownMenu.Item>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}

export default BotaoDropdowMenu