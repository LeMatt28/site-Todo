/* ---------------------- SWITCH THÈME ---------------------- */
const themeSwitch = document.getElementById('themeSwitch');

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');

    // sauvegarde le thème
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// appliquer le thème sauvegardé
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
        themeSwitch.checked = true;
    } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
        themeSwitch.checked = false;
    }
});

/* ---------------------- MENU MOBILE ---------------------- */
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

/* ---------------------- BOUTON AIDE ---------------------- */
const helpBtn = document.getElementById('helpBtn');
helpBtn.addEventListener('click', () => {
    alert('Besoin d’aide ? Contactez support@noteflow.com');
});

/* ---------------------- FORMULAIRE CONNEXION ---------------------- */
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!email || !password) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        alert(`Connexion réussie pour ${email} (simulation).`);
    });
}

/* ---------------------- FORMULAIRE INSCRIPTION ---------------------- */
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas.');
            return;
        }

        alert(`Compte créé pour ${firstName} ${lastName} (${email}) (simulation).`);
    });
}

/* ---------------------- FORMULAIRE RESET ---------------------- */
const resetForm = document.getElementById('resetForm');
if (resetForm) {
    resetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('resetEmail').value.trim();
        if (!email) {
            alert('Veuillez entrer votre email.');
            return;
        }
        alert(`Un email de réinitialisation a été envoyé à ${email} (simulation).`);
    });
}

/* ---------------------- BOUTONS HEADER ---------------------- */
const signupBtn = document.getElementById('signupBtn');
if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        window.location.href = 'register.html';
    });
}
