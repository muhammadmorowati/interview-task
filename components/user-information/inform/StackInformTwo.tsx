import { Box, Chip, Paper, Typography } from "@mui/material";
import { DataGrid, type GridColDef, type GridRowParams } from "@mui/x-data-grid";
import { useState } from "react";
import { users } from "components/data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ردیف", width: 70 },
  { field: "name", headerName: "نام کاربری", width: 160 },
  { field: "role", headerName: "نوع کاربر", width: 130 },
  {
    field: "approveStatus",
    headerName: "وضعیت تایید",
    width: 180,
    renderCell: () => (
      <Chip label="در انتظار تایید نهایی" color="warning" size="small" />
    ),
  },
];

const StackInformTwo = () => {
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  const handleRowClick = (params: GridRowParams) => {
    setSelectedUser(params.row);
  };

  return (
    <Box mt={4}>
      <DataGrid
        rows={users}
        columns={columns}
        autoHeight
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        onRowClick={handleRowClick}
      />

      {selectedUser && (
        <Paper sx={{ mt: 2, p: 2, borderRadius: 3, bgcolor: "#f8fafc" }}>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
      xs: "repeat(2, 1fr)",
      md: "repeat(6, 1fr)",
    },
              gap: 2,
              fontSize: 14,
            }}
          >
            <Box>
              <strong>نام کاربری</strong>
              <div>{selectedUser.name}</div>
            </Box>

            <Box>
              <strong>نوع کاربر</strong>
              <div>{selectedUser.role}</div>
            </Box>

            <Box>
              <strong>وضعیت تایید</strong>
              <div>در انتظار تایید نهایی</div>
            </Box>

            <Box>
              <strong>شناسه</strong>
              <div>{selectedUser.id}</div>
            </Box>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default StackInformTwo;
