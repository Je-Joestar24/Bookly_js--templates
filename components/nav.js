import { state } from "../../util/state.js"

export default class {
    async getHtml(){
        return `
        <nav class="nav__container" role="navigation" aria-label="Main navigation">
            <a href="#/" class="nav__logo" aria-label="Bookly Home"> Bookly </a>
            <ul class="nav__links">
                ${state.user.isLoggedIn ? await this.logged() : await this.notLogged()}
            </ul>
        </nav>
        `
    }

    async logged(){
        return `
            <div class="nav-content">
                <div class="nav-links">
                    <a href="#/books" class="nav-button" aria-label="Browse Books">
                        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                        </svg>
                        Books
                    </a>
                    <a href="#/favorites" class="nav-button" aria-label="View Favorites">
                        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                        Favorites
                    </a>
                </div>
                
                <div class="profile-container">
                    <button class="profile-trigger" aria-expanded="false" aria-haspopup="true">
                        <svg class="profile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>
                    </button>
                    <div class="profile-dropdown">
                        <div class="profile-info">
                            <p class="profile-name">${(state.user.email + "").split("@")[0]}</p>
                            <p class="profile-email">${state.user.email}</p>
                        </div>
                        <button class="logout-button" aria-label="Log out" data-logout>
                            <svg class="logout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                                <polyline points="16 17 21 12 16 7"/>
                                <line x1="21" y1="12" x2="9" y2="12"/>
                            </svg>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    async notLogged(){
        return `
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
        `;
    }
}