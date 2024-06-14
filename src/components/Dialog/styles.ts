import { tv } from 'tailwind-variants';

export const triggerCss = tv({
  base: 'bg-primary-blue px-3 py-2 text-white font-bold rounded-sm',
});

export const contentCss = tv({
  base: 'bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-sm p-4 w-full max-w-[650px]',
});

export const overlayCss = tv({
  base: 'bg-black/65 backdrop-blur-[1px] inset-0 fixed',
});

export const titleCss = tv({
  base: 'text-slate-600 text-2xl font-bold',
});

export const headerCss = tv({
  base: 'flex items-center justify-between gap-4',
});

export const closeButtonCss = tv({
  base: 'flex items-center justify-between gap-4',
});
