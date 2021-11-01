import './Header.css'
import bg from '../../assets/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'


const Header = () => {
    return (
        <header className="content">
            <div className="row mt-5">
                <div className="col">
                    <div>
                        <img src={bg} width="500" alt="logo" className="rounded-circle ml-5 mr-5 float-right"></img>
                    </div>
                </div>
                <div className="col-7">
                    <div className="intro py-4">
                        <h3>Hi, my name is</h3> <br />
                        <h1 className="name">Anne Sullivan</h1><br />
                        <h2 className="desc">I build things for the web</h2>
                        <a href="/#" className="btn btn-p px-4 mt-5">Get In Touch </a>
                    </div>

                </div>
            </div>
        </header>
    )
}
export default Header