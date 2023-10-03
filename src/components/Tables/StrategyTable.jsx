import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {convertDate} from "../../const/convertDate";
import {
  Box,
  IconButton,
  TableFooter,
  TablePagination,
  Toolbar,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {useEffect, useState} from "react";
import StrategyModal from "../CustomModal/StrategyModal";
import SearchIcon from "@mui/icons-material/Search";

const chartColorsPalette = {
  tealBlue2: "rgba(75, 192, 192, 0.6)",
  lightPink: "rgba(255, 99, 132, 0.7)",
  lightYellow: "rgba(255, 205, 86, 0.6)",
  tealBlueOpacity: "rgba(75, 192, 192, 0.2)",
  lightPinkOpacity: "rgba(255, 99, 132, 0.2)",
  lightYellowOpacity: "rgba(255, 205, 86, 0.2)",
  orange: "rgba(255, 159, 64, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  skyBlue: "rgba(208, 228, 233)",
};

const StyledTableContainer = styled(TableContainer)(() => ({
  width: 960,
  height: 440,
}));

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: chartColorsPalette.blue,
    color: chartColorsPalette.skyBlue,
  },
  [`&.${tableCellClasses.body}`]: {
    borderLeft: "1px solid rgba(22, 41, 56, 0.1)",
    borderBottom: "1px solid rgba(22, 41, 56, 0.1)",
    fontSize: "body2",
  },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function StrategyTable({allStrategies, strategyDeleteMutation}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [filteredStrategy, setFilteredStrategy] = useState(allStrategies);

  function onSearchOperations(e) {
    setPage(0);
    setSearch(e.target.value);
  }

  useEffect(() => {
    const filteredByName = allStrategies?.filter((strategy) => {
      return strategy.name.includes(search);
    });
    setFilteredStrategy(filteredByName);
  }, [search, allStrategies]);

  const handleChangePage = (event, newPage) => {
    const numPages = Math.ceil(filteredStrategy.length / rowsPerPage);
    setPage(newPage >= numPages ? numPages - 1 : newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedOperations = filteredStrategy?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <Box className="toolbar">
        <Toolbar
          sx={{
            color: chartColorsPalette.skyBlue,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography ml={6} mt={1} variant="h4" fontSize={"1.80rem"}>
            Strategies Control
          </Typography>
          <Box>
            <label htmlFor="operation-search">
              <SearchIcon
                sx={{
                  position: "relative",
                  top: 9,
                  right: 10,
                }}
              />
              <input
                className="input-search"
                type="search"
                id="operation-search"
                // value={search}
                onChange={onSearchOperations}
              />
            </label>
          </Box>
        </Toolbar>
      </Box>
      <StyledTableContainer
        component={Paper}
        sx={{borderBottomLeftRadius: 32, borderBottomRightRadius: 32}}
      >
        <Table aria-label="customized table" size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell>Strategy Name</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">Budget</StyledTableCell>
              <StyledTableCell align="left">Create Date</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedOperations?.map((strategy) => (
              <StyledTableRow key={strategy.id}>
                <StyledTableCell component="th" scope="row">
                  {strategy.name}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {strategy.description}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {strategy.budget}
                </StyledTableCell>

                <StyledTableCell align="left">
                  {convertDate(strategy.createDate)}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={() => strategyDeleteMutation.mutate(strategy.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton aria-label="delete">
                    <StrategyModal strategy={strategy} />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10]}
                count={filteredStrategy ? filteredStrategy.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </StyledTableContainer>
    </>
  );
}
