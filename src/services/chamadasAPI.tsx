import axios from 'axios';

const headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lVXN1YXJpbyI6IkVTVEFHSUFSSU8iLCJub21lQ29sYWJvcmFkb3IiOiJBTlRPTklPIEFNQVVSSSBCRVNFUlJBIERFIFNPVVNBIiwiaWRDb2xhYm9yYWRvciI6Ijg1NiIsImlkQ2FyZ28iOiI0MiIsImNhcmdvIjoiUEVEUkVJUk8iLCJpZFVzdWFyaW8iOiIyNTEiLCJhbWJpZW50ZSI6IlBST0QiLCJleHAiOjE2OTgxMTgxMTEsImlzcyI6IkJPWDNfRVJQX0FQSSIsImF1ZCI6Imh0dHBzOi8vcGxhc2ZyYW4uY29tIn0.C8K06UhN8aAdUR44dSevFIxdWxJYm9qQpq2VNlSaojs'
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