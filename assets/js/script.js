document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('shareButton');
    const shareContainer = document.getElementById('shareContainer');

    shareButton.addEventListener('click', () => {
        shareContainer.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!shareContainer.contains(event.target) && event.target !== shareButton) {
            shareContainer.classList.add('hidden');
        }
    });
});