export default class {
    async getHtml(){
        return `
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
        `
    }
}