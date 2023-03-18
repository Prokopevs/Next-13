import axios from "axios"

const getUserPosts = async (userId: string) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        return res.data
    } catch (err) {
        console.log(err)
        return undefined
    }
}

export default getUserPosts
