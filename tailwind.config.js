export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // main colors
                floBlue: "#4DA9FF",
                floWhite: "#FAFAFA",
                floBlack: "#0A0A0A",
                floAsh: "#9C9C9E",

                // minor colors
                failureRed: "#EA4335",

                // socials
                waGreen: "#25D366",
                tgBlue: "#2AABEE",
                //ghBlack: "#abcdef"
            },
            spacing: {
                1: "8px",
                2: "12px",
                3: "16px",
                4: "24px",
                5: "32px",
                6: "48px",

                smol: "25%",
                med: "40%",
                lrg: "60%",
                xlrg: "80%",
            },
            margin: {
                1: "8px",
                2: "12px",
                3: "16px",
                4: "24px",
                5: "32px",
                6: "48px",
                7: "64px",

                smol: "25%",
                med: "40%",
                lrg: "60%",
                xlrg: "80%",
            },
            padding: {
                1: "8px",
                2: "12px",
                3: "16px",
                4: "24px",
                5: "32px",
                6: "48px",

                smol: "25%",
                med: "40%",
                lrg: "60%",
                xlrg: "80%",
            },
            width: {
                1: "8px",
                2: "12px",
                3: "16px",
                4: "24px",
                5: "32px",
                6: "48px",

                smol: "25%",
                med: "40%",
                lrg: "60%",
                xlrg: "80%",
            },
            height: {
                1: "8px",
                2: "12px",
                3: "16px",
                4: "24px",
                5: "32px",
                6: "48px",
                7: "64px",

                smol: "25%",
                med: "40%",
                lrg: "60%",
                xlrg: "80%",
            },
            fontSize: {
                "base": "16px",

                "sm": "12px",
                "md": "18px",
                "lg": "24px",
                "xl": "32px",
                "2xl": "48px",
                "error": "120px"
            },
            fontFamily: {
                "yellix": ["Yellix", "sans-serif"],
                "yellix-bold": ["Yellix-Black", "sans-serif"],
            },
            // ...
        },
    },
    plugins: [],
}