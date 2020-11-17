import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Kwangwoo",
      company: "Kwang",
      theme: "light",
      title: "Software Engineer",
      email: "bnc3049@gmail.com",
      message: "go for it",
      fileName: "kwang",
      fileURL: "kwang.png",
    },
    {
      id: "2",
      name: "Kwangwoo2",
      company: "Kwang",
      theme: "light",
      title: "Software Engineer",
      email: "bnc3049@gmail.com",
      message: "go for it",
      fileName: "kwang",
      fileURL: "kwang.png",
    },
    {
      id: "3",
      name: "Kwangwoo3",
      company: "Kwang",
      theme: "light",
      title: "Software Engineer",
      email: "bnc3049@gmail.com",
      message: "go for it",
      fileName: "kwang",
      fileURL: "kwang.png",
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout(); //로그아웃이 된다면.. 어쩔껀지도..
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/"); //유저가 없다면.. 홈으로 이동해준다!
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
