import React from "react";

const Footer = () => {
  return (
    <>
      <br />
      <br />
      <div className="footer-basic">
        <footer className="footer-container">
          <div className="social">
            <a href="https://www.facebook.com/Garage-Sale-Store-107232798496555">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/garaje_sale_store/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/juancamilo11/garage-sale-store-front">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <p className="copyright">
            Hecho por: <br /> Juan Camilo Cardona Calderón
          </p>
          <p className="copyright">Curso: Análisis y Diseño de Sistemas II</p>
          <p className="copyright">Copyright &copy; Garage Sale Store</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
