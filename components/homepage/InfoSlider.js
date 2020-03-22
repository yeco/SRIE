import theme from "../../styles/theme";

const InfoSlider = () => (
  <div className="info-slider container">
    <div className="row align-items-center">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <h3>1-SRIE es una plataforma para la consulta del estado de los principales indicadores educativos en los países de la región de Centroamerica y Caribe, de mira al compromiso de cumplimiento de las metas de la Política Educativa Centroamericana (PEC 2013‐2030) y del Objetivo 4 de la Agenda 2030 de Objetivos de Desarrollo Sostenible.</h3>
      </div>
      <div className="carousel-item">
      <h3>2-SRIE es una plataforma para la consulta del estado de los principales indicadores educativos en los países de la región de Centroamerica y Caribe, de mira al compromiso de cumplimiento de las metas de la Política Educativa Centroamericana (PEC 2013‐2030) y del Objetivo 4 de la Agenda 2030 de Objetivos de Desarrollo Sostenible.</h3>
      </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
  </div>
  </div>
  <style jsx>{`
      
      h3{
        color: white;
        text-align: center;
        font-size: 1.3em;
      }
      
    `}</style>
  </div>
);

export default InfoSlider;
