class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; 2020 Galia Paola Silva Villa.`;
  }
}
customElements.define("mi-footer", MiFooter);
