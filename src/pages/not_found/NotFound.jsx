import {  Link } from "react-router-dom";

const textStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}

const textStyle2 = {
    position: "fixed",
    fontSize: 100,
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}

const NotFoundPage = () => {
    return (
        <div>
            <h1 style={textStyle2}>404</h1>
            <h2 style={textStyle}> Oops! Something went wrong! 
                <Link to="/" href="/#"> Back to home </Link>
            </h2>
        </div>
    )
}

export default NotFoundPage