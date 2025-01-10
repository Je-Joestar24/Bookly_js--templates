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
        <nav
            id="app__nav"
            class="app__nav"
            role="navigation"
            aria-label="Main navigation"
        >
            <div class="nav__container">
            <a href="#/" class="nav__logo" aria-label="Bookly Home"> Bookly </a>
            <ul class="nav__links">
                <li>
                <a id="home-nav" href="#/" class="nav__link active" aria-current="page">Home</a>
                </li>
                <li>
                <a id="about-nav" href="#/about" class="nav__link">About</a>
                </li>
            </ul>
            </div>
        </nav>
        <div id="app__display">
            <!-- All views will be loaded here -->
        </div>
        <footer id="app__footer" class="app__footer" role="contentinfo">
            <div class="footer__container">
            <div class="footer__content">
                <a href="#/" class="footer__logo" aria-label="Bookly Home">
                Bookly
                </a>
                <p class="footer__description">
                Your digital library for discovering, reading, and organizing your
                favorite books. Join our community of book lovers today.
                </p>
                <div class="footer__social">
                <a
                    href="https://www.facebook.com/jejomar.parrilla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="footer__social-link"
                    aria-label="Visit our Facebook page"
                >
                    <svg
                    class="footer__social-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    >
                    <path
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                    />
                    </svg>
                    Facebook
                </a>
                <a
                    href="https://github.com/Je-Joestar24"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="footer__social-link"
                    aria-label="Visit our GitHub page"
                >
                    <svg
                    class="footer__social-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    >
                    <path
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z"
                    />
                    </svg>
                    GitHub
                </a>
                </div>
            </div>

            <div class="footer__links">
                <h3 class="footer__links-title">Quick Links</h3>
                <a href="#/home" class="footer__link">Home</a>
                <a href="#/about" class="footer__link">About</a>
            </div>
            </div>

            <div class="footer__bottom">
            <p>&copy; 2024 Bookly. All rights reserved.</p>
            </div>
        </footer>
        <div id="app__message" class="app__message info" role="alert" aria-live="polite">
            HOME
        </div>
        `;
    }
}