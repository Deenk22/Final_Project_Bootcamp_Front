import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const chartColorsPalette = {
  orange: "rgba(255, 159, 64, 0.7)",
  lightPink: "rgba(255, 99, 132, 0.7)",
  lightYellow: "rgba(255, 205, 86, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  tealBlue2: "rgba(75, 192, 192, 0.7)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  skyBlue: "rgba(208, 228, 233)",
};

export default function DetailCards(props) {
  const {id, type, strategyName, brokerName, operationType, stockName} = props;
  let linkTo = "";

  type === "operation"
    ? (linkTo = `operationdetails/${id}`)
    : (linkTo = `strategydetails/${id}`);

  return (
    <>
      <Link to={linkTo} className="allLinks">
        <Box
          width={288}
          padding={2}
          mx={4}
          borderRadius={4}
          color={chartColorsPalette.skyBlue}
          bgcolor={chartColorsPalette.blue}
        >
          <Typography variant="body2">
            Operation Type: {operationType}
          </Typography>
          <Typography variant="body2">Strategy Name: {strategyName}</Typography>
          <Typography variant="body2">Broker Name: {brokerName}</Typography>
          <Typography variant="body2">Stock Name: {stockName}</Typography>
        </Box>
      </Link>
    </>
  );
}
