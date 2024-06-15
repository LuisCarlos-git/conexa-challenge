import { tv } from 'tailwind-variants';

export const rootCss = tv({
  base: 'w-60 h-60 rounded-full select-none overflow-hidden block',
});

export const imageCss = tv({
  base: 'h-full w-full rounded-[inherit] object-cover',
});
