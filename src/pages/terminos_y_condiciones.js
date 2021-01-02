import React from 'react';
import '../assets/css/main.css';
import {Link} from 'react-router-dom'; 

const TerminosYCondiciones = () => {
    return (
        <div className="w-10/12 mx-auto text-justify my-4" style={{'fontFamily':"Poppins, san-serif"}}>
            <h1 className="text-center font-bold text-lg md:text-2xl  pb-4">TERMINOS Y CONDICIONES DE DO-MY</h1>
            <p className="pb-4 ml-6">
                <strong className="text-lg">1. DATOS DEL RESPONSABLE DE TRATAMIENTO DE DATOS PERSONALES</strong>
            </p>
            <p className="pb-2">
                DO-MY LOGISTICS SAS es una sociedad comercial constituida conforme a las leyes colombianas,
                identificada con NIT: 901.394.837-6, con domicilio en la ciudad de Valledupar - Colombia, que
                para los efectos de los presentes términos se denominará EL OPERADOR. Así mismo utilizará
                para referirse a la empresa los términos de DO-MY.
            </p>
            <p className="pb-2">
                <strong className="text-lg">2. Naturaleza jurídica</strong>
            </p>
            <p className="pb-2">
                Los presentes términos y condiciones de uso regulan la relación contractual de carácter comercial 
                que une a los USUARIOS/CONSUMIDORES/PASAJEROS que acceden a la plataforma virtual y al OPERADOR, 
                especialmente en la autorización de uso que otorga éste en favor de aquel.
            </p>
            <p className="pb-2">
                <strong className="text-lg">3. Definiciones</strong>
            </p>
            <ul className="pb-2 list-disc ml-10">
                <li><strong>Mensajes de datos: </strong>La información generada, enviada, recibida, almacenada o comunicada por medios electrónicos, ópticos o similares, como pudieran ser, entre otros, el Intercambio Electrónico de Datos (EDI), Internet, el correo electrónico, el telegrama, el télex o el telefax (Ley 527 de 1999 art. 2 lit. a).</li>
                <li><strong>Comercio Electrónico:</strong> Comprende el envío, transmisión, recepción, almacenamiento de mensajes de datos por vía electrónica. Las dudas que surjan respecto de la eficacia y validez de los mensajes de datos y demás actividades vinculadas al comercio electrónico se interpretarán de conformidad con la ley 527 de 1999.</li>
                <li><strong>Cookies: </strong>Cadenas de texto enviadas virtualmente que son almacenadas por el uso de la Plataforma por el Operador, para la consulta de las actividades y preferencias de los usuarios.</li>
                <li><strong>Consumidores:</strong> Toda persona natural que, como destinatario final, use la Plataforma para solicitar por medio de ésta un mandato remunerado, cuyo encargo consiste en la celebración de un contrato de compraventa o cualquier otro tipo de contrato lícito, con el fin de adquirir bienes o servicios.</li>
                <li><strong>Conductores:</strong> Persona natural que acepta realizar el viaje solicitado por el pasajero a través de la Plataforma. El Conductor actúa por cuenta y riesgo propio y libera de cualquier tipo de responsabilidad que pueda surgir durante la prestación del servicio al pasajero y al operador.</li>
                <li><strong>Mandatario: </strong>Persona natural que acepta realizar la gestión del encargo solicitado por el Consumidor a través de la Plataforma. El Mandatario actúa por cuenta y riesgo propio y libera de cualquier tipo de responsabilidad que pueda surgir durante la prestación del servicio al Consumidor.</li>
                <li><strong>Operador de la Plataforma:</strong> Encargado de administrar operativamente y funcionalmente la Plataforma, representado para los efectos de los presentes términos por DO-MY LOGISTICS SAS, o por la persona natural o jurídica que ésta designe.</li>
                <li><strong>Contrato de mandato remunerado celebrado por medios electrónicos: </strong>Aquel acuerdo de voluntades celebrado entre el Consumidor y el Mandatario, por medio del cual el Consumidor solicita, a través de la Plataforma, la gestión de un encargo al Mandatario, obligándose este último a cumplir con dicho encargo por cuenta y riesgo propio, a cambio de recibir una remuneración como contraprestación.</li>
                <li><strong>Datos personales:</strong> Es toda información que permite identificar o hacer identificable a una persona natural.</li>
                <li><strong>Interacción en la Plataforma:</strong> Facultad de acceso por parte de los Consumidores para conocer los productos y servicios exhibidos por el OPERADOR y terceros y/o aliados, la publicidad puesta a disposición en la Plataforma y manifestar su voluntad de solicitar un encargo.</li>
                <li><strong>Mayor de edad:</strong> Persona natural mayor de dieciocho (18) años.</li>
                <li><strong>Mensajes de texto (SMS):</strong> Todas las comunicaciones y/o notificaciones enviadas por DO-MY por medio de mensaje de texto (SMS) serán enviadas desde el número 3014729616. Adicionalmente, DO-MY podrá comunicarse con el usuario a través de otros canales como Whatsapp y cualquier otro medio de acceso al usuario siempre y cuando éste haya compartido la información con DO-MY mediante su previa autorización a la Política de tratamiento de datos personales. DO-MY únicamente será responsable por las comunicaciones y/o notificaciones enviadas desde este número y/o canales adicionales que establezca para dicho fin. DO-MY no será responsable frente al usuario o terceros, por mensajes y comunicaciones enviadas desde canales que DO-MY no reconozca como propios.</li>
                <li><strong>Pasarela de pagos:</strong> Servicio que permite la realización de pagos por parte de los Consumidores directamente a los Mandatarios/conductores, a través de medios electrónicos utilizando plataformas tecnológicas (software).</li>
                <li><strong>La Plataforma:</strong> Aplicativo web y móvil administrado por el OPERADOR, que permite la concurrencia de Consumidores/Pasajeros y Mandatarios/Conductores para que por medio de contratos de mandato el Consumidor solicite la gestión de un encargo.</li>
                <li><strong>Publicidad:</strong> Es toda forma de comunicación realizada por el OPERADOR, con el fin de brindar información sobre productos, actividades comerciales y comunicar estrategias o campañas publicitarias o de mercadeo, propias o de terceros; realizada como mecanismo de referencia y no como oferta pública.</li>
                <li><strong>Producto:</strong> Bien de consumo exhibido a través de la Plataforma.</li>
                <li><strong>Pasajeros:</strong> Toda persona natural que, como destinatario final, use La Plataforma para solicitar por medio de contrato de arrendamiento de vehículo con conductor, con el fin de adquirir bienes o servicios.</li>
                <li><strong>Servicio:</strong> Servicios exhibidos a través de la Plataforma como DO-MY y cualquier otro que esté disponible a través de la misma.</li>
                <li><strong>Términos y condiciones de uso de la Plataforma:</strong> Constituyen los términos que han de regular el uso que los Consumidores dan a La Plataforma, así como las relaciones contractuales que se pueden generar entre Consumidores y Mandatarios.</li>
            </ul>
            <p className="pb-2">
                <strong className="text-lg">4. Objeto</strong>
            </p>
            <p className="pb-2">
             Los presentes términos y condiciones regulan la autorización de uso que otorga el Operador 
             a los Consumidores, para que éstos ingresen a la plataforma virtual, se informen sobre los 
             productos y servicios exhibidos, para que sean utilizados como referencia y puedan solicitar
             la gestión de un encargo, por medio de un contrato de mandato con el Mandatario, o en el 
             caso de ser pasajero, celebrar Contrato de Arrendamiento de Vehículo con Conductor.
            </p>
            <p className="pb-2">
                El Operador a través de la Plataforma realiza las siguientes acciones: i) exhibe 
                diferentes productos y servicios de consumo de forma publicitaria para que puedan 
                servir de referencia a los Consumidores/Pasajeros, ii) facilita el encuentro entre 
                Consumidores y Mandatario para la realización del vínculo contractual, iii) permite 
                el uso de la plataforma de pagos iv) sirve de medio de envío de comunicaciones entre 
                los Consumidores y los Mandatarios. v) facilita el encuentro entre Pasajeros y 
                Conductores para la realización del vínculo contractual, vi) sirve de medio de 
                envío de comunicaciones entre los Pasajeros y los Conductores.
            </p>
            <p className="pb-2">
             La celebración de la relación contractual entre Consumidores/Pasajeros y Mandatarios/Conductores, 
             se da con Consumidores/Pasajeros que se encuentren en el territorio nacional o que, estando en el 
             extranjero, solicitan la gestión de un encargo, que debe ser realizado en territorio colombiano, 
             pagando una contraprestación económica, mediante el sistema de pago electrónico por la plataforma 
             “DO-MY” o en dinero en efectivo al momento de la recepción de los productos o adquisición de 
             Servicios, a elección del Consumidor/Pasajero.
            </p>
            <p className="pb-2">
                A través de la Plataforma se exhiben productos y servicios, cuya gestión es encargada por los 
                Consumidores/Pasajeros a los Mandatarios/Conductores, siendo que los primeros buscan satisfacer 
                una necesidad privada, personal o familiar.
            </p>
            <p className="pb-2">
                <strong className="text-lg">5. Plataforma tecnológica que permite su uso</strong>
            </p>
            <p className="pb-2">
             Es una plataforma que permite su uso gratuito por varios medios, a saber: 
             i) portal web: <a href="www.do-my.com" className="text-purple-700 font-bold">https://do-my.com/</a> y ii) aplicación que se puede descargar 
             en dispositivos móviles por medio de tiendas virtuales de aplicaciones de 
             Apple (App Store)  y de Google (Google Play), medios que en adelante y 
             para los efectos de los presentes términos se denominarán conjuntamente 
             “La Plataforma”. Los Consumidores podrán utilizar La Plataforma exclusivamente 
             para su uso personal, sin que esto implique el otorgamiento de una licencia de la 
             tecnología de la plataforma de ningún tipo.
            </p>
            <p className="pb-2">
                <strong className="text-lg">6. Modificación</strong>
            </p>
            <p className="pb-2">
                El Operador podrá modificar autónomamente y en cualquier momento en aspectos formales, 
                procedimentales o sustanciales los presentes Términos y Condiciones de uso de La Plataforma, 
                los cuales serán actualizados y puestos a disposición de los Consumidores/Pasajeros en La 
                Plataforma, siendo la última versión publicada la que regulará las relaciones comerciales 
                que se generen al momento de realizarse la transacción. Así mismo, cuenta con plena autonomía 
                para modificar los usos de La Plataforma permitidos a los Consumidores/Pasajeros, con 
                el único deber de informarlo por un medio virtual que permita su publicación y comunicación al 
                público.
            </p>
            <p className="pb-2">
                <strong className="text-lg">7. Detalle del servicio Consumidor/Pasajero</strong>
            </p>
            <p className="pb-2">
                El uso de la Plataforma lo realiza el Consumidor como persona capaz, manifestando 
                que, para la celebración de contratos que en caso de ser Consumidor se celebra 
                contrato de Mandato, y en caso de ser Pasajero se celebra Contrato de Arrendamiento 
                de Vehículo con Conductor; el Consumidor/Pasajero cuenta con plena capacidad legal 
                para ser sujeto de derechos y obligaciones, calidades que refrenda al momento de 
                generar su registro.
            </p>

            <p className="pb-2">
                <strong>El Consumidor/Pasajero tiene la obligación de:</strong> 1) proveer un documento de identidad nacional 
                (Cédula de Ciudadanía/Extranjería/Pasaporte) original, expedido por la Registraduría Nacional 
                del Estado Civil de Colombia o por la autoridad competente en su país de origen;
            </p>
            <p className="pb-2">
                <strong className="text-lg">8. Cuenta de usuario</strong>
            </p>
            <p className="pb-2">
                 Los Consumidores/Pasajeros usan como referencia para la adquisición de bienes y servicios, 
                 los productos y/o Servicios que se encuentran exhibidos en la Plataforma, teniendo como 
                 condición necesaria la creación de una Cuenta de Usuario, donde se solicitarán datos como nombre, 
                 fecha de nacimiento, teléfono, dirección, dirección de correo electrónico y cédula de ciudadanía. 
                 Se encuentra prohibido tener más de una (1) cuenta relacionada a cualquiera de los datos 
                 anteriormente mencionados. Esta información se utiliza para la plena identificación de las 
                 personas que pretenden realizar al Mandatario/Conductor y de esta manera adquirir los productos 
                 y /o Servicios, para el cumplimiento de los presentes términos y condiciones, para la prevención 
                 de fraudes, para vincular al Consumidor/Pasajeros con el Mandatario/Conductor y en general para 
                 los fines definidos en el acápite manejo de información.
            </p>
            <p className="pb-2">
                Los Consumidores/Pasajeros en caso de tener cuentas en las redes sociales Facebook y Google u otros, 
                podrán crear su cuenta de usuario con la utilización de las credenciales allí definidas.
            </p>
            <p className="pb-2">
                Podrán los Consumidores/Pasajeros, además de la información obligatoria y facultativa requerida al 
                momento de la creación de la cuenta, suministrar voluntariamente más datos relacionados con su 
                individualización al momento en que cree su propio Perfil dentro de la Plataforma.
            </p>
            <p className="pb-2">
                El uso de las cuentas es personal e intransferible, por lo cual los Consumidores/Pasajeros no se 
                encuentran facultados para ceder los datos de validación para el acceso a La Plataforma ni el uso 
                de su cuenta a ningún tipo de terceros. El incumplimiento de lo anterior, acarreará la suspensión 
                y bloqueo definitivo de la cuenta (incluye correo electrónico y número de identificación personal). 
                En caso de olvido de los datos de validación o de usurpación de éstos, es obligación del Consumidor 
                informarlo al Operador a través de la opción “olvidó su contraseña” o a través de comunicación 
                enviada al correo electrónico domylogistic@gmail.com .Las cuentas de los usuarios serán administradas 
                por el Operador o por la persona que éste designe, teniendo plena facultad para la conservación o no 
                de la cuenta, cuando la información suministrada por los Consumidores/Pasajeros no sea veraz, completa 
                o segura; o cuando se presente incumplimiento de las obligaciones de los Consumidores/Pasajeros. 
                En ningún momento el Operador solicitará al Consumidor/Pasajero información que NO resulte necesaria 
                para su vinculación para la adquisición de bienes y servicios y para la facilitación del pago. 
                Por lo tanto, los datos de tarjetas débito o crédito, solo se solicitarán al momento de realizar 
                el pago virtual si ese es el método de pago deseado por el Consumidor/Pasajero.
            </p>
            <p className="pb-2">
                Con la creación de la Cuenta de Usuario, los Consumidores/Pasajeros están manifestando su voluntad de 
                aceptación expresa e inequívoca de los presentes Términos y Condiciones de uso de la Plataforma, así 
                como de la Política de tratamiento de datos personales de DO-MY, la cual se encuentra publicada en el 
                siguiente enlace: <Link className="text-purple-700 font-bold" to="/" >https://do-my.com/</Link> 
            </p>
        
            <p className="pb-2">
               <strong>Parágrafo.</strong> Autoriza expresamente el Consumidor/Pasajero al momento de la aceptación de los presentes 
               Términos, el uso de Cookies por parte del Operador en toda actividad de uso que realice de la Plataforma. 
            </p>

            <p className="pb-2">
                <strong className="text-lg">9. Capacidad</strong>
            </p>

            <p className="pb-2">
                    Es claro para el Consumidor/Pasajero que la relación contractual que se puede llegar a generar 
                    por el uso de la Plataforma no vincula de ninguna manera al Operador. Lo anterior, puesto que 
                    la relación contractual será directamente con el Mandatario/Conductor, y consistirá en un 
                    contrato de mandato remunerado celebrado por medio electrónicos, en el que el Consumidor 
                    es el mandante, en el caso de ser servicio de viajes, será un Contrato de Arrendamiento de 
                    Vehículo con Conductor.
            </p>  
            <p className="pb-2">
                En virtud de las condiciones de capacidad legal establecidas en el Código Civil Colombiano 
                y de la validez de la manifestación de voluntad a través de medios electrónicos establecida 
                en la ley 527 de 1999, los Consumidores  al momento de la creación de la Cuenta de Usuario, 
                manifiesta expresamente tener capacidad para celebrar el tipo de transacciones que se pueden 
                realizar usando la Plataforma; y con base en lo prescrito en la ley 1098 de 2006 de la 
                República de Colombia los menores de edad cuentan con capacidad para celebrar éste tipo de 
                transacciones, no obstante el Operador deberá: i) Excluir del sistema de información los 
                datos de menores de edad que hayan utilizado la Plataforma; ii) Dar a conocer a las 
                autoridades de cualquier situación, de la que tenga conocimiento, que ponga en peligro la 
                integridad de un menor de edad; iii) Informar a los menores que se encuentren interesados en 
                adquirir productos a través de la Plataforma usando medios de pago electrónico, que deberán 
                realizar la transacción económica de carácter electrónico a través de sus padres o representantes 
                legales, previo registro en la plataforma por parte de éstos.
            </p>  

            <p className="pb-2">
                <strong className="text-lg">10. Descripción del Servicio</strong>
            </p>
            <p className="pb-2">
                El Operador exhibe a través de La Plataforma productos de consumo como alimentos, bebidas, productos 
                de aseo personal y productos de aseo general, que están a disposición de los Consumidores para su 
                conocimiento general, así mismo exhibe diferentes plataformas para la adquisición de servicios, 
                en el caso de servicio de viajes, así como otros, los cuales están a disposición del 
                Consumidor/Pasajero. 
            </p>
            <p className="pb-2">
                <strong className="text-lg">SERVICIO DE VIAJES POR VEHÍCULO PÚBLICO, O GESTION DE ENCARGO/VIAJES A TRAVÉS DE ARRENDAMIENTO DE VEHÍCULOS PARTICULARES CON CONDUCTOR PARA PASAJEROS:</strong>
            </p>  
            <p className="pb-2">
                El Operador exhibe a través de la Plataforma servicios de transporte a través de vehículo público, 
                o a través de vehículo particular por medio de celebración de arrendamiento de vehículo con 
                conductor, que están a disposición de los Pasajeros para su conocimiento general. 
                Esta comunicación de productos sirve como referencia a los Pasajeros para el servicio de 
                arrendamiento de vehículo con conductor, usando la Plataforma como medio para solicitar la gestión 
                de una, celebrándose un contrato de arrendamiento de vehículo con conductor, remunerado con el 
                Conductor.
            </p>  


            <p className="pb-2">
                <strong className="text-lg">11. Deberes del Consumidor</strong>
            </p>
            <p className="pb-2">
                Con la aceptación de los presentes términos El Consumidor/Pasajero se obliga a: 
                (1) Suministrar información veraz y fidedigna al momento de crear su Cuenta de Usuario; 
                (2) Abstenerse de transferir a terceros los datos de validación (nombre de usuario y contraseña); 
                (3) Abstenerse de utilizar la Plataforma para realizar actos contrarios a la moral, 
                la ley, el orden público y buenas costumbres en contra del Operador, los Mandatarios/Conductores  
                o de terceros; (4) Pagar oportunamente al Mandatario/Conductor la contraprestación económica 
                definida en el contrato; (5) Informar inmediatamente al Operador en caso de olvido o usurpación 
                de los datos de validación; (6) Abstenerse de realizar conductas atentatorias del funcionamiento 
                de La Plataforma; (7) Abstenerse de suplantar la identidad de otros Consumidores ;
                (8) Abstenerse de descifrar, descompilar o desensamblar cualquier elemento de La Plataforma o 
                de cualquiera de sus partes; (9) Habilitar la utilización de ventanas emergentes durante la 
                operación; (10) En general todas aquellas conductas necesarias para la ejecución del negocio 
                jurídico, como i) la recepción de los productos solicitados, ii) exhibir la identificación en 
                caso de venta de productos de uso restringido, iii) verificar al momento de la validación que 
                los productos seleccionados sí corresponden a los necesitados, iv) informarse sobre las instrucciones 
                de uso y consumo de los productos.
            </p> 
            <p className="pb-2">
                <strong className="text-lg">12. Deberes del Operador</strong>
            </p>
            <p className="pb-2">
                En virtud de los presentes términos el Operador, se obliga a (1) Suministrar información cierta, 
                fidedigna, suficiente, clara y actualizada respecto de los productos y/o servicios que exhibe; 
                (2) Indicar las características generales del producto o servicio para que sirvan de referencia 
                a los Consumidores/Pasajeros, para el efecto son marca y presentación; (3) Informar 
                suficientemente sobre los medios habilitados para que los Consumidores/Pasajeros 
                realicen el pago; (4) Informar en el momento indicado y con suficiencia los datos 
                de los Mandatarios/Conductores con los cuales los Consumidores/Pasajeros han de celebrar 
                el contrato indicado; (5) Enviar al correo electrónico suministrado por el Consumidor/Pasajero 
                resumen del encargo/servicio y constancia de la transacción; (6) Poner a disposición de los 
                Consumidores/Pasajeros los términos y condiciones de uso de La Plataforma de forma actualizada; 
                (7) Utilizar la información únicamente para los fines establecidos en los presentes términos; 
                (8) Utilizar mecanismos de información y validación durante la transacción como ventanas emergentes 
                (Pop Ups), que permitan al Consumidor aceptar o no cada paso del proceso de compra.
            </p>
            <p className="pb-2">
                <strong className="text-lg">13. Descripción de los productos y servicios</strong>
            </p>
            <p className="pb-2">
                Los productos y servicios exhibidos por el Operador son productos de consumo doméstico como 
                alimentos, bebidas, productos de aseo personal, productos de aseo general, servicio de viajes, 
                entre otros. Todos los productos y servicios cuentan con una descripción general; 
                esta descripción se realiza por el Operador a partir de prácticas legales de visualización, 
                que en todo caso dependen del dispositivo en donde el Consumidor observe el producto. 
                La disponibilidad será definida en cada caso en concreto al momento en que el Mandatario 
                gestione el encargo del producto con Proveedores oficiales, en caso del servicio de viajes, 
                se mostrarán en tiempo real los conductores activos y el precio del viaje, para formalizar 
                Contrato de Arrendamiento de Vehículo con Conductor. 
            </p>

            <p className="pb-2">
                Dentro de la ejecución del contrato de mandato, el Consumidor determinará qué acción debe 
                realizar el Mandatario en caso de no hallar el producto o productos solicitados, entre: 
                (i) Cumplir con el pedido excluyendo el producto o productos solicitados no hallados, 
                caso en el cual se descontará su valor del valor total del pedido y, en caso de ser sólo 
                un producto y no se halla, deberá elegir entre la cancelación del pedido o el cumplimiento 
                con uno sustituto o similar en precio y tipo; (ii) Comunicarse con el Consumidor para concertar 
                el cumplimiento con un producto sustituto; y (iii) Autorizar al Mandatario para llevar un producto 
                similar en precio y tipo.
            </p>
            <p className="pb-2">
                Es claro para el Consumidor/Pasajero que el Operador no es productor, proveedor, expendedor, 
                agente, distribuidor y en general ningún tipo de comercializador de los productos o servicios 
                que exhibe, ya que opera solo como una plataforma tecnológica que permite el encuentro de 
                Consumidores/Pasajeros y Mandatario/Conductores para la gestión de encargos y viajes.
            </p>
            <p className="pb-2">
                Los productos de uso restringido, como tabaco y bebidas embriagantes, solo podrán ser 
                adquiridas por el Mandatario, en virtud del encargo realizado por Consumidores que 
                cuenten con mayoría de edad, quienes manifiestan expresamente esta calidad al momento 
                de registrarse en la plataforma o de seleccionar el producto. En caso de no cumplir 
                con ésta obligación, el Mandatario no entregará el producto y en el evento de haber 
                pagado por el producto, deberá solicitar la devolución de su dinero. En el evento de 
                haber solicitado junto con los productos de uso restringido otros de diferente 
                calidad e igualmente se incumpla la obligación acá descrita, aplicarán las mismas 
                consecuencias jurídicas aquí definidas, pero solo en relación con los productos de uso restringido.
            </p>
            <p className="pb-2">
             Cuando por errores de carácter tecnológico se exhiban precios erróneos de los productos y 
             servicios en la Plataforma, que evidentemente resultan desproporcionados, 
             comparativamente con el precio del producto o servicio en el mercado, 
             el Operador podrá cancelar la(s) órdenes realizadas de productos con dichos precios, 
             a su libre discreción y con plena autonomía.
            </p>
            <p className="pb-2">
                El Operador se reserva el derecho de actualizar, modificar y/o descontinuar 
                los productos y/o servicios exhibidos en la Plataforma.
            </p>

            <p className="pb-2">
                <strong className="text-lg">14. Garantía</strong>
            </p>
            <p className="pb-2">
                 Entiende y acepta el Consumidor que la relación jurídica de mandato se genera 
                 directamente con los Mandatarios, por lo tanto, las reclamaciones por garantía 
                 se deben realizar directamente a los Mandatarios, quienes tienen la obligación 
                 de responder por la gestión del encargo. En caso de ser Pasajero, este debe comunicarse 
                 con el área de soporte de la aplicación en las siguientes situaciones: 
                 (i) Cobro de tarifa no especificada en la aplicación. 
                 (ii) Conductor no apareció para realizar el viaje 
                 (iii) Quejas y Reclamos por mal servicio del conductor electo. 
                 (iv) Otras situaciones especificadas en la app relativas al cobro del servicio.
            </p>
            <p className="pb-2">
                <strong className="text-lg">15. Consideraciones finales</strong>
            </p>
            <p className="pb-2">
                <strong className="text-lg">Contenidos</strong>
            </p>
            <p className="pb-2">
                A través de la Plataforma el Operador podrá poner a disposición de los Consumidores/Pasajeros 
                información de carácter comercial y publicitario, propio o de terceros de conformidad a las 
                buenas costumbres comerciales. En estos casos el Operador no avala, garantiza o compromete su 
                responsabilidad frente a los servicios y/o productos que se comercialicen por éstos terceros, 
                ya que la Plataforma sirve como canal de comunicación y publicidad, mas no como herramienta de 
                prestación de servicios. En consecuencia, es total responsabilidad de los Consumidores el acceso 
                a los sitios que remite la publicidad, asumiendo la obligación de verificar y conocer los 
                términos de los servicios ofrecidos por los terceros.
            </p>
            <p className="pb-2">
                Toda la información puesta a disposición en la Plataforma como imágenes, publicidad, nombres, 
                marcas, lemas y demás elementos de propiedad intelectual; son utilizados legítimamente por 
                el Operador, sea porque son de su propiedad, porque tiene autorización para ponerlos a 
                disposición, o porque se encuentra facultado para hacerlo en virtud de las decisiones 
                351 de 1993 y 486 de 2000 de la Comunidad Andina de Naciones y la ley 23 de 1982, 
                modificada por las Leyes 1520 de 2012 y 1915 de 2018.
            </p>
        
            <p className="pb-2">
                <strong className="text-lg">Funcionamiento de la plataforma</strong>
            </p>
            <p className="pb-2">
                El Operador administra directamente o por medio de terceras personas la Plataforma, 
                toda la información que se comunica allí corresponde a información cierta y actualizada. 
                En ningún caso responderá por daños directos o indirectos que sufra el Consumidor por 
                la utilización o incapacidad de utilización de la Plataforma.
            </p>
            <p className="pb-2">
                La plataforma se encuentra disponible las 24 horas del día para su acceso y consulta. 
                Para la realización de transacciones la disponibilidad de la Plataforma es de 24 horas 
                al día, dependiendo de la disponibilidad de los Mandatarios/Conductores. 
                El Operador realiza los mejores esfuerzos para mantener en operación la Plataforma, 
                pero en ningún caso garantiza disponibilidad y continuidad permanente de la Plataforma.
            </p>
            <p className="pb-2">
                El Operador se reserva el derecho de cancelar las cuentas de usuarios y/o de prohibir 
                el acceso a la Plataforma a los Consumidores que realicen conductas violatorias de los 
                presentes términos o que incumplan las obligaciones contraídas
            </p>

            <p className="pb-2">
                <strong className="text-lg">Derecho de Retracto</strong>
            </p>
            <p className="pb-2">
                <strong>DO-MY</strong> no comercializa productos directamente a los Consumidores, sino que lo hace a través del 
                portal <strong>DO-MY</strong> y la plataforma multiservicios <strong>DO-MY</strong>. La <strong>APP</strong> actúa como un portal de contacto 
                entre Consumidores y proveedores de bienes y servicios. Todos los productos que ves reflejados 
                y exhibidos en la plataforma son comercializados por nuestros Aliados Comerciales, 
                a menos que se exprese lo contrario.
                Por disposición de la ley de protección al consumidor, las compras realizadas en 
                medios no presenciales, tales como la página <Link className="text-purple-700 font-bold" to="/">https://do-my.com/</Link>  y el aplicativo DO-MY,
                están sujetas al Derecho de retracto. Para todos los productos que adquieras de los Aliados 
                Comerciales a través de <strong>DO-MY</strong>, podrás ejercer tu derecho de retracto frente al proveedor o 
                vendedor del producto o servicio. 
            </p>
            <p className="pb-2">
                El derecho de retracto es la posibilidad que se le brinda al cliente de solicitar la devolución 
                de la totalidad del dinero pagado como también realizar la devolución del producto recibido, 
                dentro de un término de cinco días hábiles siguientes a la entrega del producto.
            </p>

            <p className="pb-2">
                <strong className="text-lg">Condiciones del Derecho de Retracto</strong>
            </p>
            <ol className="py-4 ml-10 list-disc">
                <li>
                    La reclamación debe ser realizada dentro de los 5 (cinco) días hábiles siguientes a 
                    la entrega del producto.
                </li>
                <li>
                    El cliente se debe presentar con la factura original de compra ó el documento que acredite
                    que el producto fue adquirido a través de DO-MY.
                </li>
                <li>
                    El producto debe estar nuevo, sin abrir, sin uso, con todos sus empaques originales, piezas, 
                    accesorios, manuales completos y etiquetas adheridas al mismo.
                </li>
                <li>
                    No se efectúan cambios de alimentos perecederos, prendas de vestir con algún tipo de arreglo, 
                    ropa interior, productos de belleza, cuidado personal, relojes, motos, colchones ni videojuegos.
                </li>
                <li>
                    En el caso de productos que requieran armado, ya sea por parte del cliente o por parte de un 
                    técnico indicado por la marca, el derecho de retracto sólo se podrá hacer efectivo si el 
                    producto no ha sido desembalado y se mantiene en su embalaje original.
                </li>
                <li>
                     Algunos cargos como los referidos a comisiones por uso de Tarjetas de crédito podrán ser 
                     cargados al Consumidor.
                </li>
            </ol>
            <p className="pb-2">
                Consulte más información acerca del derecho de retracto ingresando a la página de la Superintendencia 
                de Industria y Comercio de Colombia.
            </p>

            <p className="pb-2">
                <strong className="text-lg">Reversión del pago</strong>
            </p>
            <p className="pb-2">
                En caso de solicitar la reversión del pago esta se realizará al mismo método de pago utilizado por 
                este para la compra o, en caso de haber aceptado un método diferente, será regresado donde se 
                indique siempre y cuando sea posible. En caso de que el pago se haya realizado con tarjeta de 
                crédito, el reverso del pago podrá verse reflejado hasta treinta (30) días después de haber 
                solicitado la reversión. Esto depende de la entidad bancaria de la que sea cliente el 
                Consumidor/Pasajero. Para los pagos realizados en dinero en efectivo, el pago se realizará a la 
                cuenta de ahorros o corriente o en la Billetera del App indicada por el Consumidor/Pasajero en un 
                plazo de treinta (30) días.
            </p>
            <p className="pb-2">
                El cliente deberá pagar el valor del envío en caso de devolución del producto al proveedor o 
                vendedor de este.
            </p>

            <p className="pb-2">
                <strong className="text-lg">Comercio electrónico</strong>
            </p>
            <p className="pb-2">
                En cumplimiento de las disposiciones colombianas sobre mensajes de datos según la ley 527 de 1999, 
                se comunica que la legislación nacional reconoce validez a los mensajes de datos y por tanto 
                ellos adquieren carácter y entidad probatoria. En consecuencia, entienden los Consumidores/Pasajeros, 
                que mediante el cruce de mensajes de datos los intervinientes pueden dar lugar al nacimiento, 
                modificación y extinción de obligaciones, siendo de su resorte exclusivo el contenido, consecuencias, 
                responsabilidades y efectos de la información generada.
            </p>
            <p className="pb-2">
                La transacción comercial que nace por este medio entre Consumidores y Mandatarios, 
                es la celebración de un contrato de mandato por medios electrónicos, el cual se describe en 
                la ventana emergente que acepta el Consumidor al momento de la celebración del negocio 
                jurídico, en ningún momento se configura relación contractual diferente como suministro, 
                distribución o demás similares. Así mismo, se configura entre Pasajero y Conductor, 
                Contrato de Arrendamiento de Vehículo.
            </p>
            <p className="pb-2">
                <strong className="text-lg">Manejo de información</strong>
            </p>
            <p className="pb-2">
                La información recolectada por el Operador para la solicitud del encargo, 
                es suministrada por los Consumidores/Pasajero  de forma libre y voluntaria, 
                para que esta sea administrada por el Operador o por quien éste designe para 
                el cumplimiento de los deberes adquiridos, lo que implica su recolección; 
                almacenamiento en servidores o repositorios del Operador o de terceros; 
                circulación de los mismos dentro de la organización del Operador; 
                comunicación a los Consumidores/Pasajeros  información comercial, 
                publicitaria y de mercadeo relacionada con su actividad comercial.
            </p>
             <p className="pb-2">
                Así mismo, los datos recolectados serán objeto de análisis para fines de mejorar 
                la estrategia de negocios del portal web, apoyada en 
                herramientas de inteligencia de negocios y minería de datos, 
                que permiten adquirir conocimientos prospectivos para fines de predicción, 
                clasificación y segmentación..
            </p>
            <p className="pb-2">
                El Consumidor/Pasajero podrá ejercer su derecho de conocer, actualizar, modificar y suprimir 
                los datos personales existentes en las bases de datos asociadas a la Plataforma. 
                Para ello deberá realizar la solicitud de consulta, reclamo o supresión a la dirección 
                electrónica <a className="text-purple-700 font-bold" href="malito:contactanos@do-my.com">contactanos@do-my.com</a> detallando las modificaciones a realizar y aportando 
                los documentos que lo soportan.
            </p>
            <p className="pb-2">
                El Operador es responsable del tratamiento de la información personal recolectada a 
                través del portal web, responsabilidad que podrá delegar en un tercero, en calidad 
                de responsable o encargado de la información, asegurando contractualmente adecuado 
                tratamiento de la misma.
            </p>
            <p className="pb-2">
                <strong className="text-lg">Términos & Condiciones (Específicos) Botones/Secciones DO-MY</strong>
            </p>
            <p className="pb-2">
                Para ver los términos y condiciones de cada botón/sección específica de <strong>DO-MY</strong> 
                por favor ingresar a el enlace <Link className="text-purple-700 font-bold" to="/">https://do-my.com/</Link>
            </p>
            <p className="pb-2">
                DO-MY se reserva el derecho de cancelar cualquier orden que se genere a través de su plataforma, 
                con el fin de evitar cualquier tipo de fraude. DO-MY realizará las verificaciones 
                correspondientes y cancelará la orden sin previo aviso al usuario.
            </p>
            <p className="pb-2">
                <strong className="text-lg">Domicilio y Legislación Aplicable</strong>
            </p>
            <p className="pb-2">
                Los presentes Términos y Condiciones de Uso de la Plataforma se acogen en el territorio 
                colombiano, conforme a su normatividad general y sectorial. Su adopción implica el 
                ejercicio de su libre voluntad y que la relación que surge de este documento se regirá 
                en todos sus efectos por su contenido y en su defecto por la ley comercial colombiana.
            </p>
            <p className="pb-2">
                <strong className="text-lg">Aceptación de los términos</strong> 
            </p>
            <p className="pb-2"> 
                El Consumidor/Pasajero manifiesta expresamente tener capacidad legal para usar la Plataforma 
                y para celebrar las transacciones comerciales que se puedan generar con los Mandatarios/Conductores. 
                Así mismo, manifiesta haber suministrado información real, veraz y fidedigna; por ende, 
                de forma expresa e inequívoca declara que ha leído, que entiende y que acepta la totalidad de las 
                situaciones reguladas en el presente escrito de Términos y Condiciones de Uso de la Plataforma, 
                por lo que se compromete al cumplimiento total de los deberes, obligaciones, acciones y omisiones 
                aquí expresadas.
            </p>
            <p className="pb-2">
                 En caso que Consumidores/Pasajeros de otros países utilicen la Plataforma para solicitar productos 
                 y servicios en Colombia se sujetan completamente a lo dispuesto en los presentes términos.
            </p>
        </div>
    );
}

export default TerminosYCondiciones;