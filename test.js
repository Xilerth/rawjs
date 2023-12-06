class testCoponent extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
    let e = document.createElement("template");
    (e.innerHTML = `<style>:host {display: block;padding: 16px;background-color: lightblue;}</style><p>This is a simple web component!</p>`),
      this.shadowRoot.appendChild(e.content.cloneNode(!0));
  }
}
customElements.define("my-component", testCoponent);
