import { useParams } from 'react-router-dom';
import { useSuperHeroData } from '../hooks/useSuperHeroData';

export default function RQSuperHero() {
  const { heroId } = useParams();
  const { data: hero, isLoading, isError, error } = useSuperHeroData(heroId);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      {hero?.data.name} - {hero?.data.alterEgo}
    </div>
  );
}
