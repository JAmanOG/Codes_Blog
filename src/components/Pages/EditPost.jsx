import React, { useState, useEffect } from "react";
import Databases from "../../services/database";
import { useNavigate, useParams } from "react-router-dom";
import Postform from "../Forms/Postform";
import Container from "../Container/container";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      Databases.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <Postform post = {post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
