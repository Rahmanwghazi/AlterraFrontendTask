import './CardReview.css'
import {  Link } from "react-router-dom";

const CardReview = () => {    
    
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    const phone = localStorage.getItem("phone")
    const nationality = localStorage.getItem("nationality")
    const message = localStorage.getItem("message")

    return(
        <div className="card col-lg-5 col-md-7 col-sm-10 mx-auto border rounded p-5">
        <div>
            <h5 className="col1">Nama</h5>
            <h5 id="name">: {name}</h5>

            <h5 className="col1">Email Address</h5>
            <h5 id="email">: {email} </h5>

            <h5 className="col1">Phone Number</h5>
            <h5 id="phone">: {phone}</h5>

            <h5 className="col1">Nationality</h5>
            <h5 id="nationality">: {nationality}</h5>

            <h5 id="message">{message} </h5>
        </div>
        <div className="desc">
            <hr/>
            <h4>Thanks for contacting us!</h4>
            <h4>We will be in touch with you shortly</h4>
            <Link to="/" className="btn btn-p px-4 mt-2 mb-0">Home </Link>
        </div>

    </div>
    )
}
export default CardReview