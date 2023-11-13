import css from './page.module.css';

import { NavigationBar } from '~/components';
import React from 'react';

const Index = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.contentContainer}>
        <NavigationBar />

        {/* TODO: maybe try and make this into an extensible component like the <Section /> */}
        <div className={css.headerContainer}>
          <div className={css.title}>Hi, I&apos;m Sam</div>
          <div className={css.subtext}>
            I’m an experienced <strong>full stack</strong> web developer
            currently working at <strong>Emplifi</strong> in Czechia, and also
            enjoy <strong>freelancing</strong> on the side.
          </div>
        </div>

        <div className={css.stackContainer}>
          <div className={css.title}>My Stack</div>
          <div className={css.subtext}>
            My main stack is <strong>React, Next JS, Node JS, Express</strong>,
            but technology is my life&apos;s passion and I&apos;m willing to
            learn <strong>anything</strong>.
          </div>
        </div>

        <div className={css.stackContainer}>
          <div className={css.title}>Let&apos;s get in touch</div>
          <div className={css.subtext}>
            I&apos;m always open to freelancing in addition to my regular day
            job, and would love to get in touch and help you solve your business
            problems. You can reach me with the <strong>get in touch</strong>{' '}
            button above or send me an email at{' '}
            <u>
              <strong>sam.burke99@gmail.com</strong>
            </u>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
