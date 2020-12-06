import React from "react";
import body from "../../assets/images/body_01.png";
import taxi_img from "../../assets/images/asset_taxi.png";
import bicicleta from "../../assets/images/asset_bike.png";
import vespa from "../../assets/images/asset_vespa.png";
import elipse from "../../assets/images/elipse_01.png";
import moto_img from "../../assets/images/asset_moto.png";
import phone from "../../assets/images/domy_mockup_02.png";
import deliverma from "../../assets/images/deliverma_01.png";
import appstore from "../../assets/images/icon_appstore.png";
import playstore from "../../assets/images/icon_playstore.png";
import deliverma_moto from "../../assets/images/deliverma_02.png";
import location_img from "../../assets/images/location.png";
import photo_man from "../../assets/images/photo_man.png";
import elipse_white from '../../assets/images/elipse_02.png';
import phone_app  from '../../assets/images/domy_mockup_04.png';
import deliverma_03 from '../../assets/images/deliverma_03.png';
import camion from '../../assets/images/asset_camion_02.png';
import footer from '../../assets/images/foooter.png';

import '../../assets/css/ventajas.css';
import Item from '../landing/item';

const Body = () => {
    return (
        <React.Fragment>
            <div className='ilustraciones'>
                <img src={body} alt="body" className='background-ilustraciones'/>
                <img src={taxi_img} alt="taxi-domy" className='taxi-domy'/>
                <img src={bicicleta} alt="bicicleta-domy" className='bicicleta-domy'/>
                <img src={vespa} alt="vespa-domy" className='vespa-domy'/>
                <img src={elipse} alt="elipse-domy" className='elipse-domy'/>
                <img src={moto_img} alt="moto-domy" className='moto'/>
            </div>
            <div className="ventajas">
                <div className="box">
                    <div className="ventajas-grid">
                        <div className="title">
                            <h3>Una gran variedad de ventajas para ti!</h3>
                            <p>Descarga Do-my y encontrarás beneficios únicos para tí!</p>
                        </div>
                        <div className="phone col-1">
                            <img src={phone} alt="phone"/>
                        </div>
                        <div className="item-col">
                            <Item titulo={'Servicios atendidos por vehículos particulares.'} descripcion={'Cualquier servicio podrá ser atendido por un vehículo o mensajero disponible en el momento.'}/>
                        </div>
                        <div className="col-2">

                            <Item titulo={'Oferta del valor en el servicio solicitado.'} descripcion={'Tendrás la opción de ofrecer un precio por el servicio que solicites.'}/>
                            <Item titulo={'Una tarifa mínima, imbatible a nivel nacional.'} descripcion={'Cualquier servicio solicitado podrá ser atendido por uno de nuestros vehículos o mensajeros desde $2000 pesos.'}/>
                            <div className="package">
                                <img src={deliverma} alt=""/>
                            </div>
                        </div>
                        <div className="col-3">
                            <Item titulo={'Todos nuestros conductores están verificados.'} descripcion={'Tu seguridad y la garantía de tus entregas estará segura gracias a la verificación de las personas que trabajan en Do-My.'}/>
                            <Item titulo={'Decide quién realiza el servicio solicitado.'} descripcion={'Elige el conductor de su preferencia para atender tus solicitudes.'}/>
                            <Item titulo={'Información sobre el servicio, siempre a la mano.'} descripcion={'Información siempre disponible. Podrás ver datos como la calificación del mensajero, el tiempo de entrega o el tipo de vehículo, todo esto para hacer más fácil la elección.'}/>
                        </div>
                        <img src={elipse_white} alt="elipse" className='elipse_white'/>
                    </div>
                    <div className="descarga-domy">
                        <img src={deliverma_moto} alt="moto-domy" className='deliverma_moto'/>
                        <div className="informacion">
                            <p>Do-my está disponible para descargar ya, en tu store favorita!</p>
                            <div className="stores">
                                <a href="https://www.apple.com/co/ios/app-store/"><img src={appstore} alt="icon-appstore"/></a>
                                <a href="https://play.google.com/store?hl=es_419"><img src={playstore} alt="play-store" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className='cite_with_avatar'>
                        <div className="avatar">
                            <img src={location_img} alt="location-marker" className='location'/>
                            <img src={photo_man} alt="photo man" className='man'/>
                        </div>
                        <cite>"Nuestra más grande entrega es la felicidad de nuestros clientes"</cite>
                    </div>
                </div>
            </div>
            <div className="worker">
                <div className="box">
                    <div className="worker-container">
                        <div className="domy-app flex justify-center">
                            <img src={phone_app} alt="app de Do-my :)" className='w-3/6 lg:w-full'/>
                        </div>
                        <div className='worker-col-1'>
                            <div className="title">
                                <h3>Deseas trabajar con Do-my?</h3>
                                <p>Aprovecha tu tiempo libre y empieza a trabajar con tus propias condiciones.</p>
                            </div>
                            <Item titulo={'La menor tarifa de comisión del mercado.'} color={'#002a8b'} descripcion={'la menor tarifa del mercado para la atención de servicios no más del 9%.'}/>
                            <Item titulo={'Trabaja con facilidad y confianza.'} color={'#002a8b'} descripcion={'Desde 3000 pesos puede empezar a tranajar a través de nuestra plataforma.'}/>
                            <Item titulo={'Libertad de escoger los servicios disponibles.'} color={'#002a8b'} descripcion={'Nada mejor que tener la libertad de escoger el servicio que se quiere atender.'}/>
                        </div>
                        <div className='worker-col-2'>
                            <Item titulo={'Pagos directos y sin intermediarios.'} color={'#002a8b'} descripcion={'los usuarios que solicitan el servicio pagan directamente al recibir su pedido.'}/>
                            <Item titulo={'Comienza a ganar dinero de una.'} color={'#002a8b'} descripcion={'Registro en línea fácil y sencillo que al completar tu perfil como trabjador estarás habilitado para trabajar.'}/>
                            <Item titulo={'Todo el negocio está en tus manos.'} color={'#002a8b'} descripcion={'Posibilidad de realizar contraofertas a las solicitudes de los clientes.'}/>
                        </div>
                    </div>
                    <div className="w-11/12 md:w-5/6 m-auto md:flex">
                        <div className='flex flex-col mb-2'>
                            <img src={deliverma_03} alt="" className='hidden md:block w-1/6 md:w-2/5 ml-8 -mt-40'/>
                            <div className='flex justify-between items-end' style={ {color:'#002A8B', 'fontFamily': '\'Poppins\', sans-serif','borderBottom':'2px solid #002A8B'} }>
                                <div className='md:w-2/4 mt-2'>
                                    <div className='font-bold text-xl md:text-xl lg:text-2xl py-4'>Quiero saber más acerca de Do-my</div>
                                    <div className='font-semibold text-xl md:text-xl lg:text-2xl'>Escribenos <span>&#8594;</span></div>
                                </div>
                                <img src={camion} alt="" className='w-2/6'/>
                            </div>
                        </div>
                        <div className="informacion" style={{'fontFamily':"Poppins, san-serif"}}>
                            <p style={{color:'#002A8B','textAlign':'left'}} className='text-xl lg:text-2xl'>Empieza a ganar dinero con Do-my, descarga disponible en tu store favorita!</p>
                            <div className="stores">
                                <a href="https://www.apple.com/co/ios/app-store/"><img src={appstore} alt="icon-appstore"/></a>
                                <a href="https://play.google.com/store?hl=es_419"><img src={playstore} alt="play-store" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='frase-container'>
                    <div className='box frase'>"En Do-my, nos movemos hacia una nueva forma de hacer las cosas"</div>
            </div>
            <div className='footer'>
                <img src={footer} alt="footer" className='hidden md:block'/>
                <div className='md:flex justify-around items-center footer-descripcion'>
                    <div className='footer-text'>Todos los derechos reservados Do-my 2020</div>
                    <div className='footer-text'>Hecho con <span className='text-red-600'> &#10084;</span> en valledupar - Cesar</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Body;