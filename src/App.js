import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import EditPage from "./Components/Edit/EditPage";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MakePost from "./Components/Posts/MakePost";
import Posts from "./Components/Posts/Posts";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  return (
    <div className="App">
      {isEdit ? (
        <EditPage setIsEdit={setIsEdit} />
      ) : !isEdit && !openPost ? (
        <>
          <Header setIsEdit={setIsEdit} />
          <div className="post-container">
            <Posts />
          </div>
          <Footer openPost={openPost} setOpenPost={setOpenPost} />
        </>
      ) : (
        <>
          <Header setIsEdit={setIsEdit} />
          <MakePost setOpenPost={setOpenPost} />
        </>
      )}
      {pending && <p className="loading">Loading....</p>}
      {!isEdit && error && (
        <p className="erro">Erro when fetching data from server</p>
      )}
    </div>
  );
}

export default App;
