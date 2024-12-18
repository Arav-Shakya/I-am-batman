import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@radix-ui/react-slot",
    "./node_modules/@radix-ui/react-dialog",
    "./node_modules/@radix-ui/react-popover",
    "./node_modules/@radix-ui/react-dropdown-menu",
    "./node_modules/@radix-ui/react-tooltip",
    "./node_modules/@radix-ui/react-checkbox",
    "./node_modules/@radix-ui/react-radio-group",
    "./node_modules/@radix-ui/react-switch",
    "./node_modules/@radix-ui/react-slider",
    "./node_modules/@radix-ui/react-tabs",
    "./node_modules/@radix-ui/react-accordion",
    "./node_modules/@radix-ui/react-progress",
    "./node_modules/@radix-ui/react-separator",
    "./node_modules/@radix-ui/react-label",
    "./node_modules/@radix-ui/react-scroll-area",
    "./node_modules/@radix-ui/react-toast",
    "./node_modules/@radix-ui/react-avatar",
    "./node_modules/@radix-ui/react-alert-dialog",
    "./node_modules/@radix-ui/react-context-menu",
    "./node_modules/@radix-ui/react-menubar",
    "./node_modules/@radix-ui/react-select",
    "./node_modules/@radix-ui/react-navigation-menu",
    "./node_modules/@radix-ui/react-hover-card",
    "./node_modules/@radix-ui/react-collapsible",
    "./node_modules/@radix-ui/react-aspect-ratio",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			'dark-background': 'hsl(var(--dark-background))',
  			'dark-foreground': 'hsl(var(--dark-foreground))',
  			'dark-card': {
  				DEFAULT: 'hsl(var(--dark-card))',
  				foreground: 'hsl(var(--dark-card-foreground))'
  			},
  			'dark-popover': {
  				DEFAULT: 'hsl(var(--dark-popover))',
  				foreground: 'hsl(var(--dark-popover-foreground))'
  			},
  			'dark-muted': {
  				DEFAULT: 'hsl(var(--dark-muted))',
  				foreground: 'hsl(var(--dark-muted-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
