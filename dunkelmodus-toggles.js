class DunkelmodusToggles {
    constructor() {
        this.toggleButton = document.getElementById('toggle-button');
        this.isDarkMode = localStorage.getItem('darkMode') === 'true';
        this.init();
    }

    init() {
        this.applyMode();
        this.toggleButton.addEventListener('click', () => this.toggleMode());
    }

    toggleMode() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('darkMode', this.isDarkMode);
        this.applyMode();
    }

    applyMode() {
        if (this.isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
}

const dunkelmodusToggles = new DunkelmodusToggles();