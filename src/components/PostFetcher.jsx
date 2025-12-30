import React, { useState, useEffect } from 'react';

const PostFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postId, setPostId] = useState(1);

  const fetchData = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!response.ok) throw new Error('Failed to fetch');
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(postId);
  }, [postId]);

  const handlePrevious = () => {
    if (postId > 1) setPostId(postId - 1);
  };

  const handleNext = () => {
    if (postId < 100) setPostId(postId + 1);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Exercise 3.2: Post Fetcher</h2>
      
      <div className="flex gap-4 mb-4">
        <button 
          onClick={handlePrevious} 
          disabled={postId <= 1}
          className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="px-4 py-2">Post #{postId}</span>
        <button 
          onClick={handleNext}
          disabled={postId >= 100}
          className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>

      {loading && <div className="text-gray-500">Loading...</div>}
      {error && <div className="text-red-500">Error: {error.message}</div>}
      {data && (
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
          <p className="text-gray-700">{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostFetcher;
