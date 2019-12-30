import { useRouteMatch } from 'react-router-dom';
import { topicsBySlug } from './data';

export const slugify = (s: string) => s.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''); // prettier-ignore

export const range = (n: number) => Array(n).fill(1);

const getExerciseList = (slug: string) => {
  const topicData = topicsBySlug[slug];

  return topicData
    ? range(topicData.numOfExercises).map((_, i) => `Exercise ${i + 1}`)
    : [];
};

export const useExerciseMatch = () => {
  const topicMatch = useRouteMatch<{ slug: string }>('/:slug');
  const exerciseMatch = useRouteMatch<{ slug: string; exercise: string }>('/:slug/:exercise'); // prettier-ignore
  const finalMatch = useRouteMatch('/:slug/:exercise/final');

  return {
    topic: topicMatch ? topicsBySlug[topicMatch.params.slug] : null,
    topicExercises: topicMatch ? getExerciseList(topicMatch.params.slug) : null,
    selectedExercise: exerciseMatch ? exerciseMatch.params.exercise : null,
    final: !!finalMatch?.isExact,
  };
};
