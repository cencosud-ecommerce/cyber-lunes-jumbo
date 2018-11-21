import React, { Component } from "react";
import titleImage from "../../arquivos/cyberlunestitle.png";
import imageCyberMan from "../../arquivos/cyber-img-hombre-landing.png"

export default class CyberView extends Component {
  countDown(){
    const getRemainTime = deadline => {
      let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
        remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
        remainDays = ("0" + Math.floor(remainTime / (3600 * 24))).slice(-2);

      return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
      };
    };

    const countDown = deadline => {
      const dias = document.getElementById("days");
      const horas = document.getElementById("hours");
      const minutos = document.getElementById("minutes");
      const Segundos = document.getElementById("seconds");

      const timerUpdate = setInterval(() => {
        let t = getRemainTime(deadline);

        dias.innerHTML = `${t.remainDays}`;
        horas.innerHTML = `${t.remainHours}`;
        minutos.innerHTML = `${t.remainMinutes}`;
        Segundos.innerHTML = `${t.remainSeconds}`;

        if (t.remainTime <= 1) {
          clearInterval(timerUpdate);
        }
      }, 1000);
    };

    countDown("Nov 19 2018 00:00:00 GMT-0500");
  }
  render() {
    return (
      <section className="cyber-monday__container">
        <div className="cyber-monday__container__title">
          <div className="cyber-title">
            <h1>
              CYBER<span>LUNES</span> 2018
            </h1>
            <h3>
              ESTRENAR <br />
              <span>LE CAMBIA LA CARA AL</span>
              <br />
              <span>LUNES</span>
            </h3>
          </div>
        </div>
        <div className="cyber-monday__container__video">
          <div className="overlay-cyber-image">
            <img src={imageCyberMan} alt="CyberLunes en tiendasjumbo.co" />
          </div>
        </div>
        <div className="cyber-monday__container__clock">
          <div className="cyber-monday__container__clock__main-desc">
            <h2>Las ofertas de CyberLunes han finalizado.</h2>
          </div>
          <div className="cyber-monday__container__clock__content-text">
            <p>
              El 19 y 20 de noviembre tiendasjumbo.co fue la sede del{" "}
              <strong>Cyberlunes</strong>, un espacio para comprar a los mejores
              precios.
            </p>
            <h3 style={{ marginTop: "20px"}}>
              Consulta otras ofertas
            </h3>
            <a href="/ofertas" className="btnn" style={{display: "flex", marginBottom: "10px"}}><span className="text">Aquí</span></a>
          </div>
          <div className="cyber-monday__container__clock__counter">
            <img style={{marginTop: "30px"}} src={titleImage} alt="Cyber Lunes Jumbo" />
          </div>
        </div>
      </section>
    );
  }
}



