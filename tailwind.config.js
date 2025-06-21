/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#ffe6ef',
          100: '#ffcce0',
          200: '#ff99c1',
          300: '#ff6e96', // Main primary color
          400: '#ff4d7d',
          500: '#ff3366',
          600: '#ff1a4d',
          700: '#e60033',
          800: '#cc0033',
          900: '#b30033',
        },
        secondary: {
          50: '#e6f9ff',
          100: '#ccf2ff',
          200: '#99e6ff',
          300: '#66d9ff',
          400: '#33ccff',
          500: '#00bfff',
          600: '#0099cc',
          700: '#007399',
          800: '#004d66',
          900: '#002633',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        success: {
          50: '#ecfdf5',
          300: '#6ee7b7',
          500: '#10b981',
          700: '#047857',
        },
        warning: {
          50: '#fffbeb',
          300: '#fcd34d',
          500: '#f59e0b',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          300: '#fca5a5',
          500: '#ef4444',
          700: '#b91c1c',
        },
      },
      spacing: {
        '18': '4.5rem',
        '68': '17rem',
        '84': '21rem',
        '92': '23rem',
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        shimmer: 'shimmer 2s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dotted-pattern': 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
};