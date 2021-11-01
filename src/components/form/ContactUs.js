import './ContactUs.css'
import logo from '../../assets/logo-ALTA-v2.png'

const starStyle = {
    color: '#ff0000',
};

const imageStyle = {
    opacity: 50,
    width: 350
}

const ContactUs = () => {
    return (
        <div className="row mx-auto">
            <div className="col-md-4 left-image">
                <div className="overlay d-flex">
                    <img src={logo} className="m-auto" alt="logo" style={imageStyle}></img>
                </div>
            </div>
            <div className="col-md-6 mx-auto px-5">
                <form className="needs-validation" noValidate action="review_message.html">
                    <h1 className="label">
                        Contact Us
                    </h1>
                    <div className="form-group">
                        <label>Full name <span style={starStyle}>*</span> </label>
                        <input type="text" id="name" className="form-control" placeholder="Your full name here..." required />
                        <div className="invalid-feedback">
                            Full name cannot be empty
                        </div>

                    </div>
                    <div className="form-group">
                        <label>Email address <span style={starStyle}>*</span></label>
                        <input type="email" id="email" className="form-control" placeholder=" name@example.com" required />
                        <div className="invalid-feedback">Email address cannot be empty</div>
                    </div>
                    <div className="form-group">
                        <label>Phone number <span style={starStyle}>*</span></label>
                        <input type="text" id="phone" className="form-control" placeholder="+6285xxxxxxxx"
                            pattern="[+][0-9]{14}" required />
                        <div className="invalid-feedback">Phone number cannot be empty</div>
                    </div>
                    <div className="form-group">
                        <label>Nationality</label>
                        <select id="nationality" className="form-control">
                            <option value="" defaultValue >Select</option>
                            <option value="Indonesian">Indonesian</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea maxLength="500" className="form-control mt-1" id="message" rows="3"></textarea>
                    </div>
                    <input type="submit" className="btn btn-p" value="submit" onClick={getValue} />
                </form>
            </div>
        </div>
    )
}

(
    function () {
        window.addEventListener('load', function () {
            var forms = document.getElementsByClassName('needs-validation');
            Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })
    ();

function getValue() {
    let name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    let email = document.getElementById("email").value;
    localStorage.setItem("email", email);
    let phone = document.getElementById("phone").value;
    localStorage.setItem("phone", phone);
    let nationality = document.getElementById("nationality").value;
    localStorage.setItem("nationality", nationality);
    let message = document.getElementById("message").value;
    localStorage.setItem("message", message);
    return false;
}

export default ContactUs