import PostCard from "./PostCard.jsx";

export default function PostList() {
    return (
        <>
            <PostCard
                title="About Tanya"
                description="Masha loves Tatiana"
                date={new Date("2021-02-14")}
            />
            <PostCard
                title="About Stas"
                description="Stas loves PHP"
                date={new Date("2021-02-14")}
            />
        </>
    )
}