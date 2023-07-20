import Image from 'next/image';
import css from './page.module.css';

import { Intro } from '~/sections/intro';
import { Emplifi } from '~/sections/emplifi';

export const Index = () => {
  return (
    <div className={css.mainContainer}>
      <Intro />
      <Emplifi />
    </div>
  );
};

export default Index;
