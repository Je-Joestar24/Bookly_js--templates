import Social from "./footer/social.js";
import Link from "./footer/link.js";

/**
 * Class representing the footer of the application.
 */
export default class Footer {
    /**
     * Create a footer.
     */
    constructor(){
        this.social = new Social();
        this.link = new Link();
    }

    /**
     * Get the HTML content of the footer.
     * @returns {string} The HTML content of the footer.
     */
    async getHtml(){
        return `
        <div class="footer__container">
          <div class="footer__content">
            <a href="#/" class="footer__logo" aria-label="Bookly Home">
              Bookly
            </a>
            <p class="footer__description">
              Your digital library for discovering, reading, and organizing your
              favorite books. Join our community of book lovers today.
            </p>
            ${await this.social.getHtml()}
          </div>
          ${await this.link.getHtml()}
        </div>

        <div class="footer__bottom">
          <p>&copy; 2024 Bookly. All rights reserved.</p>
        </div>
        `;
    }
}