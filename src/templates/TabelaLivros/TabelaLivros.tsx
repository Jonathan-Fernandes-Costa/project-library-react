import { Livro } from "../../types/livro.d"
import HeaderLivros from "../../components/HeaderLivros/HeaderLivros"
import BotaoAção from "../../components/BotaoDropdownMenu/BotaoDropdowMenu"
import {FaPencilAlt} from 'react-icons/fa'
function TabelaLivros({livros}: {livros:Livro[]}) {
    function convertToBrazilianFormat(dateString: string) {
        const date = new Date(dateString);
      
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Adicionamos 1 porque os meses no JavaScript são 0-indexed (0-11)
        const year = date.getFullYear();
      
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
      
        return `${day}/${month}/${year} ${hours}:${minutes}`;
      }
      
      const apiDate = "2023-06-13T18:10:39.948937";
      const formattedDate = convertToBrazilianFormat(apiDate);
      console.log(formattedDate); // Exibe: 13/06/2023 18:10
      
    return (
        <div>
        <div className="p-5 ">
            <div className=" bg-white shadow-md rounded-md p-4 overflow-x-auto w-full max-w-full">
                <div className="min-w-full">
                <HeaderLivros thema="Lista"/>

                </div>
                <table className="min-w-full text-left text-sm dark:border-neutral-500 dark:bg-neutral-600">
                    <thead className="bg-neutral-100">
                        <tr>
                            <th className="py-3 border-b">Título</th>
                            <th className="py-3 border-b">Subtitulo</th>
                            <th className="py-3 border-b">Categoria</th>
                            <th className="py-3 border-b">Autor</th>
                            <th className="py-3 border-b">Alterações</th>
                            <th  className="py-3 border-b">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                     {livros.length >0 && livros.map(livro => (
                        <tr className="border-b bg-white-100 hover:bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td className="custom-cell">{livro.titulo}</td>
                        <td className="custom-cell">{livro.subtitulo}</td>
                        <td className="custom-cell">{livro.livroCategoria.descricao}</td>
                        <td className="custom-cell">{livro.autor}</td>
                        <td className="custom-cell"><div className="inline-flex bg-green-200 text-xs text-green-700 rounded-md p-1">
                        <FaPencilAlt/>{livro.usuarioUltimaAlteracao + " - " + convertToBrazilianFormat(livro.dataUltimaAlteracao)}</div></td>
                        <td className=""><BotaoAção editar={true} excluir={true}/></td>
                    </tr>
                     ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default TabelaLivros