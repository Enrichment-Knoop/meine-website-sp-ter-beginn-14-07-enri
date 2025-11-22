/* ==========================================================
   Teenkreis – script.js (Dark‑Mode, Navigation)
   ========================================================== */

/**
 * Aktiviert das geklickte Icon, ändert die Hintergrundfarbe
 * und lässt den Browser zur im href angegebenen Seite navigieren.
 *
 * @param {HTMLElement} el  Das <a class="navitem">‑Element, das geklickt wurde
 */
function select(el) {
    // Hintergrundfarbe ändern (aus data‑clr)
    document.body.style.setProperty('--activeclr', el.dataset.clr);

    // Aktives Icon setzen
    const current = document.querySelector('.navitem.active');
    if (current) current.classList.remove('active');
    el.classList.add('active');

    // Das normale Link‑Verhalten (Navigation) bleibt erhalten,
    // weil wir hier kein e.preventDefault() aufrufen.
}

/* -----------------------------------------------------------------
   Grün‑Akzent‑Wechsler – bleibt unverändert.
   ----------------------------------------------------------------- */
function toggleAccent() {
    const root = document.documentElement.style;
    const current = getComputedStyle(document.documentElement)
                    .getPropertyValue('--accent')
                    .trim();

    const dark  = '#2e8b57';
    const light = '#4caf50';

    if (current === dark) {
        root.setProperty('--accent', light);
    } else {
        root.setProperty('--accent', dark);
    }
}

/* Button‑Event für den Akzent‑Wechsel */
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('accentToggle');
    if (btn) btn.addEventListener('click', toggleAccent);
});
