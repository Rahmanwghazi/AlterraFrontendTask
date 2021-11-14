import Form from "../../components/form/Form"
import LeftImage from "../../components/left-image/LeftImage"

const contactUsStyle = {
    background: "white"
}

const ContactUs = () => {
    return(
        <div className="contactUs row mx-auto" style={contactUsStyle}>
            <LeftImage />
            <Form />
        </div>
    )
}

export default ContactUs