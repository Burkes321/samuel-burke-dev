import css from './intro.module.css';

export const Intro = () => {
  return (
    <div className={css.container}>
      <div className={css.contentContainer}>
        <h2 className={css.title}>Hi, I&apos;m Sam</h2>
        <p className={css.subtext}>
          I&apos;m an experienced <strong>full-stack web developer</strong>{' '}
          currently working at <strong>Emplifi</strong> in Czechia, and I also
          enjoy <strong>freelancing</strong> on the side.
        </p>
      </div>
    </div>
  );
};
