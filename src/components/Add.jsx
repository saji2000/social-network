import React from "react";
import { useState } from "react";
import {
  Tooltip,
  Fab,
  Modal,
  Box,
  Typography,
  styled,
  Avatar,
  TextField,
} from "@mui/material/";
import AddIcon from "@mui/icons-material/Add";
import SajadImage from "../images/Sajad.jpeg";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.5em",
  marginBottom: "1em",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: "1em",
          left: { xs: "calc(50% - 25px)", md: "1em" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={"30em"}
          height={"20em"}
          bgcolor="white"
          p={"2em"}
          borderRadius={"2em"}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar src={SajadImage} sx={{ width: "2em", height: "2em" }} />
            <Typography>Sajad Daneshmand</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={1}
            placeholder="What's on your mind?"
            variant="standard"
          />
        </Box>
      </StyledModal>
    </div>
  );
};

export default Add;
