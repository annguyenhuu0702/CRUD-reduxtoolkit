import React from "react";
import "./footer.css";

const Footer = (props) => {
  const { openPost, setOpenPost } = props;
  return (
    <footer>
      <div
        className="footer-tilte"
        onClick={() => {
          setOpenPost(!openPost);
        }}
      >
        {openPost ? "x" : "+"}
      </div>
    </footer>
  );
};

export default Footer;
