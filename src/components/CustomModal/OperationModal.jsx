import Modal from "@mui/material/Modal";
import {useState} from "react";
import UpdateOperationForm from "../UpdateOperationForm/UpdateOperationForm";
import EditIcon from "@mui/icons-material/Edit";
import {Box, List, ListItem, ListItemIcon, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const chartColorsPalette = {
  orange: "rgba(255, 159, 64, 0.7)",
  lightPink: "rgba(255, 99, 132, 0.7)",
  lightYellow: "rgba(255, 205, 86, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  tealBlue2: "rgba(75, 192, 192, 0.7)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
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

export default function OperationModal({operation}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {operationType} = operation;

  return (
    <Box>
      <EditIcon onClick={handleOpen} />
      <Modal
        className="modal"
        keepMounted
        open={open}
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
            Edit Data <span className="operation-type">{operationType} </span>
            Dialog Box
          </Typography>
          {/* <Box>
            <Typography>Como funciona</Typography>
            <List disablePadding>
              <ListItem disablePadding>
                <ListItemIcon>
                  <Typography>01</Typography>
                </ListItemIcon>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <Typography>01</Typography>
                </ListItemIcon>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <Typography>01</Typography>
                </ListItemIcon>
              </ListItem>
            </List>
          </Box> */}
          <UpdateOperationForm setOpen={setOpen} operation={operation} />
          {open ? (
            <CloseIcon
              onClick={handleClose}
              sx={{
                position: "relative",
                bottom: 450,
                left: 956,
                color: chartColorsPalette.blue,
                bgcolor: chartColorsPalette.skyBlue,
                borderBottomLeftRadius: 8,
                transition: "0.5s",
                transform: "rotate(180deg)",
                "&:hover": {
                  transform: "rotate(0deg)",
                  color: chartColorsPalette.lightPink,
                  borderTopRightRadius: 8,
                },
              }}
            />
          ) : null}
        </Box>
      </Modal>
    </Box>
  );
}
