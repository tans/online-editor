/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.html"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
    daisyui: {
        themes: [
            {
                corporate: {
                    "neutral-content": "#edf2f7",
                    "base-content": "#181a2a",
                    "--rounded-box": "0",
                    "--rounded-btn": "0",
                    "--rounded-badge": "0",
                    "--animation-btn": "0",
                    "--animation-input": "0",
                    "--btn-focus-scale": "1",
                    primary: "#3988FF",
                    secondary: "#377CFB",
                    accent: "#EA5234",
                    neutral: "#333C4D",
                    "base-100": "#FFFFFF",
                    "base-200": "#F0F2F1",
                    "base-300": "#F0F2F1",
                    info: "#3ABFF8",
                    success: "#3988FF",
                    warning: "#FBBD23",
                    error: "#F87272",
                },
            },
        ],
    },
};
