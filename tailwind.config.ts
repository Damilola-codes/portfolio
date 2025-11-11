import {Config} from 'tailwindcss';
export default {
    theme: {
        extend: {
          fontFamily:{
            sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif']
          },
            animation: {
                scroll: 'scroll 10s linear inifinte'
            },
            keyframes: {
              scroll: {
                '0%': {transform: 'translateX(0)'},
                '100%': {transform: 'translateX(-50)'},
              },
            },
        },
      },
} satisfies Config;