/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["public/*.html"],
    theme: {
        extend: {
            lineClamp: {
                7: "7",
                8: "8",
                9: "9",
                10: "10",
            },
        },
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
                    primary: "#111",
                    secondary: "#377CFB",
                    accent: "#EA5234",
                    neutral: "#333C4D",
                    "base-100": "#FFFFFF",
                    "base-200": "#F0F2F1",
                    "base-300": "#F0F2F1",
                    info: "#3ABFF8",
                    success: "#111",
                    warning: "#FBBD23",
                    error: "#F87272",
                },
            },
        ],
    },
};
