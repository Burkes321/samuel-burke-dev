import css from './section.module.css';
import classNames from 'classnames';

interface Props {
  title: string;
  subtext: string;
  contentContainerClassName?: string;
}

export const Section = ({
  title,
  subtext,
  contentContainerClassName,
}: Props) => {
  return (
    <div className={css.container}>
      <div
        className={classNames(css.contentContainer, contentContainerClassName)}
      >
        <h2 className={css.title}>{title}</h2>
        <p className={css.subtext}>{subtext}</p>
      </div>
    </div>
  );
};
