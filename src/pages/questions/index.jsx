import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dispatch } from "../../redux/store/Store";
import { fetchedData } from "../../redux/reducers/questionsSlice";
import { MyContext } from "../../context/ContextProvider";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import FeedbackModel from "../../components/feedback";

const Questions = () => {
  const data = useSelector((state) => state.questionsSlice);
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(null);
  const [greenColor, setGreenColor] = useState(false);
  const [idMatch, setIdMatch] = useState(null);
  const [optionLock, setOptionLock] = useState(false);
  const [timer, setTimer] = useState(10);
  const { setMyScore, setTotalScore, difficulty } = useContext(MyContext);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchedData(difficulty));
    setQuestions(data?.data[index]);
    setOpen(false);
    setTimer(60);
    setTotalScore(data.data.length);
  }, [data.isSuccess, index]);

  useEffect(() => {
    setProgress((prev) => prev + 10);
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          if (index < 9) {
            setIdMatch(null);
            setIndex((prev) => prev + 1);
            setOptionLock(false);
            return 60;
          } else {
            navigate("/myScore");
          }
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    setMyScore(0);
  }, []);

  const checkAnswers = (e, opt) => {
    if (!optionLock) {
      setIdMatch(opt);
      if (questions.ans === opt) {
        setOpen(false);
        setGreenColor(true);
        setOptionLock(true);
        setScore((prev) => prev + 1);
        setMyScore((prev) => prev + 1);
      } else {
        setOpen(true);
        setGreenColor(false);
        setOptionLock(true);
      }
    }
  };

  const handleSubmit = () => {
    setIdMatch(null);
    if (optionLock) {
      setIndex((prev) => prev + 1);
      setOptionLock(false);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: { xs: "100%", sm: "50%" },
        height: "50%",
        margin: "auto",
        p: 2,
      }}
    >
      {data.isLoading ? (
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={data.isLoading}
        >
          <CircularProgress size="1rem" color="inherit" />
        </Backdrop>
      ) : (
        <Box
          sx={{
            bgcolor: "white",
            color: "grey",
            gap: 1,
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Typography
            variant="h5"
            textAlign={"center"}
            sx={{ mb: 2, fontWeight: 600 }}
          >
            Quiz App
          </Typography>
          <ProgressBar completed={progress} bgColor="#8D6CC8" fontSize="10px" />
          <Typography
            variant="body2"
            textAlign={"end"}
            sx={{ mt: 2, fontWeight: 600, mb: 1 }}
          >
            Time Left : {timer} sec
          </Typography>
          <hr />
          <Typography
            variant="h5"
            sx={{ my: 2, color: "#000", fontWeight: 600 }}
          >
            {index + 1}.{questions?.question}
          </Typography>
          <Box>
            {[1, 2, 3, 4].map((details, i) => (
              <Typography
                variant="body1"
                key={i}
                onClick={(e) => checkAnswers(e, details)}
                sx={{
                  color: "#000",
                  p: 2,
                  border: "1px solid grey",
                  borderRadius: "5px",
                  m: 1,
                  cursor: "pointer",
                  backgroundColor:
                    idMatch == details
                      ? greenColor
                        ? "#CBF7B8"
                        : "#F1B9B8"
                      : "",
                }}
              >
                {questions?.[`option${details}`]}
              </Typography>
            ))}
          </Box>
          <FeedbackModel
            feedback={questions?.feedback}
            open={open}
            setOpen={setOpen}
          />
          <Box sx={{ textAlign: "center", my: 1 }}>
            {index < 9 ? (
              <Button variant="contained" onClick={handleSubmit}>
                Next
              </Button>
            ) : (
              <Link to="/myScore">
                <Button variant="contained">Submit</Button>
              </Link>
            )}
          </Box>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            {index + 1} of {data.data.length} Questions
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Questions;
