import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {IconButton, TableFooter, TablePagination} from "@mui/material";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import DeleteIcon from "@mui/icons-material/Delete";
import {useState} from "react";

import StockModal from "../CustomModal/StockModal";
import {
  doneNotification,
  errorNotification,
} from "../../notifications/notification";

const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const token = JSON.parse(localStorage.getItem(IM_INVESTING_KEY));

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const handleDeleteOperation = async (id) => {
  const res = await axios.delete(`http://localhost:3000/stock/${id}`, config);
  return res.data;
};

export default function StockTable({allStocks}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["deleteStock"],
    mutationFn: handleDeleteOperation,

    onError: (err) => {
      console.log(err);
    },

    onSettled: (data, error) => {
      if (error) {
        const {message} = error.response.data;
        errorNotification(message);
      } else {
        const {message} = data;
        doneNotification(message);
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries("allStocks");
    },
  });

  const handleChangePage = (event, newPage) => {
    console.log(event);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedOperations = allStocks?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table" size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Country</StyledTableCell>
            <StyledTableCell align="left">Ticker</StyledTableCell>
            <StyledTableCell align="left">Sector</StyledTableCell>
            <StyledTableCell align="left">Industry</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedOperations?.map((stock) => (
            <StyledTableRow key={stock.id}>
              <StyledTableCell component="th" scope="row">
                {stock.name}
              </StyledTableCell>
              <StyledTableCell align="left">{stock.country}</StyledTableCell>
              <StyledTableCell align="left">{stock.ticker}</StyledTableCell>
              <StyledTableCell align="left">{stock.sector}</StyledTableCell>
              <StyledTableCell align="left">{stock.industry}</StyledTableCell>
              <StyledTableCell align="center">
                <IconButton
                  aria-label="delete"
                  onClick={() => mutation.mutate(stock.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton aria-label="delete">
                  <StockModal stock={stock} />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10]}
              count={allStocks ? allStocks.length : 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
