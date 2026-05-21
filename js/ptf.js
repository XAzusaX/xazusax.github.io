(function () {
    const el = document.getElementById("ptfQuote");
    if (!el) return;

    const quotes = [
    "A quiet space built from code and imagination.",
    "Designing small worlds through pixels and logic.",
    "Every project begins as a fragile idea.",
    "A personal archive of experiments and thoughts.",
    "Some creations exist only to be explored.",
    "Built slowly, refined endlessly.",
    "Code is another form of storytelling.",
    "Fragments of design, preserved in silence.",
    "A collection of projects shaped by curiosity.",
    "Where interfaces become atmosphere.",
    "Every detail carries intention.",
    "A digital space for unfinished ideas.",
    "Minimal structures, layered with meaning.",
    "This portfolio is constantly evolving.",
    "Thoughts translated into systems and visuals.",
    "Created somewhere between logic and emotion.",
    "Not just projects — preserved moments of creation.",
    "A quiet reflection of things I wanted to build.",
    "Interfaces designed to feel alive.",
    "Some ideas deserve their own little universe."
    ];

    function pick() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function typeWriter(text) {
        el.textContent = "";
        let i = 0;

        function step() {
        if (i < text.length) {
            el.textContent += text[i++];
            setTimeout(step, 45);
        }
        }

        step();
    }

    // 🔥 改成「立即執行」避免 DOMContentLoaded miss
    typeWriter(pick());
})();