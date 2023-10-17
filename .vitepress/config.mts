import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en",
  title: "BD4VQK",
  description: "An Amateur Radio Operator",
  srcDir: "./src",
  base: "/bd4vqk",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Basic Info", link: "/basic-info/qso-confirmation" },
      { text: "Appendices", link: "/appendices/crac-license-classes" },
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
        ],
      },
      {
        text: "Appendices",
        items: [
          {
            text: "CRAC License Classes",
            link: "/appendices/crac-license-classes",
          },
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
