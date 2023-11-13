import css from './textGroup.module.css';

type Props = {
  title: string;
  subtext: string;
  containerClassName: string;
};

export const TextGroup = ({ title, subtext, containerClassName }: Props) => (
  <div className={containerClassName}>
    <div className={css.title}>{title}</div>
    <div className={css.subtext}>{subtext}</div>
  </div>
);
