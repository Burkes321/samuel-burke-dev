import css from './page.module.css';

import { NavigationBar } from '~/components/navigationBar/NavigationBar';
import React from 'react';
import { TextGroup } from '~/components/textGroup/TextGroup';

const Index = () => {
  return (
    <div className={css.mainContainer}>
      <div className={css.contentContainer}>
        <NavigationBar />

        <TextGroup
          title="Hi, I'm Sam"
          subtext={
            <>
              I’m an experienced <strong>full stack</strong> web developer
              currently working at <strong>Emplifi</strong> in Czechia, and also
              enjoy <strong>freelancing</strong> on the side.
            </>
          }
        />

        <TextGroup
          title="My Stack"
          subtext={
            <>
              My main stack is <strong>React, Next JS, Node JS, Express</strong>
              , but technology is my life&apos;s passion and I&apos;m willing to
              learn <strong>anything</strong>.
            </>
          }
        />

        <TextGroup
          title="Let's get in touch"
          subtext={
            <>
              My main stack is <strong>React, Next JS, Node JS, Express</strong>
              , but technology is my life&apos;s passion and I&apos;m willing to
              learn <strong>anything</strong>.
            </>
          }
        />
      </div>
    </div>
  );
};

export default Index;
