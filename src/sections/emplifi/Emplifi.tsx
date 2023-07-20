import css from './emplifi.module.css';

export const Emplifi = () => {
  return (
    <div className={css.container}>
      <div className={css.contentContainer}>
        <h2 className={css.title}>Emplifi</h2>
        <p className={css.subtext}>
          I currently work here as a full stack developer, creating and
          maintaining features for a social media analytics tool used by some of
          the world’s largest companies
        </p>
      </div>
    </div>
  );
};
