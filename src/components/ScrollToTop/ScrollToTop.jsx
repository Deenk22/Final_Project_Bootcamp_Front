import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import {Box} from "@mui/material";

export default function ScrollToTop() {
  const handleScroll = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <Box position={"fixed"} bottom={0} right={0} p={{xs: 0, sm: 2}}>
      <ExpandCircleDownIcon
        fontSize="large"
        color="paragraphs"
        onClick={handleScroll}
        sx={{
          cursor: "pointer",
          transform: "rotate(180deg)",
          borderRadius: "16px",
        }}
      />
    </Box>
  );
}
