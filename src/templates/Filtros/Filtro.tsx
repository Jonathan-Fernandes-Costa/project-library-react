import { CategoriaLivros } from '../../types/livro.d';

function Filtro({ pesquisa, categorias, handlePesquisa, categoriaPesquisa, setCategoriaPesquisa }: { pesquisa: string, categorias: CategoriaLivros[], handlePesquisa: (texto: string) => void, setCategoriaPesquisa: (text: any) => void, categoriaPesquisa: number | null }) {
    return (
        <div className="p-5">
            <div className='p-3 bg-white shadow-md rounded-md'>
                <h2 className="block shadow-2xl mb-4 text-xl font-semibold">Filtros</h2>
                <div className='flex'>
                    <div className="w-2/3 mb-4 mr-4">
                        <label className="mb-2 font-medium ">Pesquisa <span className="text-sm text-gray-500">(Id, Título, Subtítulo, Código, Editora, Autor, Sinopse, Ano Edição)</span></label>
                        <input
                            type="text"
                            placeholder="Pesquisar..."
                            className="w-full p-2 border rounded-md"
                            value={pesquisa}
                            onChange={e => handlePesquisa(e.target.value)}
                        />
                    </div>

                    <div className="w-1/3 mb-4 ">
                        <label className="mb-2 font-medium text-gray-600">Livro Categoria</label>
                        <select
                            className="w-full p-2 border rounded-md"
                            value={categoriaPesquisa}
                            onChange={e => {
                                if (e.target.value == "todos") {
                                    setCategoriaPesquisa(null)
                                } else {
                                    setCategoriaPesquisa(e.target.value)
                                }

                            }
                            }

                        >
                            <option value="todos">Todos</option>
                            {categorias && categorias.map(categoria => (
                                <option key={categoria.id} value={categoria.id}>{categoria.descricao}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filtro