import React, { Component } from "react";
import './Styles/cyber.scss'
import Loadable from "react-loadable";
import WOW from "wowjs";

function Loading(props) {
  if (props.error) {
    return (
      <div>
        <div>
          Lo sentimos hubo un error!
          <br />
          <button onClick={props.retry}>Reintentar</button>
        </div>
      </div>
    );
  } else if (props.timedOut) {
    return (
      <div>
        <div>
          Esta sección está tomando demasiado tiempo para cargar...
          <br />
          <button onClick={props.retry}>Reintentar</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div />
      </div>
    );
  }
}

const CyberView = Loadable({
  loader: () => import("./Views/CyberView.js"),
  loading: Loading,
  timeout: 20000
});

export default class CyberMonday extends Component {
  componentDidMount() {
    let loader = document.getElementsByClassName("container_loader")[0];
    if (loader) {
      loader.style.display = "none";
    }
  }
  render() {
    return (
        <CyberView />
    );
  }
}
