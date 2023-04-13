const baseUrl="https://acb-api.algoritmika.org/api/movies/list"


const createList = async (listTitle,list) => {
    try {
        const res=await fetch(baseUrl,{
            method: "POST",
            headers:{
                'Content-type':'application/json'   
            },
            body: JSON.stringify({
                title:listTitle,
                movies:list
            })
        });
        const data =await res.json()
        return data
    } catch (error) {
        alert("POST Error: ",error)
    }
}

export default createList
