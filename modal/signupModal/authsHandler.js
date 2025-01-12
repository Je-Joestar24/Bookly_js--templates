import { actions } from "../../../util/state.js";

import LoginAuths from "../loginModal/authsHandler.js";
/**
 * FormHandler Class
 * Manages authentication form submissions and validation
 */
export default class {
    /**
     * Binds authentication form submit events
     * @param {HTMLElement} modal - The modal container element
     */

    constructor(){
        this.logger = new LoginAuths();
    }
    bindAuths(modal) {
        document.body.addEventListener('submit', async (e) => {
            if (e.target.matches(`[data-signup-form]`)) {
                e.preventDefault();
                this.signupNow(modal);
            }
        });
    }

    /**
     * Handles signup form submission
     * Validates input and creates new user account
     * @async
     * @param {HTMLElement} modal - The modal container element
     */
    async signupNow(modal) {
        const email = modal.querySelector("#signup-email").value.trim();
        const password = modal.querySelector("#signup-password").value;
        const cpass = modal.querySelector("#signup-confirm-password").value;

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            actions.displayMessage("INVALID EMAIL ADDRESS", 750);
            return;
        }

        // Password confirmation
        if (password !== cpass) {
            actions.displayMessage("PASSWORD DOESN'T MATCH", 750);
            return;
        }

        // Create account and login
        const signup = await actions.signup({ email, password });
        if(signup){
             actions.displayMessage('ACCOUNT CREATED SUCCESSFULLY', 750);
             setTimeout(() => this.logger.login(email, password), 500)
        }
        else actions.displayMessage('Account Already Exists!! Please Try Again'.toUpperCase(), 750)
    }
}
