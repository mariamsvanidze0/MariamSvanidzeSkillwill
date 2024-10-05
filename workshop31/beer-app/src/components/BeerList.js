import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBeers } from '../redux/beerSlice';

const BeerList = () => {
  const dispatch = useDispatch();
  const { beers, status } = useSelector((state) => state.beers);

  useEffect(() => {
    dispatch(fetchBeers());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Failed to load beers.</p>;
  }

  return (
    <div>
      <h1>Random Beers</h1>
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <img src={beer.image_url} alt={beer.name} style={{ height: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BeerList;
