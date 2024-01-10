import { Livro, dadosListagem } from "../../types/livro.d"
import HeaderLivros from "../../components/HeaderLivros/HeaderLivros"
import BotaoAção from "../../components/BotaoDropdownMenu/BotaoDropdowMenu"
import { FaPencilAlt } from 'react-icons/fa'
function TabelaLivros({ dados, livros, handleExcluir, nextPage, prevPage, currentPage, changePage}: { dados: dadosListagem, livros: Livro[], handleExcluir: (id: number) => void, nextPage: () => void, prevPage: () => void, currentPage: number, changePage: (page:number)=> void }) {
    function convertToBrazilianFormat(dateString: string) {
        const date = new Date(dateString);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    }
    function calculaMostragem() {
        if (currentPage == 0) {
            if(dados.totalRegister == 0){
                return ("Nenhum livro encontrado")
            }
            if((currentPage + 1) * dados.pageSize < dados.totalRegister){
                return ("Mostrando " + (currentPage + 1) + " até " + (currentPage + 1) * dados.pageSize + " de " + dados.totalRegister + " resultados ")
            } else{
                return ("Mostrando " + (currentPage + 1) + " até " + dados.totalRegister + " de " + dados.totalRegister + " resultados ")
            }
            

        } else if ((currentPage + 1) * dados.pageSize > dados.totalRegister) {
            return ("Mostrando " + currentPage * dados.pageSize + " até " + dados.totalRegister + " de " + dados.totalRegister + " resultados ")
        } else {
            return ("Mostrando " + currentPage * dados.pageSize + " até " + (currentPage + 1) * dados.pageSize + " de " + dados.totalRegister + " resultados ")
        }
    }
    return (
        <div className="p-5 ">
            <div className=" bg-white shadow-md rounded-md p-4 overflow-x-auto w-full max-w-full">
                <div className="min-w-full">
                    <HeaderLivros thema="Lista" />

                </div>
                <table className="min-w-full text-left text-sm dark:border-neutral-500 dark:bg-neutral-600">
                    <thead className="bg-neutral-100">
                        <tr>
                            <th className="py-3 border-b">Título</th>
                            <th className="py-3 border-b">Subtitulo</th>
                            <th className="py-3 border-b">Categoria</th>
                            <th className="py-3 border-b">Autor</th>
                            <th className="py-3 border-b">Alterações</th>
                            <th className="py-3 border-b">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.length > 0 && livros.map(livro => (
                            <tr key={livro.id} className="border-b bg-white-100 hover:bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                <td className="custom-cell">{livro.titulo}</td>
                                <td className="custom-cell">{livro.subtitulo}</td>
                                <td className="custom-cell">{livro.livroCategoria.nome}</td>
                                <td className="custom-cell">{livro.autor}</td>
                                <td className="custom-cell">
                                    <div className="inline-flex bg-green-200 text-xs  text-green-700 rounded-md p-1">
                                    <FaPencilAlt className="my-auto"/>
                                    <div className="ml-2">

                                    {livro.usuarioUltimaAlteracao + " - " + convertToBrazilianFormat(livro.dataUltimaAlteracao)}
                                    </div>
                                    </div>
                                </td>
                                <td className=""><BotaoAção livroid={livro.id} editar={true} handleExcluir={handleExcluir} excluir={true} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 flex justify-between items-center">
                    <div className="font-body">
                        <p>{calculaMostragem()}</p>
                    </div>
                    <div className="flex">
                        <button
                            className="bg-white border-2 hover:border-blue-600 hover:text-blue-600 text-gray-400 px-4 py-2 rounded"
                            onClick={prevPage}
                            disabled={currentPage == 0}
                        >
                            &larr;
                        </button>
                        {currentPage>0 && (
                            <button
                            className="bg-white border-2 hover:border-blue-600 hover:text-blue-600 text-gray-400 px-4 py-2 rounded"
                            onClick={()=> changePage(0)}
                            
                        >
                            1
                        </button>
                        )}
                        <div className="bg-white border-2 hover:border-blue-600 hover:text-blue-600 text-gray-400 px-4 py-2 rounded">
                            <span>{currentPage + 1}</span>

                        </div>
                        <div className="bg-white border-2 hover:border-blue-600 hover:text-blue-600 text-gray-400 px-4 py-2 rounded">
                            <span>...</span>

                        </div>
                        {currentPage>0 && (
                            <button
                            className="bg-white border-2 hover:border-blue-600 hover:text-blue-600 text-gray-400 px-4 py-2 rounded"
                            onClick={()=> changePage(dados.totalPages-1)}
                            
                        >
                            {dados.totalPages}
                        </button>
                        )}
                        <button
                            className="bg-white border-2 hover:border-blue-600 hover:text-blue-600 text-gray-400 px-4 py-2 rounded"
                            onClick={nextPage}
                            disabled={currentPage == dados.totalPages - 1}
                        >
                            &rarr;
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabelaLivros
//