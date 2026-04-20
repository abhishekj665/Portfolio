export default function manifest() {
  return {
    name: "Abhishek Jevene - Frontend Developer",
    short_name: "Abhishek",
    description:
      "Portfolio website showcasing projects, skills, and profile information.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
