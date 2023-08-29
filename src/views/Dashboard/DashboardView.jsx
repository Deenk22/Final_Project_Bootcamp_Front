import DoughnutData from "../../components/Charts/DoughnutData";
import DoughnutChartCards from "../../components/InfoCards/DoughnutChartCards";
import BarData from "../../components/Charts/BarData";
import BarChartCards from "../../components/InfoCards/BarChartCards";
import GraphicIcons from "../../components/common/GraphicIcons/GraphicIcons";
import CardsSections from "../../components/CardsSections/CardsSections";
import {Box, Grid, Typography} from "@mui/material";
import {colorPalettes} from "../../const/colorPalettes";
import "./styleDashboard.css";
import NewsCards from "../../components/NewsCards/NewsCards";

export default function DashboardView({articles}) {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        mt={10}
      >
        <Grid item xs={10} sm={10} md={4}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            padding={2}
            className="blur-effect-doughnut-chart-left"
          >
            <DoughnutData />
          </Box>
          <Typography
            variant="body2"
            textAlign={"center"}
            color={colorPalettes.tealBlue}
            margin={2}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            voluptatem eveniet delectus modi, minima, quis ratione quod
            provident vitae nihil sed, doloremque id aut cumque perferendis
            voluptate dicta necessitatibus asperiores.
          </Typography>
        </Grid>
        <Grid item xs={10} sm={10} md={6}>
          <GraphicIcons />
          <Box
            textAlign={"center"}
            border={"2px solid" + colorPalettes.skyBlue}
            borderRadius={8}
            padding={4}
            sx={{
              marginTop: 4,
              display: {xs: "block", sm: "flex"},
              transition: "0.5s",
              "&:hover": {
                border: "2px solid" + colorPalettes.blue,
              },
            }}
          >
            <Box>
              <Typography variant="h4" color={colorPalettes.blue} mb={1}>
                Data Management
              </Typography>
              <Typography variant="body2" color={colorPalettes.tealBlue}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur velit harum, alias voluptatem laudantium, nobis nam
                blanditiis quia tempore dignissimos iure qui! Tenetur Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                velit harum, alias voluptatem laudantium, nobis nam blanditiis
                quia tempore dignissimos iure qui! Tenetur Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Consequuntur velit harum,
                alias voluptatem laudantium, nobis nam blanditiis quia tempore
                dignissimos iure qui! Tenetur
              </Typography>
              <DoughnutChartCards />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <CardsSections />
      {articles?.map((article) => {
        const {author, title, url, publishedAt, urlToImage} = article;
        return (
          <Grid key={publishedAt}>
            <NewsCards
              author={author}
              title={title}
              url={url}
              urlToImage={urlToImage}
            />
          </Grid>
        );
      })}
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={10} sm={10} md={6} mb={10}>
          <GraphicIcons />
          <Box
            textAlign={"center"}
            border={"2px solid" + colorPalettes.skyBlue}
            borderRadius={8}
            padding={4}
            sx={{
              marginTop: 4,
              display: {xs: "block", sm: "flex"},
              transition: "0.5s",
              "&:hover": {
                border: "2px solid" + colorPalettes.blue,
              },
            }}
          >
            <Box>
              <Typography variant="h4" color={colorPalettes.blue} mb={1}>
                Total Capital Invested
              </Typography>
              <Typography variant="body2" color={colorPalettes.tealBlue}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur velit harum, alias voluptatem laudantium, nobis nam
                blanditiis quia tempore dignissimos iure qui! Tenetur Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                velit harum, alias voluptatem laudantium, nobis nam blanditiis
                quia tempore dignissimos iure qui! Tenetur Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Consequuntur velit harum,
                alias voluptatem laudantium, nobis nam blanditiis quia tempore
                dignissimos iure qui! Tenetur
              </Typography>
              <BarChartCards />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={4}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            padding={2}
            className="blur-effect-doughnut-chart-right"
          >
            <BarData />
          </Box>
          <Typography
            variant="body2"
            textAlign={"center"}
            color={colorPalettes.tealBlue}
            margin={2}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            voluptatem eveniet delectus modi, minima, quis ratione quod
            provident vitae nihil sed, doloremque id aut cumque perferendis
            voluptate dicta necessitatibus asperiores.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
