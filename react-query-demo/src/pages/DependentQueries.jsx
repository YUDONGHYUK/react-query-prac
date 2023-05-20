import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function fetchUserByEmail({ queryKey }) {
  const email = queryKey[1];

  return axios.get(`http://localhost:4000/users/${email}`);
}

function fetchCoursesByChannelId({ queryKey }) {
  const channelId = queryKey[1];

  return axios.get(`http://localhost:4000/channel/${channelId}`);
}

export default function DependentQueries({ email }) {
  const { data: user } = useQuery(['user', email], fetchUserByEmail);
  const channelId = user?.data.channelId;
  useQuery(['courses', channelId], fetchCoursesByChannelId, {
    enabled: !!channelId,
  });

  return <div>DependentQueries</div>;
}
