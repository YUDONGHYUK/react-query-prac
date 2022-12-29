import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function fetchSuperHeroes() {
  return axios.get('http://localhost:4000/superheroes');
}

function fetchFriends() {
  return axios.get('http://localhost:4000/friends');
}

export default function ParallelQueries() {
  const { data: superHeroes } = useQuery(['super-heroes'], fetchSuperHeroes);
  const { data: friends } = useQuery(['friends'], fetchFriends);

  return <div>ParallelQueries</div>;
}
