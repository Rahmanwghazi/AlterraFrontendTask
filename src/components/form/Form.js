import './Form.css'
import { useState } from "react";
import { useNavigate } from "react-router";


const starStyle = {
    color: '#ff0000',
};

const Form = () => {
    const initValue = {
        name: "",
        email: "",
        phone: "",
        nationality: "",
        message: "",
    };
    const initErrMsg = {
        name: "",
        email: "",
        phone: "",
    };

    const [data, setData] = useState(initValue);
    const [errMsg, setErrMsg] = useState(initErrMsg);

    const nameRegex = /^[A-Za-z ]*$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[+][0-9]{12,14}$/;

    const validateFormat = (name, value) => {
        if (name === "name" && !nameRegex.test(value)) {
            setErrMsg({
                ...errMsg,
                name: "full name must contain alphabets only!",
            });
        } else if (nameRegex.test(value)) {
            setErrMsg({
                 ...errMsg,
                name: "" 
            });
        }

        if (name === "email" && !emailRegex.test(value)) {
            setErrMsg({
                ...errMsg,
                email: "email address is invalid format!",
            });
        } else if (emailRegex.test(value)) {
            setErrMsg({
                ...errMsg,
                email: "",
            });
        }

        if (name === "phone" && !phoneRegex.test(value)) {
            setErrMsg({
                ...errMsg,
                phone: "phone number is invalid format!",
            });
        } else if (phoneRegex.test(value)) {
            setErrMsg({
                ...errMsg,
                phone: "",
            });
        }
    };

    const validateNotEmpty = () => {
        setErrMsg(() => {
            const errMsgs = Object.keys(errMsg).map((key) => {
                if (data[key] === "") {
                    const err = `${key} cannot be empty`;
                    return { [key]: err };
                }
                return { [key]: "" };
            });
            const newErrMsg = errMsgs.reduce(
                (prevErr, newErr) => {
                    return { ...prevErr, ...newErr};
                }
            );
            return newErrMsg;
        });
    };

    const onChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        validateFormat(name, value);
        setData({
            ...data,
            [name]: value,
        });
    };

    const navigate = useNavigate();
    const onSubmit = e => {
        e.preventDefault();
        console.log(errMsg)
         if ((data.name !== "" && errMsg.name === "") && (data.phone !== "" && data.email !== "")){
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
            navigate("/review-message");
        }
        else{
            validateNotEmpty();
        }
    };

    return (
        <div className="col-md-6 mx-auto px-5">
            <form onSubmit={onSubmit}>
            <h1 className="label">
                Contact Us
            </h1>
                <div className="form-group">
                    <label>Full name <span style={starStyle}>*</span> </label>
                    <input type="text" id="name" className="form-control" placeholder="Your full name here..." name="name" value={data.name} onChange={onChange} />
                    <span className={"errMsg"}>{errMsg.name}</span>
                </div>
                <div className="form-group">
                    <label>Email address <span style={starStyle}>*</span> </label>
                    <input type="email" id="email" className="form-control" placeholder="name@example.com" name="email" value={data.email} onChange={onChange} />
                    <span className={"errMsg"}>{errMsg.email}</span>
                </div>
                <div className="form-group">
                    <label>Phone number <span style={starStyle}>*</span> </label>
                    <input type="text" id="phone" className="form-control" placeholder="+6285xxxxxxxx" name="phone" value={data.phone} onChange={onChange} />
                    <span className={"errMsg"}>{errMsg.phone}</span>
                </div>
                <div className="form-group">
                    <label>Nationality</label>
                    <select id="nationality" className="form-control" name="nationality" value={data.nationality} onChange={onChange}>
                        <option value="" defaultValue >Select</option>
                        <option value="Indonesian">Indonesian</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea maxLength="500" className="form-control mt-1" id="message" rows="3" name="message" value={data.message} onChange={onChange}></textarea>
                </div>
                <button type="submit" className="btn btn-p"> Submit </button>
            </form>
        </div>
    );
}

export default Form