/**
 * Represents a footer link component.
 */
export default class FooterLink {
    /**
     * Generates the HTML content for the footer links.
     * @returns {string} The HTML content for the footer links.
     */
    async getHtml() {
        return `
        <div class="footer__links">
            <h3 class="footer__links-title">Quick Links</h3>
            <a href="#/home" class="footer__link">Home</a>
            <a href="#/about" class="footer__link">About</a>
        </div>
        `;
    }
}