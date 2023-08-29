'use client';

import Image from 'next/image';
import css from './page.module.css';

import { Section } from '~/components';
import Link from 'next/link';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { GithubLogo, LinkedinLogo } from '~/components';

const checkWindowScrolledToBottom = () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const totalHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );

  return scrollTop + windowHeight >= totalHeight;
};

const Index = () => {
  const [windowAtBottom, setWindowAtBottom] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (checkWindowScrolledToBottom()) {
        setWindowAtBottom(true);
      }
    });
  }, []);

  return (
    <div className={css.mainContainer}>
      <div className={css.linksContainer}>
        <Link className={css.link} href="/about">
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
          {/* <Image
            src="/icon-linkedin.svg"
            width={48}
            height={48}
            alt="link to linkedin"
          /> */}

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
        title="Emplifi"
        subtext="I currently work here as a full stack developer, creating and maintaining
          features for a social media analytics tool used by some of the world’s 
          largest companies"
      />

      <Section
        title="GoodData"
        subtext="I currently work here as a full stack developer, creating and maintaining
          features for a social media analytics tool used by some of the world’s 
          largest companies"
      />

      <Image
        className={classNames(css.downArrow, !windowAtBottom && css.bounce)}
        src="/arrow-down.svg"
        width={64}
        height={64}
        alt="link to github"
      />
    </div>
  );
};

export default Index;
