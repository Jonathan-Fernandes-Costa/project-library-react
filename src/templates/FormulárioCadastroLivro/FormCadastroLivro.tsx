import React from 'react';
import { useForm } from 'react-hook-form';
import imageIcon from '../../assets/images/input-image.png';
import Obrigatorio from '../../components/Obrigatorio/Obrigatorio';
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
        <form onSubmit={handleSubmit(onSubmit)} className="flex">
          <div className='bg-white shadow-md rounded-md mr-5 w-1/3'>
            <div className="flex flex-col items-center justify-center p-5">
              <h2 className='font-bold'>Envio de Arquivos!<span className='text-red-500'> *</span></h2>
              <h3>Clique ou arraste seu arquivo até aqui!</h3>
              <div className='mt-4 border-dashed border-2'>
                <input
                  type="file"
                  className="hidden"
                  {...register('arquivo')}
                  ref={fileInputRef}
                />
                <div className="">
                  <img
                    src={imageIcon}
                    alt="Ícone de upload"
                    className="mx-auto cursor-pointer"
                    onClick={onFileInputClick}
                  />
                </div>

              </div>
            </div>
          </div>
          <div className='bg-white shadow-md rounded-md w-full p-3'>
            {/* Tranformar em Componentes depois */}
            <div className='flex'>
              <div className='w-1/4 mr-2 flex flex-col'>
                <label className='mb-1'>Código <Obrigatorio /></label>
                <input {...register('codigo')} className="w-full p-2 border rounded-md" />
              </div>
              <div className='w-1/4 mr-2 flex flex-col'>
                <label className='mb-1'>Ano Edição <Obrigatorio /> </label>
                <input {...register('anoEdicao')} className="w-full p-2 border rounded-md" />
              </div>
              <div className='w-1/2 flex flex-col'>
                <label className='mb-1'>Título <Obrigatorio /></label>
                <input {...register('titulo')} className="w-full p-2 border rounded-md" />
              </div>
            </div>
            <div className='w-full mt-3 flex flex-col'>
              <label className='mb-1'>Subtitulo <Obrigatorio /></label>
              <input {...register('subtitulo')} className="w-full p-2 border rounded-md" />
            </div>
            <div className='flex mt-3'>
              <div className='w-1/2 mr-2 flex flex-col'>
                <label className='mb-1'>Livro Categoria <Obrigatorio /></label>
                <select {...register('livroCategoria')} className="p-2 h-full border rounded-md">
                  <option value="selecione">Selecione</option>
                </select>
              </div>
              <div className='w-1/2 flex flex-col'>
                <label className='mb-1'>Editora <Obrigatorio /></label>
                <input {...register('editora')} className="p-2 border rounded-md" />
              </div>
            </div>
            <div className='w-full mt-3 flex flex-col'>
              <label className='mb-1'>Autor <Obrigatorio /></label>
              <input {...register('autor')} className="w-full p-2 border rounded-md" />
            </div>
            <div className='w-full mt-3 flex flex-col'>
              <label className='mb-1'>Sinopse <Obrigatorio /></label>
              <textarea {...register('sinopse')} className="w-full h-full p-2 border rounded-md" />
            </div>
            <button type="submit" className="p-2 mt-10 bg-blue-500 text-white">Enviar</button>
          </div>



        </form>
      </div>
    </div>
  );
}

export default FormCadastroLivro;