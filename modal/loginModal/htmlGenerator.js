/**
 * HtmlGenerator class is responsible for generating the HTML content for the login modal.
 * It constructs the HTML structure for the login modal.
 */
export default class {
    /**
     * Asynchronously generates the HTML structure for the login modal content.
     * It constructs the HTML content for the login modal and returns it as a string.
     * @returns {Promise<string>} A promise that resolves to the HTML string of the login modal content.
     */
    async getHtml() {
        return `
            <div class="login-modal__contents">
                <button class="login-modal__close" aria-label="Close login modal" data-auth-login>×</button>
                <h2 id="login-title" class="login-modal__title">Welcome Back</h2>
                <form class="login-modal__form" role="form" aria-label="Login form">
                    <div class="form-group">
                        <label for="login-email">Email</label>
                        <input 
                            type="email" 
                            id="login-email" 
                            class="login-input" 
                            required 
                            aria-required="true"
                            placeholder="Enter your email"
                        >
                    </div>
                    <div class="form-group">
                        <label for="login-password">Password</label>
                        <input 
                            type="password" 
                            id="login-password" 
                            class="login-input" 
                            required 
                            aria-required="true"
                            placeholder="Enter your password"
                        >
                    </div>
                    <button type="submit" class="login-submit" aria-label="Log in to account">
                        Login
                    </button>
                    <p class="login-modal__signup-text">
                        Don't have an account? 
                        <span class="signup-link" aria-label="Go to signup" data-auth-signup data-auth-login>Sign up here</span>
                    </p>
                </form>
            </div>
        `;
    }
}