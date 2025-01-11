export default class {
    async getHtml(){
        return `
        <nav class="nav__container" role="navigation" aria-label="Main navigation">
            <a href="#/" class="nav__logo" aria-label="Bookly Home"> Bookly </a>
            <ul class="nav__links">
                <li>
                    <a id="home-nav" href="#/" class="nav__link active" aria-current="page">Home</a>
                </li>
                <li>
                    <a id="about-nav" href="#/about" class="nav__link">About</a>
                </li>
                <li class="nav__auth">
                    <button class="btn btn--secondary" aria-label="Log in to your account" data-auth-login>
                        Login
                    </button>
                    <button class="btn btn--primary" aria-label="Create new account" data-auth-signup>
                        Sign Up
                    </button>
                </li>
            </ul>
        </nav>
        `
    }
}