class DunkelmodusToggles {
    constructor() {
        this.toggleButton = document.getElementById('toggle-button');
        this.isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
        this.init();
    }

    init() {
        this.applyMode();
        if (this.toggleButton) {
            this.toggleButton.addEventListener('click', () => this.toggleMode());
        }
    }

    toggleMode() {
        this.isDarkModeEnabled = !this.isDarkModeEnabled;
        localStorage.setItem('darkMode', this.isDarkModeEnabled);
        this.applyMode();
    }

    applyMode() {
        if (this.isDarkModeEnabled) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
}

const dunkelmodusToggles = new DunkelmodusToggles();