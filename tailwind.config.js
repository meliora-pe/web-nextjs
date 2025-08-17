/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateX = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
    });
});
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1142px',
        },
        fontFamily: {
            raleway: ['Raleway', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
            playfair: ['Playfair Display', 'sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#322C6B',
            primary: '#A4B28D',
            secondary: '#B37C9B',
            tertiary: '#322C6B',
            gray: {
                DEFAULT: '#9D9CA8',
                dark: 'hsla(220, 27%, 15%, 0.9)',
                black: 'hsla(230, 15%, 9%, 0.95)',
            },
            red: '#f00',
            violet: {
                100: 'hsla(249, 33%, 77%, 1)',
                80: 'hsla(249, 33%, 77%, 0.8)',
                50: 'hsla(249, 33%, 77%, 0.5)',
            },
        },
        extend: {
            animation: {
                'spin-slow': 'spin 5s linear infinite',
            },
            aspectRatio: {
                '16/5': '16 / 5',
                '1/1': '1 / 1',
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray'),
                        fontSize: '1.125rem',
                        fontFamily: 'raleway',
                        fontWeight: '400',
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/line-clamp'), rotateX, require('@tailwindcss/typography')],
};
