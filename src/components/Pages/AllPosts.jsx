import React, { useState, useEffect } from "react";
import Databases from "../../services/database";
import Container from "../Container/container";
import PostCard from "../Container/postCard";

function AllPosts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    Databases.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })

  }, [])
return (
  <div className='w-full py-8'>
      <Container>
          <div className='flex flex-wrap'>
              {posts.map((post) => (
                  <div key={post.$id} className='p-2 w-1/4'>
                      <PostCard {...post}/>
                  </div>
              ))}
          </div>
          </Container>
  </div>
)
}

export default AllPosts