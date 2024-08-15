import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "megan", width: 130 },

  { field: "Ultrices", headerName: "Ultrices", width: 140 },
  {
    field: "Ornare",
    headerName: "Ornare",
    type: "number",
    width: 90,
  },
  { field: "Erat", headerName: "Erat", width: 140 },

  {
    field: "Nisi",
    headerName: "Nisi",
    width: 130,
  },
  { field: "Elit", headerName: "Elit", width: 100 },
  { field: "Senectus", headerName: "Senectus", width: 140 },
  { field: "Fells", headerName: "Fells", width: 140 },
  { field: "Cursus", headerName: "Cursus", width: 140 },
  { field: "Grav", headerName: "Grav", width: 140 },
];

const rows = [
  {
    id: "23/08/30",
    Ultrices: "consectetur",
    megan: "Jon",
    Ornare: "Vestibulum",
    Erat: "Egestas",
    Nisi: "154.181",
    Elit: "N/A",
    Senectus: "pertium",
    Fells: "turkey",
    Cursus: "Nulla",
    Grav: "N/A",
  },
  {
    id: "22/08/30",
    Ultrices: "consectetur",
    megan: "Cersei",
    Ornare: "Vestibulum",
    Erat: "Egestas",
    Nisi: "154.181",
    Elit: "N/A",
    Senectus: "pertium",
    Fells: "turkey",
    Cursus: "Nulla",
    Grav: "N/A",
  },
  {
    id: "21/08/30",
    Ultrices: "consectetur",
    megan: "Jaime",
    Ornare: "Vestibulum",
    Erat: "Egestas",
    Nisi: "154.181",
    Elit: "N/A",
    Senectus: "pertium",
    Fells: "turkey",
    Cursus: "Nulla",
    Grav: "N/A",
  },
  {
    id: "10/07/30",
    Ultrices: "consectetur",
    megan: "Arya",
    Ornare: "Vestibulum",
    Erat: "Egestas",
    Nisi: "154.181",
    Elit: "N/A",
    Senectus: "pertium",
    Fells: "turkey",
    Cursus: "Nulla",
    Grav: "N/A",
  },
  {
    id: "23/06/30",
    Ultrices: "consectetur",
    megan: "Daenerys",
    Ornare: "Vestibulum",
    Erat: "Egestas",
    Nisi: "154.181",
    Elit: "N/A",
    Senectus: "pertium",
    Fells: "turkey",
    Cursus: "Nulla",
    Grav: "N/A",
  },
  {
    id: "23/05/30",
    Ultrices: "consectetur",
    megan: null,
    Ornare: "Vestibulum",
    Erat: "Egestas",
    Nisi: "154.181",
    Elit: "N/A",
    Senectus: "pertium",
    Fells: "turkey",
    Cursus: "Nulla",
    Grav: "N/A",
  },
  {
    id: "23/04/30",
    Ultrices: "consectetur",
    megan: "Ferrara",
    Ornare: "Vestibulum",
    Erat: "Egestas",
    Nisi: "154.181",
    Elit: "N/A",
    Senectus: "pertium",
    Fells: "turkey",
    Cursus: "Nulla",
    Grav: "N/A",
  },
  {
    id: "23/03/30",
    Ultrices: "consectetur",
    megan: "Rossini",
    Ornare: "Vestibulum",
    Erat: "Egestas",
    Nisi: "154.181",
    Elit: "N/A",
    Senectus: "pertium",
    Fells: "turkey",
    Cursus: "Nulla",
    Grav: "N/A",
  },
  {
    id: "23/01/30",
    Ultrices: "consectetur",
    megan: "Harvey",
    Ornare: "Vestibulum",
    Erat: "Egestas",
    Nisi: "154.181",
    Elit: "N/A",
    Senectus: "pertium",
    Fells: "turkey",
    Cursus: "Nulla",
    Grav: "N/A",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7 },
          },
        }}
        pageSizeOptions={[7, 10]}
      />
    </div>
  );
}
