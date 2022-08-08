import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Minecraft',
    Svg: require('@site/static/img/Minecraft.svg').default,
    description: (
      <>
        探索自己独一无二的世界,挺过黑夜,并创建你能想象的一切！
      </>
    ),
  },
  {
    title: 'Minecraft Dungeons',
    Svg: require('@site/static/img/Minecraft_Dungeons.svg').default,
    description: (
      <>
        一款以经典地牢爬虫为灵感来源的全新动作冒险游戏！
      </>
    ),
  },
  {
    title: 'Minecraft Legends',
    Svg: require('@site/static/img/Minecraft_Legends.svg').default,
    description: (
      <>
        全新动作策略游戏Minecraft Legends即将来袭,快来探索重重奥秘。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
