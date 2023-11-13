import css from './page.module.css';

import { Section, NavigationBar } from '~/components';
import React from 'react';

const Index = () => {
  return (
    <div className={css.mainContainer}>
      <NavigationBar />

      {/* <Section
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
      /> */}

      <div>Hi, I&apos;m Sam</div>
    </div>
  );
};

export default Index;
