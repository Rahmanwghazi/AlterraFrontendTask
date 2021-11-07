import Navbar from '../../components/navbar/Navbar';

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
        <>
        <Navbar />
            <h1 style={textStyle2}>404</h1>
            <h2 style={textStyle}> Oops! Something went wrong!</h2>
        </>
    )
}

export default NotFoundPage