import * as React from 'react';
import { ButtonHTMLAttributes, FC, SVGProps } from 'react';

import SelectIcon from 'svg/result-select-arrow-icon.svg';

import * as S from './styled';

interface SelectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
  handler?: () => void;
}

export default function Select({ icon, label, handler }: SelectProps) {
  const Icon = icon;

  return (
    <S.Select onClick={handler}>
      <div>
        <Icon />
        <p>{label}</p>
      </div>
      <SelectIcon />
    </S.Select>
  );
}
