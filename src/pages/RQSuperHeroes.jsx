import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export default function RQSuperHeroes() {
  const {
    data: heroes,
    isLoading,
    isFetching,
    isError,
    error,
  } = useQuery(['super-heroes'], fetchSuperHeroes, {
    // cacheTime: 5000,
    staleTime: 30000,
  });

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroes Page</h2>
      {heroes?.data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
}
