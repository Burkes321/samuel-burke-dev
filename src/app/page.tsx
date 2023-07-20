import Image from 'next/image';
import css from './page.module.css';

import { Intro } from '~/sections/intro';

export const Index = () => {
  return (
    <div className={css.mainContainer}>
      <Intro />
    </div>
  );
};

export default Index;
