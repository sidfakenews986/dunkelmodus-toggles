class DunkelmodusToggles {
    constructor() {
        this.toggleButton = document.getElementById('toggle-button');
        this.darkModeEnabled = localStorage.getItem('darkMode') === 'true';
        this.init();
    }

    init() {
        this.applyMode();
        if (this.toggleButton) {
            this.toggleButton.addEventListener('click', () => this.toggleMode());
        }
    }

    toggleMode() {
        this.darkModeEnabled = !this.darkModeEnabled;
        localStorage.setItem('darkMode', this.darkModeEnabled);
        this.applyMode();
    }

    applyMode() {
        if (this.darkModeEnabled) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
}

const dunkelmodusToggles = new DunkelmodusToggles();