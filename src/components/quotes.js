import React, { useState, useEffect } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const category = 'computers';
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: {
            'X-Api-Key': 'CkL9zePipDK5tgJtxyNgcQ==uOajyB7tQnvSQGi0',
          },
        });
        const data = await res.json();
        setQuotes(data);
      } catch (error) {
        setQuotes([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading quotes ...</div>;
  }

  if (!quotes.length) {
    return (
      <div className="failed">
        Failed to load quotes.
      </div>
    );
  }

  return (
    <ul>
      {quotes.map((quote) => (
        <div key={quote.id} className="quotes">
          <p>
            {quote.quote}
            <br />
            -
            {quote.author}
          </p>
        </div>
      ))}
    </ul>
  );
}

export default Quotes;
