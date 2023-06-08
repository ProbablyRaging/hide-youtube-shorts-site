// npx tailwindcss -i ./src/stylesheets/styles.css -o ./dist/output.css --watch

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            colors: {
                blueAccent: '#3694ff',
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            boxShadow: {
            },
            dropShadow: {
            }
        },
        screens: {
            xsup: "480px",
            ssup: "620px",
            smup: "768px",
            mdup: "1060px",
            lgup: "1200px",
            xxlup: "1700px",
            xs: { 'max': '480px' },
            ss: { 'max': '640px' },
            sm: { 'max': '768px' },
            md: { 'max': '1024px' },
            lg: { 'max': '1280px' },
            xl: { 'max': '1536px' },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
    important: true,
};