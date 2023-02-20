import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import Delete from "../../../assets/images/delete.svg";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 250 },
  { field: "lastName", headerName: "Last name", width: 230 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 130,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 300,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    align: "right",
    width: 150,
    disableClickEventBubbling: true,
    renderCell: (params) => {
      return (
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ cursor: "pointer" }}
        >
          <img
            src={Delete}
            alt="Delete"
            height="25px"
            width="25px"
            onClick={() => console.log("ROW ID", params.row.id)}
          />
          {/* <Delete index={params.row.id} /> */}
        </div>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        pageSize={5}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
