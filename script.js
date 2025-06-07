document.addEventListener('DOMContentLoaded', function() {
    const typingEffectElement = document.querySelector('.typing-effect');
    const phrases = ["Rain.", "a writer that finding true peacefulness."]; /* Reverted to original phrases */
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 60; // Faster typing speed for smoother effect
    const deletingSpeed = 50; // Faster deleting speed for smoother effect
    const pauseBeforeDelete = 2000; // Pause before starting to delete
    const pauseBeforeType = 1000; // Pause before starting to type next phrase

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            // Deleting text
            typingEffectElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing text
            typingEffectElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Finished typing, now pause and then start deleting
            currentSpeed = pauseBeforeDelete;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting, now switch to next phrase and start typing
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            currentSpeed = pauseBeforeType;
        }

        setTimeout(typeWriter, currentSpeed);
    }

    typeWriter();
});
