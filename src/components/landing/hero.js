import logo from "../../assets/images/domy_logo_wh.svg";
import '../../assets/css/hero.css';
import women from '../../assets/images/header_woman.jpg';

const Hero = () => {
    return (
        <div className='hero'>
            <img src={women} alt="women" className='women'/>
            <div className="box">
                <div className='hero-logo'>
                    <img src={logo} alt="do-my"/>
                </div>
                <div className="hero-content">
                    <h1 className='hero-content-texto'>La felicidad está en dar y recibir</h1>
                </div>
            </div>
            <div className='hero-footer' ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}><path d="M-0.56,-3.45 C132.05,223.52 334.08,-56.73 500.56,76.47 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#3ACFE3'}}/></svg></div>
        </div>
    );
}

export default Hero;