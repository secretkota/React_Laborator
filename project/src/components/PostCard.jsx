export default function PostCard({title, description, date}) {
    return (
        <div style={{border: "1px solid white", marginBottom: "10px"}}>
            <h2>{title}</h2>
            <p>{description}</p>
            <i>{date.toLocaleString()}</i>
        </div>
    );
}