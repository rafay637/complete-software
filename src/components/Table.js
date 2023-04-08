import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function MyTable(props) {
  const { rows, columns } = props;
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
