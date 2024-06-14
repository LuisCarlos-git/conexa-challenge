import * as RdxDialog from '@radix-ui/react-dialog';

import * as styles from './styles';
import React from 'react';
import { CloseIcon } from './components/CloseIcon';

type DialogProps = {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

export function Dialog({ title, children, onClose, open }: DialogProps) {
  return (
    <RdxDialog.Root open={open} onOpenChange={onClose}>
      <RdxDialog.Portal>
        <RdxDialog.Overlay className={styles.overlayCss()} />
        <RdxDialog.Content className={styles.contentCss()}>
          <div className={styles.headerCss()}>
            <RdxDialog.Title className={styles.titleCss()}>
              {title}
            </RdxDialog.Title>
            <RdxDialog.Close aria-label="close dialog">
              <CloseIcon />
            </RdxDialog.Close>
          </div>
          <div className="mt-4">{children}</div>
        </RdxDialog.Content>
      </RdxDialog.Portal>
    </RdxDialog.Root>
  );
}
