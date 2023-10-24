import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  codigo: string;
  anoEdicao: string;
  titulo: string;
  subtitulo: string;
  livroCategoria: string;
  editora: string;
  autor: string;
  sinopse: string;
  arquivo: FileList;
};

function FormCadastroLivro() {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const onFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
//testea
  return (
    <div className='p-5'>
      <div className='mt-1 p-3'>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex">
          <div className='bg-white shadow-md rounded-md mr-5 p-10'>
            <div className="flex flex-col items-center justify-center  p-4">
              <h2 className='font-bold'>Envio de Arquivos!</h2>
              <h3>Clique ou arraste seu arquivo até aqui!</h3>
              <div className='border-dashed border-2 '>
              <input
                type="file"
                className="hidden"
                {...register('arquivo')} 
                ref={fileInputRef}
              />
              <div className="mb-2">
                <img
                  src="./assets/input-image.png"
                  alt="Ícone de upload"
                  className="h-16 w-16"
                />
              </div>

              </div>
              <div>
                <button
                  type="button"
                  className="text-gray-600"
                  onClick={onFileInputClick}
                >TEste
                </button>
              </div>
            </div>
          </div>

          <div className='bg-white shadow-md rounded-md '>
          <input {...register('codigo')} placeholder="Código" className="w-full p-2 border" />
          <input {...register('anoEdicao')} placeholder="Ano Edição" className="w-full p-2 border" />
          <input {...register('titulo')} placeholder="Título" className="w-full p-2 border" />
          <input {...register('subtitulo')} placeholder="Subtitulo" className="w-full p-2 border" />

          <select {...register('livroCategoria')} className="w-full p-2 border">
            <option value="selecione">Selecione</option>

          </select>

          <input {...register('editora')} placeholder="Editora" className="w-full p-2 border" />
          <input {...register('autor')} placeholder="Autor" className="w-full p-2 border" />
          <textarea {...register('sinopse')} placeholder="Sinopse" className="w-full p-2 border" />


          <button type="submit" className="p-2 bg-blue-500 text-white">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCadastroLivro;