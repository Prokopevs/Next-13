import axios from "axios"

const getUser = async (userId: string) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        return res.data
    } catch (err) {
        console.log(err)
        return undefined
    }
}

export default getUser
