import React, { useState, useEffect } from "react";
import moment from "moment";
import { DataGrid } from "@material-ui/data-grid";
import { DUMMY_TRANSACTION as data } from "../../services/TransactionData";
import styles from "./TransactionHistroy.module.scss";

const columns = [
    { field: "amount", headerName: "Amount", width: 150, type: "number" },
    {
        field: "date",
        headerName: "Date",
        width: 150,
        type: "date",
        format: (value) => moment(value).format("MM/DD/YYYY")
    },
    {
        field: "category",
        headerName: "Category",
        width: 150,
        type: "stringsingleSelect",
        values: [
            "Food",
            "Travel",
            "Shopping",
            "Utility Bill",
            "Recharge",
            "Income"
        ]
    },
    {
        field: "payed",
        headerName: "Status",
        width: 150,
        type: "boolean",
        format: (value) => (value ? "Success" : "Failed")
    },
    { field: "stmt", headerName: "Remark", width: 150 }
];

export default function TranactionRecord({ width = 615, height = 330 }) {
    return (
        <div style={{ height: 400, width: "50%" }}>
            <DataGrid rows={data} columns={columns} />
        </div>
    );
}
