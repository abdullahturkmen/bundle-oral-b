document.addEventListener('DOMContentLoaded', () => {
    const title = document.title;

    //share modal toggle
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

    //copy url
    const copyButton = document.getElementById('copyLink');
    copyButton.addEventListener('click', async () => {
        const url = window.location.href;
        await navigator.clipboard.writeText(url)
            .then(() => {
                console.log('URL copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });

    //share whatsapp
    const whatsappButton = document.getElementById('shareWhatsapp');
    whatsappButton.addEventListener('click', () => {
        const url = window.location.href;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(title)} | ${encodeURIComponent(url)}`;
        window.open(whatsappUrl, '_blank');
    });

    //share facebook
    const facebookButton = document.getElementById('shareFacebook');
    facebookButton.addEventListener('click', () => {
        const url = window.location.href;
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`;
        window.open(facebookUrl, '_blank');
    });


    // share x
    const xButton = document.getElementById('shareX');
    xButton.addEventListener('click', () => {
        const url = window.location.href;
        const xUrl = `https://x.com/intent/tweet?url=${encodeURIComponent(title)}-${encodeURIComponent(url)}`;
        window.open(xUrl, '_blank');
    });
});