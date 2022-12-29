import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const addSuperHero = (hero) => {
  return axios.post(`http://localhost:4000/superheroes`, hero);
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

export function useAddSuperHeroData() {
  const queryClient = useQueryClient();

  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries(['super-heroes']);
      queryClient.setQueryData(['super-heroes'], (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
}
