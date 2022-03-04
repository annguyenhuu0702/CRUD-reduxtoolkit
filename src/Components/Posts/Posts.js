import React from "react";
import { useSelector } from "react-redux";
import "./post.css";

const Posts = () => {
  // selector store
  const posts = useSelector((state) => state.post.posts);

  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

  return (
    <>
      <section className="post-container">
        {posts &&
          posts.length > 0 &&
          posts.slice(1).map((post, index) => {
            return (
              <div className="posts" key={index}>
                <p className="posts-title"> {post.title} </p>
                <p className={`posts-tags-${tags[post.tag]} posts-tags`}>
                  {tags[post.tag]}
                </p>
                <p className="posts-description"> {post.description} </p>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default Posts;
