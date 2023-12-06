import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en",
  title: "BD4VQK",
  description: "An Amateur Radio Operator",
  srcDir: "./src",
  base: "/bd4vqk",
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/bd4vqk/favicon.ico" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Basic Info", link: "/basic-info/qso-confirmation" },
      { text: "References", link: "/references/crac-license-classes" },
    ],

    sidebar: [
      {
        text: "Basic Info",
        items: [
          { text: "QSO Confirmation", link: "/basic-info/qso-confirmation" },
          { text: "Amateur Radio License", link: "/basic-info/amateur-radio-license" },
          {
            text: "Stations and Antennas",
            link: "/basic-info/stations-and-antennas",
          },
          {
            text: "Awards",
            link: "/basic-info/awards",
          }
        ],
      },
      {
        text: "References",
        items: [
          {
            text: "License Classes",
            link: "/references/crac-license-classes",
          },
          {
            text: "Callsign Format",
            link: "/references/china-callsigns"
          },
          {
            text: "Provinces And Abbreviations",
            link: "/references/provinces"
          },
          {
            text: "Callsign Prefixes",
            link: "/references/callsign-prefixes"
          },
          {
            text: "Phonetic Alphabets",
            link: "/references/phonetic-alphabets"
          },
          {
            text: "Morse Code Abbreviations",
            link: "/references/cw-abbreviations"
          }
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/LYZhelloworld/QslNetWebsite",
      },
    ],

    search: {
      provider: "local",
    },
  },
});
