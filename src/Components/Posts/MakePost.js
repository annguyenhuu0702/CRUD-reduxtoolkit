import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../Redux/postSlice";
import Input from "../InputFields/Input";
import "./post.css";

const MakePost = (props) => {
  // props
  const { setOpenPost } = props;

  // state
  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add some descriptions");
  const [seclectedIdx, setSeclectedIdx] = useState(0);

  const dispatch = useDispatch();

  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

  const handlePost = () => {
    setOpenPost(false);
    const newPost = {
      title: title,
      description: desc,
      tag: seclectedIdx,
    };
    dispatch(createPost(newPost));
  };

  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>
          Post
        </p>
      </div>
      <Input
        data={title}
        inputType="textarea"
        setData={setTitle}
        lable="Title"
        classStyle="makepost-title"
      />
      <Input
        data={desc}
        inputType="textarea"
        setData={setDesc}
        lable="Descriptions"
        classStyle="makepost-desc"
      />
      <label>Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              className={`${
                seclectedIdx === index
                  ? `makepost-tags-selected`
                  : `makepost-tags-${tag}`
              }`}
              onClick={() => setSeclectedIdx(index)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MakePost;
