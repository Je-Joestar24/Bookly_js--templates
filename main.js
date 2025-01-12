import Builder from "./builder.js"; // Import Builder class for building the application structure
import AbstractTemplate from "./AbstractTemplate.js"; // Import AbstractTemplate class for template inheritance

import Nav from "./components/nav.js";
import Footer from "./components/footer.js";

import LoginModal from "./modal/loginModal.js";
import SignupModal from "./modal/signupModal.js";
import { actions } from "../util/state.js";

export default class extends AbstractTemplate {
    constructor() {
        super();
        new Builder();
        this.nav = new Nav();
        this.footer = new Footer();
        this.init();
        this.smodal = new SignupModal();
    }

    async init() {
        document.getElementById('app__nav').innerHTML = await this.nav.getHtml();
        document.getElementById('app__footer').innerHTML = await this.footer.getHtml();
        new LoginModal();
        await this.smodal.init();
        await this.bindLogout();

    }

    async bindLogout() {
        document.body.addEventListener('click', async (e) => {
            if (e.target.matches(`[data-logout]`)) {
                e.preventDefault();
                actions.logout();
            }
        });
    }
}