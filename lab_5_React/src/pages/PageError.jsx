import { Link } from "react-router";

export default function PageError() {
    return(
        <>
            <h1>Not Found: Error 404.</h1>
            <p>Go to <Link to="/">main page</Link></p>
        </>
    ) 
}