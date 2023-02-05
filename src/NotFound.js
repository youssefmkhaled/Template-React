import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
        <h2>Oppss...</h2>
        <p>That page can't be Found</p>
        <Link to='/'>Back to the Homepage </Link>
        </div>
    );
}

export default NotFound;