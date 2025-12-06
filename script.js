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

    // Normales Link‑Verhalten (Navigation) bleibt erhalten
}

// Kein Akzentwechsel mehr – Button-Event entfernen
document.addEventListener('DOMContentLoaded', () => {
    // Keine Event-Listener für den Akzentwechsel mehr
});
