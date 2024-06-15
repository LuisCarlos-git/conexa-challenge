import * as RdxAvatar from '@radix-ui/react-avatar';
import * as styles from './styles';
import { getInitials } from '@/utils';

type AvatarProps = {
  image?: string;
  username: string;
};

export function Avatar({ image, username }: AvatarProps) {
  return (
    <RdxAvatar.Root className={styles.rootCss()}>
      <RdxAvatar.Image
        className={styles.imageCss()}
        src={image}
        alt={username}
      />
      <RdxAvatar.Fallback
        className="bg-slate-200 leading-1 flex h-full w-full items-center justify-center text-gray-600 text-[40px] font-medium"
        delayMs={600}
      >
        {getInitials(username)}
      </RdxAvatar.Fallback>
    </RdxAvatar.Root>
  );
}
