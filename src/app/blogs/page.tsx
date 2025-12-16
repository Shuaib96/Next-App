"use client";

import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";

export default function BlogsPage() {
  const [posts, setPosts] = useState<any>(null);
  const [inputVal, setInputVal] = useState("");

useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/post/blogs");
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  fetchBlogs();
}, []);


//debounce
useEffect(() => {
  if (!inputVal) {
    // If input is cleared, reload all blogs
    const fetchBlogs = async () => {
      const res = await fetch("http://localhost:8080/api/post/blogs");
      const data = await res.json();
      setPosts(data);
    };
    fetchBlogs();
    return;
  }

  const delayDebounce = setTimeout(async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/post/search?q=${inputVal}`
      );
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Search error:", err);
    }
  }, 500); // 👈 debounce time

  return () => clearTimeout(delayDebounce);
}, [inputVal]);



  const handleSearch = async () => {
    const res = await fetch(
      `http://localhost:8080/api/post/search?q=${inputVal}`
    );
    const data = await res.json();
    setPosts(data);
  };

  if (!posts) return <p>Loading...</p>;

  const blogs = posts.data.map((post: any) => ({
    id: post.id,
    title: post.title,
    date: `Published ${getDaysAgo(post.created_at)} days ago`,
    readTime: `${Math.ceil(post.description.length / 200)} min read`,
    comments: `${post._count.comment} comments`,
    description: post.description,
  }));

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">
          DevBlog - A Blog Template Made For Developers
        </h1>

        <div className="flex justify-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md px-4 py-2 w-64"
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-5 py-2 rounded-md"
            onClick={handleSearch}
          >
            Search blogs
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {blogs.map((blog: any) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

function getDaysAgo(dateString: string) {
  const createdDate = new Date(dateString);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - createdDate.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
