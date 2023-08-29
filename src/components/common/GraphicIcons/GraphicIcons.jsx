import {Box, Typography} from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import {colorPalettes} from "../../../const/colorPalettes";

const chartIcons = [
  {
    icon: <BubbleChartIcon />,
    title: "Bubble Chart",
  },
  {
    icon: <GraphicEqIcon />,
    title: "Graphic Chart",
  },
  {
    icon: <BarChartIcon />,
    title: "Bar Chart",
  },
];

export default function GraphicIcons() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      mb={2}
      ml={1}
      mr={1}
    >
      {chartIcons.map((element) => (
        <Box
          key={element.title}
          display={"flex"}
          alignItems={"center"}
          gap={1}
          color={colorPalettes.blue}
        >
          {element.icon}
          <Typography variant="body2">{element.title}</Typography>
        </Box>
      ))}
    </Box>
  );
}
