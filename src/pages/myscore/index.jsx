import React, { useContext, useEffect } from "react";
import { MyContext } from "../../context/ContextProvider";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { dispatch } from "../../redux/store/Store";
import { resetReducer } from "../../redux/reducers/questionsSlice";

const MyScore = () => {
  const { myScore, totalScore } = useContext(MyContext);

  useEffect(() => {
    dispatch(resetReducer());
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        width: "640px",
        margin: "auto",
        bgcolor: "white",
        color: "grey",
        gap: 1,
        borderRadius: "10px",
        p: 2,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 600,textAlign:'center' }}>
        Your Score : {myScore/totalScore * 100}%
      </Typography>
      <Box sx={{display:'flex',justifyContent:"space-between",flexDirection:{xs:"column",sm:'row'},alignItems:{xs:"center",sm:"none"}}}>
        <Typography variant="body1" sx={{fontWeight: 600,color:"#00F73E"}}>Correct Answers:{myScore}/{totalScore}</Typography>
        <Typography variant="body1" sx={{fontWeight: 600,color:"#F77B7A"}}>Wrong Answers:{totalScore-myScore}/{totalScore}</Typography>
      </Box>
      <Box textAlign={"center"}>
        <img src="images/thankyou.jpg" alt="image" width={"50%"} />
      </Box>
      <Box textAlign={"center"}>
        <Link to="/">
          <Button variant="contained">Restart</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default MyScore;
