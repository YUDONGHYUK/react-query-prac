import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

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
  } = useSuperHeroesData(onSuccess, onError);

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
