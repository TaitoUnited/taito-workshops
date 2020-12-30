export interface TopicData {
  label: string;
  slug: string;
  numOfExercises: number;
}

export const topicsBySlug: { [slug: string]: TopicData } = {
  // 'basics-of-react': {
  //   label: 'Basics of React',
  //   slug: 'basics-of-react',
  //   numOfExercises: 4,
  // },
  'basics-of-hooks': {
    label: 'Basics of Hooks',
    slug: 'basics-of-hooks',
    numOfExercises: 5,
  },
  'advanced-hooks': {
    label: 'Advanced Hooks',
    slug: 'advanced-hooks',
    numOfExercises: 3,
  },
  'advanced-patterns': {
    label: 'Advanced Patterns',
    slug: 'advanced-patterns',
    numOfExercises: 2,
  },
  performance: {
    label: 'Performance',
    slug: 'performance',
    numOfExercises: 3,
  },
};

const getFilename = (i: number) => (i < 10 ? `0${i}` : `${i}`);

export const topics = Object.values(topicsBySlug);

export const routes = topics.map(({ slug, numOfExercises }) => ({
  path: `/${slug}`,
  routes: Array(numOfExercises)
    .fill(1)
    .map((_, i) => [
      {
        path: `/${getFilename(i + 1)}`,
        component: require(`../exercises/${slug}/${getFilename(i + 1)}`).default // prettier-ignore
      },
      {
        path: `/${getFilename(i + 1)}/final`,
        component: require(`../exercises/${slug}/final/${getFilename(i + 1)}`).default // prettier-ignore
      },
    ])
    .flat(),
}));
