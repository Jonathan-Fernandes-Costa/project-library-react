import axios from 'axios';

const headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lVXN1YXJpbyI6IkVTVEFHSUFSSU8iLCJub21lQ29sYWJvcmFkb3IiOiJBTlRPTklPIEFNQVVSSSBCRVNFUlJBIERFIFNPVVNBIiwiaWRDb2xhYm9yYWRvciI6Ijg1NiIsImlkQ2FyZ28iOiI0MiIsImNhcmdvIjoiUEVEUkVJUk8iLCJpZFVzdWFyaW8iOiIyNDkiLCJhbWJpZW50ZSI6IlBST0QiLCJleHAiOjE2OTc3NTg4NjksImlzcyI6IkJPWDNfRVJQX0FQSSIsImF1ZCI6Imh0dHBzOi8vcGxhc2ZyYW4uY29tIn0.V4-kpsy4mb-2ual6E1Fug5pe_iO1aOYU1oyfTbt4fD8'
  };

  
async function listagemLivros(pageSize:number, currentPage:number, pesquisa:string | null, livroCategoriaId:number | null){
    const data = {
        "pageSize": pageSize,
        "currentPage": currentPage,
        "pesquisa": pesquisa,
        "livroCategoriaId": livroCategoriaId
    }
    try{
        const response = await axios.post("https://beta-api-new.plasfran.com/api/livro/listagem", data, { headers: headers});
        return response.data;
    }catch(error){
        return ("Error a encontrar")
    }
}

export { listagemLivros, }