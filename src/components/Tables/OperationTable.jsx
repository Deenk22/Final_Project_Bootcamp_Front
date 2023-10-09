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
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import {
  Box,
  Checkbox,
  IconButton,
  Popover,
  TableFooter,
  TablePagination,
  Toolbar,
  Typography,
} from "@mui/material";
import "./style.css";
import DownloadFiles from "../DowloadFiles/DownloadFiles";

const chartColorsPalette = {
  tealBlue2: "rgba(75, 192, 192, 0.6)",
  lightPink: "rgba(255, 99, 132, 0.9)",
  lightYellow: "rgba(255, 205, 86, 0.6)",
  tealBlueOpacity: "rgba(75, 192, 192, 0.2)",
  lightPinkOpacity: "rgba(255, 99, 132, 0.2)",
  lightYellowOpacity: "rgba(255, 205, 86, 0.2)",
  orange: "rgba(255, 159, 64, 0.7)",
  shadowYellow: "rgba(255, 205, 86, 0.4)",
  shadowtealBlue2: "rgba(75, 192, 192, 0.4)",
  blue: "rgba(22, 41, 56)",
  blueOpacity: "rgba(22, 41, 56, 0.1)",
  skyBlue: "rgba(208, 228, 233)",
  green: "rgba(73, 184, 123, 1)",
};

const StyledTableContainer = styled(TableContainer)(() => ({
  width: 1296,
  height: 608,
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
  const [hoverOperation, setHoverOperation] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  console.log(anchorEl);

  function onSearchOperations(e) {
    setPage(0);
    setSearch(e.target.value);
  }

  useEffect(() => {
    const filteredByName = allOperations?.filter((operation) => {
      const strategyNameSearch = operation.strategyName.includes(search);
      const brokerNameSearch = operation.brokerName.includes(search);
      const stockNameSearch = operation.stockName.includes(search);
      return strategyNameSearch || brokerNameSearch || stockNameSearch;
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

  const handlePopoverOpen = (e, operation) => {
    const ProfitOrLoss =
      operation.volume * (operation.priceClose - operation.priceOpen) -
      operation.commission -
      operation.swap;
    const resultsFixed = ProfitOrLoss.toFixed(2);
    setAnchorEl(e.currentTarget);
    setHoverOperation(parseFloat(resultsFixed));
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setHoverOperation(null);
  };

  const open = Boolean(anchorEl);

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
                bgcolor={chartColorsPalette.lightPink}
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
              <StyledTableCell align="center">Broker</StyledTableCell>
              <StyledTableCell align="center">Volume</StyledTableCell>
              <StyledTableCell align="center">Price Open</StyledTableCell>
              <StyledTableCell align="center">Stop Loss</StyledTableCell>
              <StyledTableCell align="center">Take Profit</StyledTableCell>
              <StyledTableCell align="center">Price Close</StyledTableCell>
              <StyledTableCell align="center">Commission</StyledTableCell>
              <StyledTableCell align="center">Swap</StyledTableCell>
              <StyledTableCell align="center">Change Rate</StyledTableCell>
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
                <StyledTableCell
                  onMouseEnter={(e) => handlePopoverOpen(e, operation)}
                  onMouseLeave={handlePopoverClose}
                  component="th"
                  scope="row"
                  align="center"
                >
                  {operation.operationType}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operation.stockName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operation.strategyName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {operation.brokerName}
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
        <Box display={"flex"} justifyContent={"center"}>
          {allOperations ? (
            <DownloadFiles selected={selected} allOperations={allOperations} />
          ) : null}
        </Box>
        {/* Se que podria llevarmo como componente pero no hay tiempo! jejej */}
        <Popover
          id="mouse-over-popover"
          open={open}
          anchorEl={anchorEl}
          sx={{
            pointerEvents: "none",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          elevation={24}
        >
          {hoverOperation && (
            <Box width={96} bgcolor={chartColorsPalette.blue}>
              <Typography
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                variant="body2"
                color={
                  hoverOperation < 0
                    ? chartColorsPalette.lightPink
                    : chartColorsPalette.skyBlue
                }
              >
                {hoverOperation}
                {hoverOperation > 0 ? (
                  <ArrowDropUpIcon
                    fontSize="large"
                    sx={{
                      color: chartColorsPalette.green,
                    }}
                  />
                ) : (
                  <ArrowDropDownIcon
                    fontSize="large"
                    sx={{
                      color: chartColorsPalette.lightPink,
                    }}
                  />
                )}
              </Typography>
            </Box>
          )}
        </Popover>
      </StyledTableContainer>
    </>
  );
}
