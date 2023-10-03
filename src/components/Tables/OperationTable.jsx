import {useEffect, useState} from "react";
import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import OperationModal from "../CustomModal/OperationModal";
import {convertDate} from "../../const/convertDate";
import SearchIcon from "@mui/icons-material/Search";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import {
  Box,
  Checkbox,
  IconButton,
  TableFooter,
  TablePagination,
  Toolbar,
  Typography,
} from "@mui/material";
import "./style.css";
import DownloadFiles from "../DowloadFiles/DownloadFiles";

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
  width: 1416,
  height: 576,
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

export default function OperationTable({
  allOperations,
  mutation,
  mutationDeleteMultiple,
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredOperations, setFilteredOperations] = useState(allOperations);

  function onSearchOperations(e) {
    setPage(0);
    setSearch(e.target.value);
  }

  useEffect(() => {
    const filteredByName = allOperations?.filter((operation) => {
      return operation.operationType.includes(search);
    });
    setFilteredOperations(filteredByName);
  }, [search, allOperations]);

  const handleChangePage = (event, newPage) => {
    const numPages = Math.ceil(filteredOperations.length / rowsPerPage);
    setPage(newPage >= numPages ? numPages - 1 : newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSelectClick = (isChecked, operationId) => {
    if (isChecked) {
      setSelected([...selected, operationId]);
    } else {
      setSelected(selected?.filter((id) => id !== operationId));
    }
  };

  const handleMultipleDelete = () => {
    mutationDeleteMultiple.mutate(selected);
    setSelected([]);
    setSearch("");
  };

  const paginatedOperations = filteredOperations?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const numSelected = selected ? selected.length : null;

  return (
    <>
      <Box className="toolbar">
        {selected.length > 0 ? (
          <Box
            display={"flex"}
            justifyContent={"end"}
            alignItems={"center"}
            mr={3.5}
          >
            <Toolbar sx={{color: chartColorsPalette.skyBlue}}>
              <Typography
                className="text-operation-animation"
                variant="h4"
                fontSize={"1.50rem"}
                mr={1}
                paddingY={1}
                paddingX={2}
                borderRadius={1}
                bgcolor={chartColorsPalette.tealBlue2}
              >
                {numSelected}
              </Typography>
              <DeleteIcon
                className="icon-delete-animation"
                onClick={handleMultipleDelete}
              />
            </Toolbar>
          </Box>
        ) : (
          <Toolbar
            sx={{
              color: chartColorsPalette.skyBlue,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              className="text-operation-animation"
              ml={6}
              mt={1}
              variant="h4"
              fontSize={"1.80rem"}
            >
              Operations Control
            </Typography>
            <Box className="class-search">
              <label htmlFor="operation-search">
                <SearchIcon
                  sx={{
                    position: "relative",
                    top: 9,
                    right: 10,
                    color:
                      filteredOperations?.length > 0
                        ? chartColorsPalette.skyBlue
                        : "red",
                  }}
                />
                <input
                  className="after-delete-animation input-search"
                  type="search"
                  id="operation-search"
                  value={search}
                  onChange={onSearchOperations}
                />
              </label>
            </Box>
          </Toolbar>
        )}
      </Box>
      <StyledTableContainer
        component={Paper}
        sx={{borderBottomLeftRadius: 32, borderBottomRightRadius: 32}}
      >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell padding="checkbox" align="center">
                {/* <Checkbox
                  color="default"
                  checked={selected.length === allOperations?.length}
                  onChange={handleSelectAllClick}
                  sx={{paddingRight: 1.8}}
                /> */}
              </StyledTableCell>
              <StyledTableCell align="center">Operation Type</StyledTableCell>
              <StyledTableCell align="center">Stock</StyledTableCell>
              <StyledTableCell align="center">Strategy</StyledTableCell>
              <StyledTableCell align="center">Volume</StyledTableCell>
              <StyledTableCell align="center">Price Open</StyledTableCell>
              <StyledTableCell align="center">Stop Loss</StyledTableCell>
              <StyledTableCell align="center">Take Profit</StyledTableCell>
              <StyledTableCell align="center">Price Close</StyledTableCell>
              <StyledTableCell align="center">Commission</StyledTableCell>
              <StyledTableCell align="center">Swap</StyledTableCell>
              <StyledTableCell align="center">Change Rate</StyledTableCell>
              <StyledTableCell align="center">Operation Date</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedOperations?.map((operation) => (
              <StyledTableRow key={operation.id}>
                <StyledTableCell padding="checkbox">
                  <Checkbox
                    disableRipple
                    color="default"
                    onChange={(e) =>
                      handleSelectClick(e.target.checked, operation.id)
                    }
                  />
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {operation.operationType}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operation.stockId}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operation.strategyId}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operation.volume}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operation.priceOpen}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operation.stopLoss}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operation.takeProfit}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operation.priceClose}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operation.commission}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operation.swap}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operation.changeRate}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {convertDate(operation.operationDate)}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton
                    disableRipple
                    aria-label="delete"
                    onClick={() => mutation.mutate(operation.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton disableRipple aria-label="delete">
                    <OperationModal operation={operation} />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                count={filteredOperations ? filteredOperations.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
        {allOperations ? (
          <DownloadFiles selected={selected} allOperations={allOperations} />
        ) : null}
      </StyledTableContainer>
    </>
  );
}
