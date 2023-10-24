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

function FormCadastroLivro(){
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
      <input type="file" {...register('arquivo')} className="w-full p-2 border" />
      
      <button type="submit" className="p-2 bg-blue-500 text-white">Enviar</button>
    </form>
  );
}

export default FormCadastroLivro;