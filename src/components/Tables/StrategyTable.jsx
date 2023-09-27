import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {convertDate} from "../../const/convertDate";
import {IconButton, TableFooter, TablePagination} from "@mui/material";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {IM_INVESTING_KEY} from "../../const/IM_investingKey";
import DeleteIcon from "@mui/icons-material/Delete";
import {useState} from "react";
import StrategyModal from "../CustomModal/StrategyModal";

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

const handleDeleteStrategy = async (id) => {
  const res = await axios.delete(
    `http://localhost:3000/strategy/${id}`,
    config
  );
  return res.data;
};

export default function StrategyTable({allStrategies}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["deleteStrategy"],
    mutationFn: handleDeleteStrategy,

    onError: (err) => {
      console.log(err);
    },

    onSuccess: () => {
      queryClient.invalidateQueries("allOperations");
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

  const paginatedOperations = allStrategies?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <TableContainer component={Paper}>
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
              <StyledTableCell align="left">{strategy.budget}</StyledTableCell>

              <StyledTableCell align="left">
                {convertDate(strategy.createDate)}
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton
                  aria-label="delete"
                  onClick={() => mutation.mutate(strategy.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton aria-label="delete">
                  <StrategyModal />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10]}
              count={allStrategies ? allStrategies.length : 0}
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
