import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const fetchColors = ({ queryKey }) => {
  const pageNumber = queryKey[1];

  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

export default function PaginatedQueries() {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data } = useQuery(
    ['colors', pageNumber],
    fetchColors,
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div>
        {data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h2>
                {color.id}. {color.label}
              </h2>
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Prev Page
        </button>
      </div>
      <button
        onClick={() => setPageNumber((page) => page + 1)}
        disabled={pageNumber === 4}
      >
        Next Page
      </button>
    </>
  );
}
