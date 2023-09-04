import css from './page.module.css';

import { Section, GithubLogo, LinkedinLogo } from '~/components';
import Link from 'next/link';
import React from 'react';

const Index = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.linksContainer}>
        <Link className={css.link} href="/">
          About
        </Link>
        <Link className={css.link} href="/experience">
          Experience
        </Link>
        <Link className={css.link} href="/contact">
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

      <Section
        title="Hi, I'm Sam"
        subtext={
          <>
            I’m an experienced <strong>full stack</strong> web developer
            currently working at <strong>Emplifi</strong> in Czechia, and also
            enjoy <strong>freelancing</strong> on the side.
          </>
        }
        contentContainerClassName={css.introContentContainer}
      />

      <Section
        title="My Stack"
        subtext={
          <>
            My main stack is <strong>React, Next JS, Node JS, Express</strong>,
            but technology is my passion and I&apos;m willing to learn{' '}
            <strong>anything</strong>
          </>
        }
      />
    </div>
  );
};

export default Index;
