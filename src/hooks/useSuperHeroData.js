import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function fetchSuperHero({ queryKey }) {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
}

export function useSuperHeroData(heroId) {
  // return useQuery(['super-hero', heroId], () => fetchSuperHero(heroId));
  return useQuery(['super-hero', heroId], fetchSuperHero);
}
