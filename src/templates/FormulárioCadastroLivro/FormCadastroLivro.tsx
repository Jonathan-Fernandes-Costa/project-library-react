import React from 'react';
import { useForm } from 'react-hook-form';
import imageIcon from '../../assets/images/input-image.png';
import Obrigatorio from '../../components/Obrigatorio/Obrigatorio';
import { cadastrarLivro } from '../../services/chamadasAPI';
import { CategoriaLivros, FormData } from '../../types/livro.d';


function FormCadastroLivro({categorias}: {categorias:CategoriaLivros[]}) {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const onFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const { register, handleSubmit, formState: {errors}} = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    cadastrarLivro(data)
  };
  //testea
  return (
    <div className='p-1'>
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
                <input {...register('codigo', { required: true})} className="w-full p-2 border rounded-md" />
              </div>
              <div className='w-1/4 mr-2 flex flex-col'>
                <label className='mb-1'>Ano Edição <Obrigatorio /> </label>
                <input {...register('anoEdicao', { required: true})} className="w-full p-2 border rounded-md" />
              </div>
              <div className='w-1/2 flex flex-col'>
                <label className='mb-1'>Título <Obrigatorio /></label>
                <input {...register('titulo', { required: true})} className="w-full p-2 border rounded-md" />
              </div>
            </div>
            <div className='w-full mt-3 flex flex-col'>
              <label className='mb-1'>Subtitulo <Obrigatorio /></label>
              <input {...register('subtitulo', { required: true})} className="w-full p-2 border rounded-md" />
            </div>
            <div className='flex mt-3'>
              <div className='w-1/2 mr-2 flex flex-col'>
                <label className='mb-1'>Livro Categoria <Obrigatorio /></label>
                <select {...register('livroCategoria', { required: true, validate: value => value !== "selecione"})} className="p-2 h-full border rounded-md">
                <option value="selecione">Selecione</option>
                  {categorias.length >0 && categorias.map(categoria =>(
                    <option value={categoria.id}>{categoria.descricao}</option>
                  ))}
                </select>
              </div>
              <div className='w-1/2 flex flex-col'>
                <label className='mb-1'>Editora <Obrigatorio /></label>
                <input {...register('editora', { required: true})} className="p-2 border rounded-md" />
              </div>
            </div>
            <div className='w-full mt-3 flex flex-col'>
              <label className='mb-1'>Autor <Obrigatorio /></label>
              <input {...register('autor', { required: true})} className="w-full p-2 border rounded-md" />
            </div>
            <div className='w-full mt-3 flex flex-col'>
              <label className='mb-1'>Sinopse <Obrigatorio /></label>
              <textarea {...register('sinopse', { required: true})} className="w-full h-full p-2 border rounded-md" />
            </div>
            <button type="submit" className="p-2 mt-10 bg-blue-500 text-white">Enviar</button>
            {Object.keys(errors).length > 0 && 
                <span className="text-red-500 ml-3">Preencha todos os campos obrigatórios</span>
            }
          </div>



        </form>
      </div>
    </div>
  );
}

export default FormCadastroLivro;