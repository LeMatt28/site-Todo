// thème clair / sombre
const toggleThemeBtn = document.getElementById('toggleTheme');
if(toggleThemeBtn){
    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
}

// appliquer le thème sauvegardé
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') document.body.classList.add('dark');
});

// formulaire connexion
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        if (!email || !password) return alert('Veuillez remplir tous les champs.');
        alert(`Connexion réussie pour ${email} (simulation).`);
    });
}

// formulaire inscription
const registerForm = document.getElementById('registerForm');
if(registerForm){
    registerForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value.trim();
        const confirm = document.getElementById('regConfirm').value.trim();
        if (!email || !password || !confirm) return alert('Remplissez tous les champs.');
        if(password !== confirm) return alert('Les mots de passe ne correspondent pas.');
        alert(`Compte créé pour ${email} (simulation).`);
    });
}

// formulaire reset
const resetForm = document.getElementById('resetForm');
if(resetForm){
    resetForm.addEventListener('submit', e=>{
        e.preventDefault();
        const email = document.getElementById('resetEmail').value.trim();
        if(!email) return alert('Veuillez entrer votre email.');
        alert(`Lien de réinitialisation envoyé à ${email} (simulation).`);
    });
}

// formulaire aide
const helpModal = document.getElementById('helpModal');
const helpBtn = document.getElementById('helpBtn');
const closeHelp = document.getElementById('closeHelp');
const helpForm = document.getElementById('helpForm');

if (helpBtn) helpBtn.addEventListener('click', () => helpModal.style.display='flex');
if (closeHelp) closeHelp.addEventListener('click', () => helpModal.style.display='none');
if (helpModal) helpModal.addEventListener('click', e=>{if(e.target===helpModal) helpModal.style.display='none';});
if (helpForm) helpForm.addEventListener('submit', e=>{
    e.preventDefault();
    const email = document.getElementById('helpEmail').value.trim();
    const message = document.getElementById('helpMsg').value.trim();
    if(!email || !message) return alert('Merci de remplir tous les champs.');
    alert(`Merci ${email}, votre message a bien été envoyé (simulation).`);
    helpModal.style.display='none';
    helpForm.reset();
});

// redirection boutons header
const signupBtn = document.getElementById('signupBtn');
if(signupBtn) signupBtn.addEventListener('click', ()=>window.location.href='register.html');
