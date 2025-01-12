import { actions } from "../../../util/state.js";

/**
 * FormHandler Class
 * Manages authentication form submissions and validation
 */
export default class {
    /**
     * Binds authentication form submit events
     * @param {HTMLElement} modal - The modal container element
     */
    bindAuths(modal) {
        document.body.addEventListener('submit', async (e) => {
            if (e.target.matches(`[data-login-form]`)) {
                e.preventDefault();
                this.loginNow(modal);
            }
        });
    }

    /**
     * Handles login form submission
     * @async
     * @param {HTMLElement} modal - The modal container element
     */
    async loginNow(modal) {
        const email = modal.querySelector("#login-email").value.trim();
        const password = modal.querySelector("#login-password").value;
        await this.login(email, password, modal);
    }

    /**
     * Performs login operation and handles response
     * @async
     * @param {string} email - User email
     * @param {string} password - User password
     * @param {HTMLElement} modal - The modal container element
     */
    async login(email, password, modal) {
        const res = await actions.login({ email, password });
        if (res.success) {
            window.location.href = window.location.origin + "#/books";
            await actions.displayMessage("LOGGING IN...", 500);
            setTimeout(() => location.reload(), 500);
        } else {
            actions.displayMessage("LOGIN FAILED, NO MATCH FOUND!", 750);
        }
    }
}
