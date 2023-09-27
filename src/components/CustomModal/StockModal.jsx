import Modal from "@mui/material/Modal";
import {useState} from "react";
import EditIcon from "@mui/icons-material/Edit";
import {Box, List, ListItem, ListItemIcon, Typography} from "@mui/material";
import UpdateStrategyForm from "../UpdateStrategyForm/UpdateStrategyForm";

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
  width: "70%",
  height: "80vh",
  bgcolor: chartColorsPalette.skyBlue,

  borderRadius: 8,
};

export default function StockModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            color={chartColorsPalette.blue}
            textAlign={"center"}
          >
            Edit Data Stock Dialog Box
          </Typography>
          <Box>
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
          </Box>
          <UpdateStrategyForm />
          <Box textAlign={"center"}>
            <Typography
              component={"button"}
              onClick={handleClose}
              width={"20%"}
              textAlign={"center"}
            >
              Close
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
