import { AnimatePresence } from 'framer-motion';
import React from 'react';

import CloseIcon from 'svg/close-icon-bottom-sheet.svg';

import * as S from './styled';

interface BottomSheetProps<T> {
  title: string;
  items: T[];
  selectedItem: T;
  setItem: (value: T) => void;
  onClose: () => void;
  gridCol?: number;
}

export default function BottomSheet<T>({
  title,
  items,
  selectedItem,
  setItem,
  onClose,
  gridCol,
}: BottomSheetProps<T>) {
  const ItemClickHandler = (item: T) => {
    setItem(item);
    onClose();
  };

  return (
    <AnimatePresence>
      <S.Backdrop
        key="bottom-sheet-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <S.Sheet
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 50, stiffness: 500 }}
      >
        <S.Header>
          <S.Title>{title}</S.Title>
        </S.Header>
        <S.Content $col={gridCol}>
          {items.map((item, index) => (
            <S.Item
              key={index}
              onClick={() => ItemClickHandler(item)}
              $isSelected={selectedItem === item}
            >
              <span>{String(item)}</span>
            </S.Item>
          ))}
        </S.Content>
        <S.Tools>
          <S.CloseButton onClick={onClose} aria-label="Close">
            <CloseIcon />
          </S.CloseButton>
        </S.Tools>
      </S.Sheet>
    </AnimatePresence>
  );
}
