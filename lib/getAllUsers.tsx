import axios from "axios"

const getAllUsers = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")  
        return res.data
    } catch(err) {
        console.log(err)
    }
}

export default getAllUsers