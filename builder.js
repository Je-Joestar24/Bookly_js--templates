/**
 * The Builder class is responsible for constructing the main application layout.
 * It creates the initial HTML structure, including the navigation, main content area, and footer.
 */
export default class {
    /**
     * Constructor for the Builder class.
     * Calls the build method to construct the application layout.
     */
    constructor() {
        this.build();
    }

    /**
     * Builds the application layout by setting the HTML content of the app element.
     */
    build() {
        document.getElementById("app").innerHTML = this.getHtml();
    }

    /**
     * Generates the HTML content for the application layout.
     * @returns {string} The HTML content for the application layout.
     */
    getHtml() {
        return `
        ${this.getNav()}
        ${this.getDisplay()}
        ${this.getFooter()}
        ${this.getMessage()}
        ${this.getLoginModal()}
        ${this.getSignupModal()}
        `;
    }

    getNav() {
        return `
        <nav
            id="app__nav"
            class="app__nav"
            role="navigation"
            aria-label="Main navigation"
        >
        </nav>
        `;
    }

    getDisplay() {
        return `
        <div id="app__display">
            <!-- All views will be loaded here -->
        </div>
        `;
    }

    getFooter() {
        return `
        <footer id="app__footer" class="app__footer" role="contentinfo">

        </footer>
        `;
    }

    getMessage() {
        return `
        <div id="app__message" class="app__message info" role="alert" aria-live="polite">
        
        </div>
        `;
    }

    getLoginModal() {
        return `
        <div id="login-modal" class="app__login-modal" role="dialog" aria-labelledby="login-title" data-auth-login>
        
        </div>
        `
    }

    getSignupModal() {
        return `
        <div id="signup-modal" class="app__signup-modal" role="dialog" aria-labelledby="signup-title" data-auth-signup>
            
        </div>
        `;
    }
}