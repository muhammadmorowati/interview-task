import { Box, Chip } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { users } from 'components/data';

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
  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <DataGrid
        rows={users}
        columns={columns}
        autoHeight
        pageSizeOptions={[5]}
      />
    </Box>
  );
};

export default StackInformTwo;
