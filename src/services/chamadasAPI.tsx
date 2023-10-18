import axios from 'axios';

const headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lVXN1YXJpbyI6IkVTVEFHSUFSSU8iLCJub21lQ29sYWJvcmFkb3IiOiJBTlRPTklPIEFNQVVSSSBCRVNFUlJBIERFIFNPVVNBIiwiaWRDb2xhYm9yYWRvciI6Ijg1NiIsImlkQ2FyZ28iOiI0MiIsImNhcmdvIjoiUEVEUkVJUk8iLCJpZFVzdWFyaW8iOiIyNDkiLCJhbWJpZW50ZSI6IlBST0QiLCJleHAiOjE2OTc2OTMwMDgsImlzcyI6IkJPWDNfRVJQX0FQSSIsImF1ZCI6Imh0dHBzOi8vcGxhc2ZyYW4uY29tIn0.PdxXf0nT1z-VUWrfgLytSMTXAzBi5gUsVChLsYKHo5g'
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
        return response;
    }catch(error){
        return ("Error a encontrar")
    }
}

export { listagemLivros, }