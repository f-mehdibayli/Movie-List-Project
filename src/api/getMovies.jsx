const baseUrl = "http://www.omdbapi.com/"
const apiKey="cdb60b42"

const getMovies=async(searchText)=> {
    try {
        const res=await fetch(`${baseUrl}?s=${searchText}&apikey=${apiKey}`)
        const data=await res.json();
        return data
    } catch (error) {
        alert("Xeta bas verdi: ",error )
    }

}
export default getMovies;