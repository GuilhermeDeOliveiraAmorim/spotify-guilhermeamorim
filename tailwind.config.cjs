/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx", "./index.html"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        colors: {
            "space-grey": "#030303",
            "gradient-color": "#121212",
            "white-color": "#ffffff",
            "spotify-green": "#66D36E",
        },
        extend: {},
    },
    plugins: [],
};
