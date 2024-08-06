import { sendGA4Events } from "./ga4.js";
const { sendItemImpression, sendItemClick } = sendGA4Events({ campaign: "bundle-ai-studio-oralb-gulumseme-rehberi" });

document.addEventListener('DOMContentLoaded', () => {
    sendItemImpression("homepage");
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

document.getElementById("footerCTA").onclick = function () {
    sendItemClick("discover-oral-b")
    var newUrl = "https://www.hepsiburada.com/ara?q=oral-b&filtreler=MainCategory.Id:26012118;satici:Hepsiburada&markalar=oralb2&utm_source=coop&utm_medium=pg&utm_campaign=oralb-oral-b-paste-launch-bundle-lansman&wt_cp=pg.oralb-oral-b-paste-launch-bundle-lansman-ai";
    window.open(newUrl, '_blank');
};

document.getElementById("askBundleAI").onclick = function () {
    sendItemClick("ask-bundle")
    var newUrl = "https://bundleaistudio.bundle.app/chat/4u4gcdkswi5lz6rwwsj/oral-b";
    window.open(newUrl, '_blank');
};

