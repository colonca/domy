import {useEffect} from 'react';
import gsap,{TimelineLite} from 'gsap';
import app_domy from "../../assets/images/domy_mockup_01.png";
import moto_img from "../../assets/images/asset_moto.png";
import camion_img from "../../assets/images/asset_camion_01.png";
import '../../assets/css/ilustraciones.css';

const Ilustraciones = () => {
    useEffect(()=>{
        const t1 = new TimelineLite();

        t1.from('.phone-domy',{
            y:-100,
            opacity: 0,
            duration: 1,
        }).from('.camion-domy',{
            x: '100%',
            opacity: 1,
            duration: 1
        });

    },[]);
    return (
        <div className='main'>
            <div className='box'>
                <div className="app-domy">
                    <img src={app_domy} alt="app-domy" className='phone-domy'/>
                </div>
                <div className="descripcion">
                    <h2>Iniciamos en Valledupar</h2>
                    <p>Empezamos en una gran ciudad por que creemos en ella y en su gente,
                        queremos que participes de esta gran aventura que creamos especialmente
                        para ti!
                    </p>
                    <span>Bienvenido a Do-my</span>
                </div>
                <img src={moto_img} alt="moto-domy" className='moto-domy '/>
                <img src={camion_img} alt="camion-domy" className='camion-domy'/>
            </div>
        </div>
    );
}

export default Ilustraciones;
