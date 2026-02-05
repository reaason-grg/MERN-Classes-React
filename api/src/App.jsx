import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function getPosts() {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("https://dummyjson.com/posts");
      // console.log(res.data.posts);
      setPosts(res.data.posts);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <p>Loading..</p>;
  }
  if (error) {
    return <p>Failed to fetch posts {error}</p>;
  }

  return (
    <div>
      <button onClick={getPosts} className="btn">
        Fetch Posts
      </button>

      <div>
        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <div key={post.id} className="border p-4 m-10">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <div>
                  <span>Likes:{post.reactions.likes}</span>
                  <span>Dislikes:{post.reactions.dislikes}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No posts</div>
        )}
      </div>
    </div>
  );
};

export default App;