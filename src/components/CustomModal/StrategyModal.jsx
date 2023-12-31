import Modal from "@mui/material/Modal";
import {useState} from "react";
import EditIcon from "@mui/icons-material/Edit";
import {Box, Typography} from "@mui/material";
import UpdateStrategyForm from "../UpdateStrategyForm/UpdateStrategyForm";
import CloseIcon from "@mui/icons-material/Close";

const chartColorsPalette = {
  orange: "rgba(255, 159, 64, 0.7)",
  lightPink: "rgba(255, 99, 132, 0.7)",
  lightYellow: "rgba(255, 205, 86, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  tealBlue2: "rgba(75, 192, 192, 0.7)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 40, 52, 0.9)",
  skyBlue: "rgba(208, 228, 233)",
  tealBlue: "#367588",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1000px",
  height: "576px",
  bgcolor: chartColorsPalette.blue,

  borderRadius: 8,
};

export default function StrategyModal({strategy}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {name} = strategy;

  return (
    <Box>
      <EditIcon onClick={handleOpen} />
      <Modal
        keepMounted
        open={open}
        // onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          sx={style}
        >
          <Typography
            variant="h4"
            color={chartColorsPalette.skyBlue}
            textAlign={"center"}
          >
            Edit Data <span className="span-modal">{name} </span>
            Dialog Box
          </Typography>
          <UpdateStrategyForm strategy={strategy} setOpen={setOpen} />
          {open ? (
            <CloseIcon
              onClick={handleClose}
              sx={{
                cursor: "pointer",
                position: "relative",
                bottom: 360,
                left: 956,
                color: chartColorsPalette.skyBlue,
                transition: "0.3s",
                transform: "rotate(180deg)",
                "&:hover": {
                  transform: "rotate(0deg)",
                  color: chartColorsPalette.lightPink,
                },
              }}
            />
          ) : null}
        </Box>
      </Modal>
    </Box>
  );
}
