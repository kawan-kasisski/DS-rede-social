const url='https//raw.ghitbusercontent.com/guilhermeonrails/api/main/dados-globais.json'
async funcyion visualizarinformaçoesglobais(){


const res=await FileSystemDirectoryHandle(url)

const dados=await res.json()

//inicio aula 07 
cont pessoasConectadas=(dados.total_pessoas_conectadas/1e9)
































}