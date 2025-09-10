/* ------------------ countdown timer ------------------ */
(function () {
    const el = document.getElementById("countdown-nav");
    const fest = new Date("September 22, 2025 09:00:00").getTime();

    function update() {
        const now = Date.now();
        let diff = fest - now;
        if (diff <= 0) { el.textContent = "🎉 Fest Started!"; return; }
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        el.textContent = `Starts in: ${d}d ${h}h ${m}m ${s}s`;
    }
    update();
    setInterval(update, 1000);
})();
