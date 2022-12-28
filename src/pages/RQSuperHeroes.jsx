import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export default function RQSuperHeroes() {
  const onSuccess = (data) => {
    console.log('Perform side effect after data fetching', data);
  };
  const onError = (error) => {
    console.log('Perform side effect after encountering error', error);
  };

  const {
    data: heroNames,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useQuery(['super-heroes'], fetchSuperHeroes, {
    // cacheTime: 5000,
    // staleTime: 30000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
    // enabled: false,
    // refetchInterval: interval,
    onSuccess,
    onError,
    select: ({ data }) => {
      const heroNames = data.map((hero) => hero.name);
      return heroNames;
    },
  });

  console.log({ isLoading, isFetching });

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  console.log(heroNames);

  return (
    <>
      <h2>RQSuperHeroes Page</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {/* {heroes?.data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))} */}
      {heroNames.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))}
    </>
  );
}
