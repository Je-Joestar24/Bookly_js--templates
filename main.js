import Builder from "./builder.js"; // Import Builder class for building the application structure
import AbstractTemplate from "./AbstractTemplate.js"; // Import AbstractTemplate class for template inheritance

import Nav from "./components/nav.js";
import Footer from "./components/footer.js";

import LoginModal from "./modal/loginModal.js";

export default class extends AbstractTemplate {
    constructor() {
        super();
        new Builder(); 
        this.nav = new Nav();
        this.footer = new Footer();
        this.init();
    }

    async init() {
        document.getElementById('app__nav').innerHTML = await this.nav.getHtml();
        document.getElementById('app__footer').innerHTML = await this.footer.getHtml();
        new LoginModal();
    }
}