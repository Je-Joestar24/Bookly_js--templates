/**
 * Generates the HTML content for the signup modal.
 * This class is responsible for dynamically generating the HTML structure
 * of the signup modal, including its header, form, and footer.
 */
export default class{
    /**
     * Asynchronously generates the HTML content for the signup modal.
     * This method returns a promise that resolves to the HTML string.
     * @returns {Promise<string>} A promise that resolves to the HTML string.
     */
    async getHtml(){
        return `
            <div class="signup-modal__contents">
                <button class="signup-modal__close" aria-label="Close signup modal" data-auth-signup>×</button>
                <h2 id="signup-title" class="signup-modal__title">Create Account</h2>
                <form class="signup-modal__form" role="form" aria-label="Signup form" data-signup-form>
                    <div class="form-group">
                        <label for="signup-email">Email</label>
                        <input 
                            type="email" 
                            id="signup-email" 
                            class="signup-input" 
                            required 
                            aria-required="true"
                            placeholder="Enter your email"
                        >
                    </div>
                    <div class="form-group">
                        <label for="signup-password">Password</label>
                        <input 
                            type="password" 
                            id="signup-password" 
                            class="signup-input" 
                            required 
                            aria-required="true"
                            placeholder="Enter your password"
                        >
                    </div>
                    <div class="form-group">
                        <label for="signup-confirm-password">Confirm Password</label>
                        <input 
                            type="password" 
                            id="signup-confirm-password" 
                            class="signup-input" 
                            required 
                            aria-required="true"
                            placeholder="Confirm your password"
                        >
                    </div>
                    <button type="submit" class="signup-submit" aria-label="Create account">
                        Sign Up
                    </button>
                    <p class="signup-modal__login-text">
                        Already have an account? 
                        <span class="login-link" aria-label="Go to login" data-auth-login  data-auth-signup>Login here</span>
                    </p>
                </form>
            </div>
        `;
    }
}