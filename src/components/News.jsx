import React, { useEffect, useState } from 'react';
import Card from './Card';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/news.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Greška');
        }
        return response.json();
      })
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Učitavanje...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='flex flex-col gap-7 max-w-6xl mx-auto px-5 my-[7rem]'>
    <h1 className='text-4xl font-bold'>Novosti</h1>
      <div className='flex flex-wrap gap-7'>
        {news.map(newsItem => (
          <div key={newsItem.id}>
            <Card title={newsItem.title} description={newsItem.description} />
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default News;
