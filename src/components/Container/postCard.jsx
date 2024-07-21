import React from "react";
import { DatabaseService } from "../../services/database";
import { Link } from "react-router-dom";

/**
 * Renders a post card component.
 *
 * @param {Object} props - The props for the post card component.
 * @param {string} props.$id - The unique identifier for the post.
 * @param {string} props.title - The title of the post.
 * @param {string} props.featuredImage - The URL of the featured image for the post.
 * @returns {JSX.Element} The rendered post card component.
 */

function postCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full border rounded-md p-4">
        <div className="w-full justify-center mb-4">
          <div>
            <img src={DatabaseService.getFilePreview(featuredImage)} alt={title} className="rounded-xl " />
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default postCard;
