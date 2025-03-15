import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {  
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return; // Prevent unnecessary API calls

    const url = `https://gnews.io/api/v4/top-headlines?country=us&category=${category}&apikey=${import.meta.env.VITE_API_KEY}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("API Response:", data);

        setArticles(data.articles.map(article => ({
          title: article.title,
          description: article.description,
          src: article.image || "https://via.placeholder.com/300", // Placeholder if image is missing
          url: article.url
        })));
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err.message);
      });
  }, [category]); 

  return (
    <div>
      <h2 className="text-center my-2">Latest <span className="badge bg-danger">News</span></h2>

      {error ? (
        <p className="text-center text-danger">Error: {error}</p>
      ) : articles.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-center">
          {articles.map((news, index) => (
            <NewsItem 
              key={index} 
              title={news.title} 
              description={news.description} 
              src={news.src} 
              url={news.url} 
            />
          ))}
        </div>
      ) : (
        <p className="text-center">Loading news...</p>
      )}
    </div>
  );
};

export default NewsBoard;
