/* ---------- Social Account Links ----------
   All footer links intentionally use # placeholders.
   Replace the values below with your personal/official account URLs later.
*/
const SOCIAL_LINKS = {
    whatsapp: "#",
    linkedin: "#",
    instagram: "#",
    youtube: "#",
    facebook: "#",
    twitter: "#",
    messenger: "#",
    threads: "#"
};

export function initSocialLinks() {
    document.querySelectorAll("[data-social-link]").forEach(link => {
        const key = link.dataset.socialLink;
        if (SOCIAL_LINKS[key]) link.href = SOCIAL_LINKS[key];
    });
}
