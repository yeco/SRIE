export default class BannerOds extends React.Component {
    render() {
    
    return(
    <div className="BannerOds container-fluid">
        <div className="row align-items-center">
            <div className="col col-sm-6">
                <h3>Esta es una plataforma de monitoreo de cumplimiento del Objetivo de Desarrollo Sostenible 4</h3>
            </div>
            <div className="col col-sm-4">
                <div className="d-flex">
                    <div className="px-0 col-2"><p className="txt-nun">4</p></div>
                    <div className="px-2 col-10 d-flex align-items-center txt-descrip"><p>Educación <br/> de calidad</p></div>
                </div>
            </div>
            <div className="col col-sm-2">
                <img src="/img/home/ico-libro-banner-ODS4.svg" className="img-fluid" alt="ODS4"/>
            </div>
        </div>

        <style jsx>{`
            
            .BannerOds {
                background-image: url(/img/home/bannerODS4.jpg);
                background-size: cover;
                color: white;
                margin: 2em 0;
                padding: 15px;
            }
            h3 {
                font-size: 1.4em;
            }
            .txt-nun{
                font-size: 5em;
            }
            p{
                margin-bottom: 0;
            }
            .txt-descrip p{
                font-size: 1.8em;
                line-height: 32px;
                text-transform: uppercase;
            }
        `}</style>
    </div>
    )}
}



