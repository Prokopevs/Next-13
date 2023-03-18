type props = {
    post: Post
}

const UserPost: React.FC<props> = ({ post }) => {
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <br />
        </article>
    )
}

export default UserPost
