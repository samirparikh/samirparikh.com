// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';
const SITE_AUTHOR = 'Samir Parikh';
export const NAV_LINKS = [
  { url: "/about/",   title: "About" },
  { url: "/archive/", title: "Archive" },
  { url: "/contact/", title: "Contact" },
  { url: "/tags/",    title: "Tags" },
  { url: "/rss.xml",    title: "Feed" },
];

/*
export const SOCIAL_LINKS = [
    { platform: "twitter", username: "astrodotbuild" },
    { platform: "github", username: "withastro" },
    { platform: "youtube", username: "astrodotbuild" },
];
*/

export const COPYRIGHT = `© ${new Date().getFullYear()} ${SITE_AUTHOR}`;
export const LICENSE = {
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  title: "CC BY-NC-SA 4.0"
} as const;