// tailwind.config.js
module.exports = {
    mode: "jit",
    purge: {
        enabled: !process.env.ROLLUP_WATCH,
        content: ["./public/index.html", "./src/**/*.svelte"],
        options: {
            safelist: [/data-theme$/, /badge-.bg-light-50*/],
            defaultExtractor: (content) => [
                ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
                ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
            ],
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", "Lato", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("daisyui"), require("@tailwindcss/typography")],

    daisyui: {
        themes: [
            {
                desolate: {
                    primary: "#5c7cfa",
                    "primary-focus": "#4263eb",
                    "primary-content": "#ffffff",
                    secondary: "#00f05c",
                    "secondary-focus": "#16bd00",
                    "secondary-content": "#ffffff",
                    accent: "#45e876",
                    "accent-focus": "#1e9943",
                    "accent-content": "#ffffff",
                    neutral: "#3d4451",
                    "neutral-focus": "#2a2e37",
                    "neutral-content": "#ffffff",
                    "base-100": "#ffffff",
                    "base-200": "#f9fafb",
                    "base-300": "#d1d5db",
                    "base-content": "#1f2937",
                    info: "#2094f3",
                    success: "#51cf66",
                    warning: "#ff922b",
                    error: "#fa5252",
                },
            },
            "forest",
            "dracula",
            "lofi",
            "halloween",
            "corporate",
            "wireframe",
            "emerald",
            "bumblebee",
            "valentine",
            "cupcake", // and some pre-defined theme
        ],
    },
};
