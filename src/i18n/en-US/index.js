// This is just an example,
// so you can safely delete all default props below

export default {
  common: {
    download: "Download",
  },
  menu: {
    github: "GitHub",
    documentation: "Documentation",
    server: "Server Setup",
    download: "@:common.download Client",
  },
  client_hero: {
    title: "Lanbuddy Client",
    description:
      "Store-like game installer and chat client for your LAN party!",
    download: "@:common.download",
    latest_version: "Latest Version",
    github_label: "Visit Project",
    github_caption: "on GitHub",
  },
  features: {
    title: "Features",
    store_catchphrase: "Simplicity is key!",
    store_description:
      "Provides an easy to use store-like user interface. Games can be installed and removed by the click of a button.",
    speed_catchphrase: "Its fast!",
    speed_description:
      "When a participant downloads and installs a game he will start sharing his downloaded version with everyone else on the LAN party. That brings the download speeds up to the limit of your network!",
    chat_catchphrase: "Off-grid communication!",
    chat_description:
      "The built-in chat solution helps you communicate on your LAN party without the need for an internet connection.",
  },
};
