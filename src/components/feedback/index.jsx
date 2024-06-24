import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "70%", sm: "400px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const FeedbackModel = ({ feedback, setOpen, open }) => {
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box textAlign={"end"}>
            <CloseOutlinedIcon
              sx={{ cursor: "pointer" }}
              onClick={handleClose}
            />
          </Box>
          <Box sx={{ pl: 2}}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Solution
            </Typography>
            <Typography variant="body1" sx={{ my: 1 }}>
              {feedback}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default FeedbackModel;
