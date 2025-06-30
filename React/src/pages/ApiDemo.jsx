import React, { useEffect, useState } from "react";
import Card from "../components/ui/card";
import Button from "../components/ui/button";

const PAGE_SIZE = 6;

const ApiDemo = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch posts");
        setLoading(false);
      });
  }, []);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">API Demo (Posts)</h2>
      <input
        className="mb-4 px-3 py-2 border rounded w-full max-w-md"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginated.map((post) => (
          <Card key={post.id}>
            <h3 className="font-semibold mb-2">{post.title}</h3>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-6">
        <Button
          variant="secondary"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="px-3 py-2">Page {page} of {totalPages}</span>
        <Button
          variant="secondary"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ApiDemo; 