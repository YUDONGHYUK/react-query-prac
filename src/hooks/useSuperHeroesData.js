import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export function useSuperHeroesData(onSuccess, onError) {
  return useQuery(['super-heroes'], fetchSuperHeroes, {
    onSuccess,
    onError,
    // select: ({ data }) => {
    //   const heroNames = data.map((hero) => hero.name);
    //   return heroNames;
    // },
  });
}
