import { tv } from 'tailwind-variants';

export const buttonCss = tv({
  base: `text-gray-600
  font-bold
  px-4
  py-2
  bg-slate-200
  rounded-sm
  transition-colors
  border-2
  border-transparent
  hover:border-slate-800
  disabled:opacity-75
  disabled:cursor-not-allowed
  disabled:hover:border-transparent
  `,

  variants: {
    isActive: {
      true: 'bg-slate-400 text-white hover:border-slate-800',
    },
  },
});
