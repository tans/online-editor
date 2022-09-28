/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.html"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                corporate: {
                    "neutral-content": "#edf2f7",
                    "base-content": "#181a2a",
                    "--rounded-box": "0.5rem",
                    "--rounded-btn": ".125rem",
                    "--rounded-badge": ".125rem",
                    "--animation-btn": "0",
                    "--animation-input": "0",
                    "--btn-focus-scale": "1",
                    primary: "#22c55e",
                    secondary: "#377CFB",
                    accent: "#EA5234",
                    neutral: "#333C4D",
                    "base-100": "#FFFFFF",
                    info: "#3ABFF8",
                    success: "#22c55e",
                    warning: "#FBBD23",
                    error: "#F87272",
                },
            },
        ],
    },
};
