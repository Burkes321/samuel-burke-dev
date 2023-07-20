import Image from 'next/image';
import css from './page.module.css';

import { Section } from '~/components';

export const Index = () => {
  return (
    <div className={css.mainContainer}>
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
