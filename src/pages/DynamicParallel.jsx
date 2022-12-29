import { useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';

function fetchSuperHero({ queryKey }) {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
}

export default function DynamicParallel({ heroIds }) {
  const queryResults = useQueries({
    queries: heroIds.map((id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: fetchSuperHero,
      };
    }),
  });

  console.log(queryResults);

  return <div>DynamicParallel</div>;
}
