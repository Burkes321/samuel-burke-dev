import Link from 'next/link';
import css from './navigationBar.module.css';
import { GithubLogo } from '../images/GithubLogo';
import { LinkedinLogo } from '../images/LinkedinLogo';

export const NavigationBar = () => {
  return (
    <div className={css.navigationContainer}>
      <div className={css.linksContainer}>
        <Link className={css.link} href="/">
          About
        </Link>
        <Link className={css.link} href="/experience">
          Experience
        </Link>
        <Link className={css.link} href="mailto:sam.burke99@gmail.com">
          Get in Touch
        </Link>
      </div>

      <div className={css.socialIconsContainer}>
        <Link href="https://github.com/Burkes321/samuel-burke-dev">
          <GithubLogo className={css.socialIcon} />
        </Link>
        <Link href="https://www.linkedin.com/in/samuelburke332/">
          <LinkedinLogo className={css.socialIcon} />
        </Link>
      </div>
    </div>
  );
};
