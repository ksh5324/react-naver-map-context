import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '선언적이고 직관적인 API',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        컴포넌트 기반 API를 통해 복잡한 지도 기능을 선언적으로 구현할 수 있습니다.
        직관적인 인터페이스로 빠르게 개발할 수 있습니다.
      </>
    ),
  },
  {
    title: '자동 스크립트 로딩',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        NaverMapProvider가 필요할 때 자동으로 NAVER Maps API를 로드하여 관리합니다.
        별도의 스크립트 관리가 필요 없습니다.
      </>
    ),
  },
  {
    title: 'TypeScript 지원',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        완벽한 타입 안정성이 보장된 TypeScript 지원으로 개발 경험을 향상시킵니다.
        자동완성과 타입 체크를 통해 실수를 방지합니다.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
