//generate a js clock web component

class Clock extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
    let e = document.createElement("template");
    e.innerHTML = `
    <style>
    :host {
        display: block;
        padding: 16px;
        background-color: lightblue;
    }
    </style>
    
    <p>This is a simple clock web component!</p>`;
    this.shadowRoot.appendChild(e.content.cloneNode(!0));
  }

  connectedCallback() {
    this.startClock();
  }

  startClock() {
    setInterval(() => {
      this.shadowRoot.querySelector("p").innerText =
        new Date().toLocaleTimeString();
    }, 1000);
  }
}

customElements.define("my-clock", Clock);