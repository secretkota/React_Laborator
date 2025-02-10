function Article ({title, desc, img}) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{desc}</p>
            <img src={img} />
        </article>
    )
}

export default Article