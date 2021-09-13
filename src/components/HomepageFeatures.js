import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Place Holder 0',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Description 0 <br></br>
        Description 0
      </>
    ),
  },
  {
    title: 'Place Holder 1',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Description 1 <br></br>
        Description 1
      </>
    ),
  },
  {
    title: 'Place Holder 2',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Description 2 <br></br>
        Description 2
      </>
    ),
  },
  {
    title: 'place holder 3',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Description 3 <br></br>
        Description 3
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
