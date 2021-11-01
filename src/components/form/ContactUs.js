import './ContactUs.css'
import logo from '../img/logo-ALTA-v2.png'

const starStyle = {
    color: '#ff0000',
    fontSize: 200
};

const imageStyle = {
    opacity: 50,
    width: 350
}

const ContactUs = () =>{
    <div className="row mx-auto">
        <div className="col-md-4 left-image">
            <div className="overlay d-flex">
                <img src={logo} className="m-auto" alt="img"style={imageStyle}></img>
            </div>
        </div>
        <div className="col-md-6 mx-auto px-5">
            <form className="needs-validation" novalidate action="review_message.html">
                <h1 className="label">
                    Contact Us
                </h1>
                <div className="form-group">
                    <label for="validationCustom03">Full name <span style={starStyle}>*</span> </label>
                    <input type="text" id="name" className="form-control" placeholder="Your full name here..." required></input>
                    <div className="invalid-feedback">
                        Full name cannot be empty
                    </div>

                </div>
                <div className="form-group">
                    <label>Email address <span style={starStyle}>*</span></label>
                    <input type="email" id="email" className="form-control" placeholder=" name@example.com" required></input>
                    <div className="invalid-feedback">Email address cannot be empty</div>
                </div>
                <div className="form-group">
                    <label>Phone number <span style={starStyle}>*</span></label>
                    <input type="text" id="phone" className="form-control" placeholder="+6285xxxxxxxx"
                        pattern="[+][0-9]{14}" required> </input>
                    <div className="invalid-feedback">Phone number cannot be empty</div>
                </div>
                <div className="form-group">
                    <label>Nationality</label>
                    <select id="nationality" className="form-control">
                        <option value="" selected disabled>Select</option>
                        <option value="Indonesian">Indonesian</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea maxlength="500" className="form-control mt-1" id="message" rows="3"></textarea>
                </div>
                <input type="submit" className="btn btn-p" value="submit" onclick="getValue();"></input>
            </form>
        </div>
    </div>
}

export default ContactUs