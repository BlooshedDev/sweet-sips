import Logo from '../assets/logo.png';
import '../style/intro.css'

function Intro() {
    return (
        <section className="landing">
            <img src={Logo} className="logo" />
            <h1 className="intro-text">Introducing Sweet Sips!</h1>
        </section>
    );
}

export default Intro;