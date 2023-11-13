import { ReactNode } from 'react';
import css from './textGroup.module.css';
import classNames from 'classnames';

type Props = {
  title: string;
  subtext: string | ReactNode;
  containerClassName?: string;
};

export const TextGroup = ({ title, subtext, containerClassName }: Props) => (
  <div className={classNames(containerClassName || css.textGroupContainer)}>
    <div className={css.title}>{title}</div>
    <div className={css.subtext}>{subtext}</div>
  </div>
);
