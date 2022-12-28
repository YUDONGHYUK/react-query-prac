import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export default function RQSuperHeroes() {
  const [interval, setInterval] = useState(3000);

  const onSuccess = ({ data }) => {
    if (data.length >= 4) {
      setInterval(false);
    } else {
      setInterval(3000);
    }
  };
  const onError = (error) => {
    if (error) {
      setInterval(false);
    }
  };

  const {
    data: heroes,
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
    refetchInterval: interval,
    onSuccess,
    onError,
  });

  console.log({ isLoading, isFetching });

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroes Page</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {heroes?.data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
}
