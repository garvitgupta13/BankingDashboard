import React, { useState, useEffect } from "react";
import _ from "lodash";
import moment from "moment";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Button from "@mui/material/Button";
import { DUMMY_TRANSACTION as transactionRecords } from "../../services/TransactionData";

import styles from "./TransactionHistroy.module.scss";

const columns = [
    {
        id: "amount",
        label: "Amount",
        minWidth: 50
    },
    {
        id: "date",
        label: "Date",
        minWidth: 75,
        format: (value) => moment(value).format("MM/DD/YYYY")
    },
    { id: "category", label: "Category", minWidth: 50 },
    {
        id: "payed",
        label: "Status",
        minWidth: 50,
        format: (value) => (value ? "Success" : "Failed")
    },
    { id: "stmt", label: "Remark", minWidth: 100 }
];

const categoryOptions = [
    { value: undefined, label: "No filter" },
    { value: "Food", label: "Food" },
    { value: "Travel", label: "Travel" },
    { value: "Shopping", label: "Shopping" },
    { value: "Utility Bill", label: "Utility Bill" },
    { value: "Recharge", label: "Recharge" },
    { value: "Income", label: "Income" }
];
//width:615, height:330
export function TranactionHistroy({ width = null, height = null }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(20);
    const [sortCol, setSortCol] = useState("date");
    const [sortDir, setSortDir] = useState("desc");
    const [transactions, setTransactions] = useState(transactionRecords);
    const [amountLessThanFilter, setAmountLessThanFilter] = useState(undefined);
    const [amountMoreThanFilter, setAmountMoreThanFilter] = useState(undefined);
    const [statusFilter, setStatusFilter] = useState(undefined);
    const [startDateFilter, setStartDateFilter] = useState(undefined);
    const [endDateFilter, setEndDateFilter] = useState(undefined);
    const [categoryFilter, setCategoryFilter] = useState(undefined);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSort = (col) => {
        setSortCol(col);
        setSortDir(sortDir === "desc" ? "asc" : "desc");
    };

    useEffect(() => {
        setTransactions(_.orderBy(transactions, [sortCol], [sortDir]));
    }, [sortCol, sortDir]);

    const handleFilter = () => {
        let filteredTransactions = transactionRecords;
        if (amountLessThanFilter) {
            filteredTransactions = _.filter(
                filteredTransactions,
                (transaction) => {
                    if (transaction.amount < amountLessThanFilter)
                        return transaction;
                }
            );
        }
        if (amountMoreThanFilter) {
            filteredTransactions = _.filter(
                filteredTransactions,
                (transaction) => {
                    if (transaction.amount > amountMoreThanFilter)
                        return transaction;
                }
            );
        }
        if (statusFilter) {
            filteredTransactions = _.filter(
                filteredTransactions,
                (transaction) => {
                    if (transaction.payed === statusFilter) return transaction;
                }
            );
        }
        if (categoryFilter) {
            filteredTransactions = _.filter(
                filteredTransactions,
                (transaction) => {
                    if (
                        transaction.category.toLowerCase() ===
                        categoryFilter.toLowerCase()
                    )
                        return transaction;
                }
            );
        }
        if (startDateFilter) {
            filteredTransactions = _.filter(
                filteredTransactions,
                (transaction) => {
                    if (moment(transaction.date).isSameOrAfter(startDateFilter))
                        return transaction;
                }
            );
        }
        if (endDateFilter) {
            filteredTransactions = _.filter(
                filteredTransactions,
                (transaction) => {
                    if (moment(transaction.date).isSameOrBefore(endDateFilter))
                        return transaction;
                }
            );
        }
        setTransactions(filteredTransactions);
    };

    const handleReset = () => {
        setAmountLessThanFilter(undefined);
        setAmountMoreThanFilter(undefined);
        setStatusFilter(undefined);
        setCategoryFilter(undefined);
        setStartDateFilter(undefined);
        setEndDateFilter(undefined);
        setTransactions(transactionRecords);
    };

    return (
        <>
            <div>
                <TextField
                    label="Amount less than"
                    type="number"
                    InputLabelProps={{
                        shrink: true
                    }}
                    value={amountLessThanFilter}
                    variant="filled"
                    onChange={(e) => setAmountLessThanFilter(e.target.value)}
                />
                <TextField
                    label="Amount More than"
                    type="number"
                    value={amountMoreThanFilter}
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="filled"
                    onChange={(e) => setAmountMoreThanFilter(e.target.value)}
                />

                <TextField
                    id="date"
                    label="From"
                    type="date"
                    variant="filled"
                    value={startDateFilter}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true
                    }}
                    onChange={(e) => setStartDateFilter(e.target.value)}
                />
                <TextField
                    id="date"
                    label="To"
                    type="date"
                    variant="filled"
                    value={endDateFilter}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true
                    }}
                    onChange={(e) => setEndDateFilter(e.target.value)}
                />

                <TextField
                    id="filled-select"
                    select
                    label="Status"
                    value={categoryFilter}
                    onChange={(e) => {
                        setStatusFilter(e.target.value);
                    }}
                    variant="filled"
                    style={{ width: "200px" }}
                >
                    <MenuItem value={true}>Successful</MenuItem>
                    <MenuItem value={false}>Failed</MenuItem>
                </TextField>
                <TextField
                    id="filled-select"
                    select
                    label="Category"
                    value={categoryFilter}
                    onChange={(e) => {
                        setCategoryFilter(e.target.value);
                    }}
                    variant="filled"
                    style={{ width: "200px" }}
                >
                    {categoryOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <Button variant="outlined" onClick={handleReset}>
                    Reset
                </Button>
                <Button
                    variant="outlined"
                    onClick={handleFilter}
                    startIcon={<FilterAltIcon />}
                >
                    Filter
                </Button>
            </div>
            <Paper sx={{ width: width ? `${width}px` : "100%" }}>
                <TableContainer
                    sx={{ height: height ? `${height}px` : "100%" }}
                >
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        onClick={() => {
                                            handleSort(column.id);
                                        }}
                                        style={{
                                            minWidth: column.minWidth,
                                            color: "white",
                                            backgroundColor: "#3f51b5",
                                            cursor: "pointer"
                                        }}
                                    >
                                        {column.label}
                                        {sortCol === column.id &&
                                            (sortDir === "desc" ? (
                                                <ArrowDropDownIcon />
                                            ) : (
                                                <ArrowDropUpIcon />
                                            ))}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((transaction) => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={transaction.id}
                                        >
                                            {columns.map((column) => {
                                                const value =
                                                    transaction[column.id];
                                                if (column.id === "amount") {
                                                    const transactionType =
                                                        transaction["type"] ===
                                                        "credit"
                                                            ? true
                                                            : false;
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                            style={{
                                                                color: transactionType
                                                                    ? "green"
                                                                    : "red"
                                                            }}
                                                        >
                                                            {`${
                                                                transactionType
                                                                    ? "+ ₹"
                                                                    : "- ₹"
                                                            } ${value}`}
                                                        </TableCell>
                                                    );
                                                } else {
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                        >
                                                            {column.format
                                                                ? column.format(
                                                                      value
                                                                  )
                                                                : value}
                                                        </TableCell>
                                                    );
                                                }
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[
                        5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
                    ]}
                    component="div"
                    count={transactionRecords.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}
