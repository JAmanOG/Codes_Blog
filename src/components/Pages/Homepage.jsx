import React from "react";
import { useState, useEffect } from "react";
import Databases from "../../services/database";
import Container from "../Container/container";
import PostCard from "../Container/postCard";

function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Databases.getPosts().then((res) => {
      if (res) {
        setPosts(res.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-1/4">
              <h1 className="text-2l font-bold hover:text-gray-300">
                Login to read
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}


export default Homepage;
