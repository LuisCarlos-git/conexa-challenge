import { tv } from 'tailwind-variants';

export const rootCss = tv({
  base: 'w-48 h-48 rounded-full select-none overflow-hidden block',
});

export const imageCss = tv({
  base: 'h-full w-full rounded-[inherit] object-cover',
});
