import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import {Box} from "@mui/material";

export default function ScrollToTop() {
  const handleScroll = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  console.log(window.prompt);

  return (
    <Box position={"fixed"} bottom={0} right={0} p={2}>
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
