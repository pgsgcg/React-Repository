import React from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/ArrowDownward";
import movies from "./movies";
import "./reactDataTablesStyles.css";

const columns = [
  {
    id: 1,
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
    reorder: true,
  },
  {
    id: 2,
    name: "Director",
    selector: (row) => row.director,
    sortable: true,
    reorder: true,
  },
  {
    id: 3,
    name: "Runtime (m)",
    selector: (row) => row.runtime,
    sortable: true,
    right: true,
    reorder: true,
  },
];

function ReactDataTable() {
  return (
    <div className="dataTablesContainer">
      <DataTable
        title="Movies"
        columns={columns}
        data={movies}
        defaultSortFieldId={1}
        sortIcon={<SortIcon />}
        pagination
        selectableRows
      />
    </div>
  );
}

export default ReactDataTable;