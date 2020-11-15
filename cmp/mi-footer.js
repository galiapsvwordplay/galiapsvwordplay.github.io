class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; 2020 Galia Silva Villa.`;
  }
}
customElements.define("mi-footer", MiFooter);
