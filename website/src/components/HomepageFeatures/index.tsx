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
    title: 'Automate IT Processes',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Tonic provides a wide range of actions and offers robust support for
        various services including Amazon EC2, RDS, Redshift, Route 53,
        ElastiCache, Directory Service, as well as Azure Virtual Machines,
        Google Compute Engine, and more.
      </>
    ),
  },
  {
    title: 'Scheduled Cloud Backups',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Automate the creation of backups and snapshots for your instances,
        virtual machines, disks, and databases. Additionally,
        enable automatic deletion of outdated snapshots.
      </>
    ),
  },
  {
    title: 'Smart Cloud Cost Reduction',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Reduce your operational costs by automating the start and stop of
        your instances and virtual machines according to your needs.
        Configure them to power on in the morning and shut down in the evening.
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
