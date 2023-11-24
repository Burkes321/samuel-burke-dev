import { NavigationBar } from '~/components/navigationBar/NavigationBar';

import css from './page.module.css';
import { TextGroup } from '~/components/textGroup/TextGroup';

// TODO: move to utils
// const checkWindowScrolledToBottom = () => {
//   const scrollTop = window.scrollY;
//   const windowHeight = window.innerHeight;
//   const totalHeight = Math.max(
//     document.body.scrollHeight,
//     document.documentElement.scrollHeight
//   );

//   return scrollTop + windowHeight >= totalHeight;
// };

const Experience = () => {
  // const [windowAtBottom, setWindowAtBottom] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (checkWindowScrolledToBottom()) {
  //       setWindowAtBottom(true);
  //     }
  //   });
  // }, []);

  return (
    <div className={css.mainContainer}>
      <div className={css.contentContainer}>
        <NavigationBar />

        <TextGroup
          title="Freelance"
          subtext={
            <>
              In my free time, I love to <strong>work with companies</strong> as
              a <strong>freelancer</strong>. My most recent project involved
              building a <strong>data analytics dashboard</strong> on top of
              Microsoft Azure sentinel, using <strong>Next js</strong> and{' '}
              <strong>recharts</strong>.
            </>
          }
        />

        <TextGroup
          title="Emplifi"
          subtext={
            <>
              I currently work here as a <strong>full stack developer</strong>,
              creating and maintaining features for a social media analytics
              tool used by some of the world&apos;s largest companies.
            </>
          }
        />

        <TextGroup
          title="GoodData"
          subtext={
            <>
              My previous position, where I worked as part of a team to create{' '}
              <strong>custom data analytics dashboards</strong> for some of the
              world&apos;s larges payment processors. React, Typescript,
              storybook, and recharts were my main tools.
            </>
          }
        />

        {/* TODO: can still have the bouncing arrow here */}
        {/* 
      <Image
        className={classNames(css.downArrow, !windowAtBottom && css.bounce)}
        src="/arrow-down.svg"
        width={64}
        height={64}
        alt="link to github"
      /> */}
      </div>
    </div>
  );
};

export default Experience;
