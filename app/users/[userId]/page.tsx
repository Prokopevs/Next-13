import getAllUsers from "@/lib/getAllUsers"
import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import UserPost from "./components/UserPost"
import { notFound } from 'next/navigation'

type Params = {
    params: {
        userId: string
    }
}

const UserPage = async ({ params: { userId } }: Params) => {
    const userData: User = await getUser(userId)
    const UserPostsData: Post[] = await getUserPosts(userId)

    const [user, UserPosts] = await Promise.all([userData, UserPostsData])
    if(!user.name) return notFound()

    return (
        <div>
            <h2>{user.name}</h2>
            <br />
            {UserPosts.map((post) => (
                <div key={post.id}>
                    <UserPost post={post} />
                </div>
            ))}
        </div>
    )
}

export default UserPage

export async function generateStaticParams() {
    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData

    return users.map(user => ({
        userId: user.id.toString()
    }))
}
