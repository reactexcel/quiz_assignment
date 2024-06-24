import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context/ContextProvider";

const QuizCard = () => {
  const { setDifficulty,difficulty } = useContext(MyContext);

  useEffect(()=>{
    setDifficulty("Easy")
  },[])

  const handleChangeSelect = (e) => {
    setDifficulty(e.target.value);
  };
  return (
    <Box
      sx={{
        width: "640px",
        margin: "auto",
        bgcolor: "white",
        color: "grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        borderRadius: "10px",
        p: 2,
      }}
    >
      <Typography variant="h5">
        {" "}
        Embark on the Ultimate Quiz Adventure!
      </Typography>
      <Box textAlign={"center"}>
        <img
          src="images/quiz-maker-apps-tools.webp"
          alt="image"
          width={"100%"}
        />
      </Box>
      <Box>
        <Typography variant="h6">Select Type of Difficulty</Typography>
        <Select
          name="difficulty"
          sx={{ width: "100%", height: "30px" }}
          onChange={handleChangeSelect}
          value={difficulty}
        >
          <MenuItem>--Select--</MenuItem>
          <MenuItem value={"Easy"}>Easy</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"Hard"}>Hard</MenuItem>
        </Select>
      </Box>
      <Box>
        <Link to="/startquiz">
          <Button variant="contained">start quiz</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default QuizCard;
