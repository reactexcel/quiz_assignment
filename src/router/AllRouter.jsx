import React from "react";
import { Route, Routes } from "react-router-dom";
import Questions from "../pages/questions";
import QuizCard from "../pages/home";
import MyScore from "../pages/myscore";

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<QuizCard />} />
      <Route path="/startquiz" element={<Questions />} />
      <Route path="/myScore" element={<MyScore />} />
    </Routes>
  );
};

export default AllRouter;
