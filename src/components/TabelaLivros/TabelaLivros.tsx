function TabelaLivros({livros}) {
    
    return (
        <div>
        <div className="p-5 ">
            <div className=" bg-white shadow-md rounded-md p-3 overflow-x-auto max-w-full">
                <h2 className='text-green-500 mb-3 text-xl font-semibol'>Livros</h2>
                <table className="min-w-full text-left text-sm font-medium dark:border-neutral-500 dark:bg-neutral-600">
                    <thead className="">
                        <tr className="mt-10">
                            <th>Título</th>
                            <th>Subtitulo</th>
                            <th>Categoria</th>
                            <th>Autor</th>
                            <th>Alterações</th>
                            <th >Ações</th>
                        </tr>
                    </thead>
                    <tbody className='w-1/2'>
                     {livros.length >0 && livros.map(livro => (
                        <tr className="border-b bg-white-100 hover:bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                        <td className="whitespace-nowrap px-6 py-4">{livro.titulo}</td>
                        <td className="whitespace-nowrap px-6 py-4">{livro.subtitulo}</td>
                        <td className="whitespace-nowrap px-6 py-4">{livro.livroCategoria.descricao}</td>
                        <td className="whitespace-nowrap px-6 py-4">{livro.autor}</td>
                        <td className="whitespace-nowrap px-6 py-4">{livro.usuarioUltimaAlteracao + livro.dataUltimaAlteracao}</td>
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