import React, { useEffect, useState } from 'react';

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
    <div>
      {news.map(newsItem => (
        <div key={newsItem.id}>
          <h1>{newsItem.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default News;
