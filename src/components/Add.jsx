import React from "react";
import { useState } from "react";
import { Tooltip, Fab, Modal, Box, Typography } from "@mui/material/";
import AddIcon from "@mui/icons-material/Add";
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
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>Hello</Box>
      </Modal>
    </div>
  );
};

export default Add;
