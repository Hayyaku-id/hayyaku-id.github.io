document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.glass-card');

    // Staggered animation delay
    cards.forEach((card, index) => {
        // Add the animation class
        card.style.animationDelay = `${index * 100}ms`;
        card.classList.add('animate-in');
    });

    // Optional: Add a subtle tilt effect or tracking glow if desired,
    // but keeping it simple/performant for now as per "calm" requirement.
    console.log('Premium Link Hub Loaded');
});
