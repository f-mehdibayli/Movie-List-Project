const baseUrl="https://acb-api.algoritmika.org/api/movies/list"

export const getMyList = async(id) => {
    try {
        const res= await fetch(`${baseUrl}/${id}`);
        const data= await res.json()
        return data
    } catch (error) {
        console.log("MyList error:",error)
    }
}
 
