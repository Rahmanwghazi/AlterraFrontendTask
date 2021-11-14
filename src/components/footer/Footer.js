import './Footer.css'
import logo from '../../assets/img-dot@2x.png'

const footerStyle ={
    marginLeft: 470,
    marginTop: 25
}

const Footer = () => {
    return(
        <div className="footer">
        <img alt="img-footer"src={logo} style={footerStyle}></img>
    </div>
    )
}
export default Footer

