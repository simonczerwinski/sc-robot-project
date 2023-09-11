/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/theme/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	// Safelist all tailwind colors
	safelist: [
		// Background Colors
		'bg-transparent',
		'bg-current',
		'bg-black',
		'bg-white',
		'bg-gray-100',
		'bg-gray-200',
		'bg-gray-300',
		'bg-gray-400',
		'bg-gray-500',
		'bg-gray-600',
		'bg-gray-700',
		'bg-gray-800',
		'bg-gray-900',
		'bg-red-100',
		'bg-red-200',
		'bg-red-300',
		'bg-red-400',
		'bg-red-500',
		'bg-red-600',
		'bg-red-700',
		'bg-red-800',
		'bg-red-900',
		'bg-green-100',
		'bg-green-200',
		'bg-green-300',
		'bg-green-400',
		'bg-green-500',
		'bg-green-600',
		'bg-green-700',
		'bg-green-800',
		'bg-green-900',
		'bg-blue-100',
		'bg-blue-200',
		'bg-blue-300',
		'bg-blue-400',
		'bg-blue-500',
		'bg-blue-600',
		'bg-blue-700',
		'bg-blue-800',
		'bg-blue-900',
		'bg-indigo-100',
		'bg-indigo-200',
		'bg-indigo-300',
		'bg-indigo-400',
		'bg-indigo-500',
		'bg-indigo-600',
		'bg-indigo-700',
		'bg-indigo-800',
		'bg-indigo-900',
		'bg-purple-100',
		'bg-purple-200',
		'bg-purple-300',
		'bg-purple-400',
		'bg-purple-500',
		'bg-purple-600',
		'bg-purple-700',
		'bg-purple-800',
		'bg-purple-900',

		// Hover Text Colors
		'hover:text-transparent',
		'hover:text-current',
		'hover:text-black',
		'hover:text-white',
		'hover:text-gray-100',
		'hover:text-gray-200',
		'hover:text-gray-300',

		// Hover Background Colors
		'hover:bg-transparent',
		'hover:bg-current',
		'hover:bg-black',
		'hover:bg-white',
		'hover:bg-gray-100',
		'hover:bg-gray-200',
		'hover:bg-gray-300',
		'hover:bg-gray-400',
		'hover:bg-gray-500',
		'hover:bg-gray-600',
		'hover:bg-gray-700',
		'hover:bg-gray-800',
		'hover:bg-gray-900',
		'hover:bg-red-100',
		'hover:bg-red-200',
		'hover:bg-red-300',
		'hover:bg-red-400',
		'hover:bg-red-500',
		'hover:bg-red-600',
		'hover:bg-red-700',
		'hover:bg-red-800',
		'hover:bg-red-900',
		'hover:bg-green-100',
		'hover:bg-green-200',
		'hover:bg-green-300',
		'hover:bg-green-400',
		'hover:bg-green-500',
		'hover:bg-green-600',
		'hover:bg-green-700',
		'hover:bg-green-800',
		'hover:bg-green-900',
		'hover:bg-blue-100',
		'hover:bg-blue-200',
		'hover:bg-blue-300',
		'hover:bg-blue-400',
		'hover:bg-blue-500',
		'hover:bg-blue-600',
		'hover:bg-blue-700',
		'hover:bg-blue-800',
		'hover:bg-blue-900',
		'hover:bg-indigo-100',
		'hover:bg-indigo-200',
		'hover:bg-indigo-300',
		'hover:bg-indigo-400',
		'hover:bg-indigo-500',
		'hover:bg-indigo-600',
		'hover:bg-indigo-700',
		'hover:bg-indigo-800',
		'hover:bg-indigo-900',
		'hover:bg-purple-100',
		'hover:bg-purple-200',
		'hover:bg-purple-300',
		'hover:bg-purple-400',
		'hover:bg-purple-500',
		'hover:bg-purple-600',
		'hover:bg-purple-700',
		'hover:bg-purple-800',
		'hover:bg-purple-900',
		'hover:bg-teal-100',
		'hover:bg-teal-200',
		'hover:bg-teal-300',
		'hover:bg-teal-400',
		'hover:bg-teal-500',
		'hover:bg-teal-600',
		'hover:bg-teal-700',
		'hover:bg-teal-800',
		'hover:bg-teal-900',

		// Border Colors
		'border-transparent',
		'border-current',
		'border-black',
		'border-white',
		'border-gray-100',
		'border-gray-200',
		'border-gray-300',
		'border-gray-400',
		'border-gray-500',
		'border-gray-600',
		'border-gray-700',
		'border-gray-800',
		'border-gray-900',
		'border-red-100',
		'border-red-200',
		'border-red-300',
		'border-red-400',
		'border-red-500',
		'border-red-600',
		'border-red-700',
		'border-red-800',
		'border-red-900',
		'border-green-100',
		'border-green-200',
		'border-green-300',
		'border-green-400',
		'border-green-500',
		'border-green-600',
		'border-green-700',
		'border-green-800',
		'border-green-900',
		'border-blue-100',
		'border-blue-200',
		'border-blue-300',
		'border-blue-400',
		'border-blue-500',
		'border-blue-600',
		'border-blue-700',
		'border-blue-800',
		'border-blue-900',
		'border-indigo-100',
		'border-indigo-200',
		'border-indigo-300',
		'border-indigo-400',
		'border-indigo-500',
		'border-indigo-600',
		'border-indigo-700',
		'border-indigo-800',
		'border-indigo-900',
		'border-purple-100',
		'border-purple-200',
		'border-purple-300',
		'border-purple-400',
		'border-purple-500',
		'border-purple-600',
		'border-purple-700',
		'border-purple-800',
		'border-purple-900',

		// Text Colors
		'text-transparent',
		'text-current',
		'text-black',
		'text-white',
		'text-gray-100',
		'text-gray-200',
		'text-gray-300',
		'text-gray-400',
		'text-gray-500',
		'text-gray-600',
		'text-gray-700',
		'text-gray-800',
		'text-gray-900',
		'text-red-100',
		'text-red-200',
		'text-red-300',
		'text-red-400',
		'text-red-500',
		'text-red-600',
		'text-red-700',
		'text-red-800',
		'text-red-900',

		// Other
		'w-320',
		'w-640',
		'h-320',
		'h-640',
		'grid-cols-5',
		'grid-rows-5',
	],

	theme: {
		extend: {},
		fontWeight: {
			light: 300,
			normal: 400,
			medium: 500,
			semiBold: 600,
			bold: 700,
			extraBold: 800,
			black: 900,
		},
	},
	plugins: [],
};
