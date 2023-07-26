import Image from 'next/image';
import css from './page.module.css';

import { Section } from '~/components';
import Link from 'next/link';

export const Index = () => {
  return (
    <div className={css.mainContainer} style={{ position: 'relative' }}>
      <div className={css.socialIconsContainer}>
        {/* TODO: change the color of the icons on hover - tricky becuase of next/image */}
        {/* TODO: create some underline grow effect on hover */}
        <Link href="https://github.com/Burkes321/samuel-burke-dev">
          <Image
            className={css.githubLogo}
            src="/icon-github.svg"
            width={48}
            height={48}
            alt="link to github"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/samuelburke332/">
          <Image
            src="/icon-linkedin.svg"
            width={48}
            height={48}
            alt="link to github"
          />
        </Link>
      </div>

      <Section
        title="Hi, I'm Sam"
        // TODO: Figure out how to pass the mix of bold and reg text here
        subtext="I’m an experienced full stack web developer currently working 
        at Emplifi in Czechia, and also enjoy freelancing on the side."
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
    </div>
  );
};

export default Index;
