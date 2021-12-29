import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}', 'public/**/*.{html}', './*.html'],
    exclude: ['node_modules', '.git']
  },
  darkMode: 'class',
  shortcuts: {
    'wh-full': 'w-full h-full',
    'center-layout': 'w-1280px mx-auto px-15px',
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex-center flex-col',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'inline-flex-center': 'inline-flex justify-center items-center',
    'inline-flex-x-center': 'inline-flex justify-center',
    'inline-flex-y-center': 'inline-flex items-center',
    'flex-col-stretch': 'flex flex-col items-stretch',
    'inline-flex-col-stretch': 'flex flex-col items-stretch',
    'flex-1-hidden': 'flex-1 overflow-hidden',
    'absolute-center': 'absolute left-0 top-0 flex-center wh-full',
    'absolute-lt': 'absolute left-0 top-0',
    'absolute-lb': 'absolute left-0 bottom-0',
    'absolute-rt': 'absolute right-0 top-0',
    'absolute-rb': 'absolute right-0 bottom-0',
    'fixed-center': 'fixed left-0 top-0 flex-center wh-full',
    'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
    'ellipsis-text': 'nowrap-hidden overflow-ellipsis'
  },
  theme: {
    extend: {
      colors: {
        primary: '#12c7ce'
      },
      transitionProperty: ['width', 'height', 'background', 'background-color', 'border-color', 'right', 'fill']
    }
  },
  variants: {},
  plugins: []
});
