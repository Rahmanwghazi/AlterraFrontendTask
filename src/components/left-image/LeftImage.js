import './LeftImage.css'
import logo from '../../assets/logo-ALTA-v2.png'

const imageStyle = {
    opacity: 50,
    width: 350
}

const LeftImage = () => {
    return (
        <div className="col-md-4 left-image">
            <div className="overlay d-flex">
                <img src={logo} className="m-auto" alt="logo" style={imageStyle}></img>
            </div>
        </div>
    )
}

export default LeftImage