import { Chip, Box, Paper, Typography, Stack, Divider, IconButton, InputBase } from "@mui/material";
import { type GridColDef, type GridRowParams, DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SyncIcon from '@mui/icons-material/Sync';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { users } from "components/data";

interface PendingUser {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  status: "در انتظار" | "غیرفعال";
}

const columns: GridColDef<PendingUser>[] = [
  { field: "id", headerName: "ردیف", width: 60 },

  { field: "fullName", headerName: "نام کامل", flex: 1, width: 110 },

  { field: "email", headerName: "ایمیل", flex: 1.5, width: 140 },

  {
    field: "phone",
    headerName: "شماره تماس",
    flex: 1,
    width: 150,
    align: "center",
    headerAlign: "center",
    valueFormatter: (value) =>
      value
        ? String(value).replace(/(\d{4})(\d{3})(\d{4})/, "$1 $2 $3")
        : "-",
  },

  { field: "role", headerName: "نقش", flex: 1, minWidth: 120 },

  {
    field: "status",
    headerName: "وضعیت",
    flex: 1,
    width: 100,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Chip
        size="small"
        label={params.value}
        color={params.value === "در انتظار" ? "warning" : "default"}
      />
    ),
  },
];

const pendingRows: PendingUser[] = users.map(u => ({
  id: u.id,
  fullName: u.name, // map name -> fullName
  email: u.email,
  phone: u.phone,
  role: u.role,
  status: "در انتظار", // or map from u.approveStatus if needed
}));

const StackInformTwo = () => {
  const [selectedUser, setSelectedUser] = useState<PendingUser | null>(null);

  const handleRowClick = (params: GridRowParams) => {
  setSelectedUser(params.row as PendingUser);
  };
  
  return (
    <Box mt={4}>
      {/* Header */}
      
      <Paper
        sx={{
          p: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#07657f",
        }}
      >
        <Typography sx={{ color: "white", fontSize: 16 }}>
          حساب‌های در انتظار تعیین وضعیت
        </Typography>
        <Stack direction="row" spacing={1}>
          <PlaylistRemoveIcon sx={{ color: "white" }} />
          <FormatLineSpacingIcon sx={{ color: "white" }} />
          <PresentToAllIcon sx={{ color: "white" }} />
          <PresentToAllIcon sx={{ color: "white", transform: "rotate(180deg)" }} />
          <SyncIcon sx={{ color: "white" }} />
          <SaveAltIcon sx={{ color: "white" }} />
        </Stack>
      </Paper>
   <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '5px' }} aria-label="menu">
        <FilterAltIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="جستجو در نام خانوادگی/عنوان شرکت/،کدملی/شناسه"
        inputProps={{ 'aria-label': 'جستجو در نام خانوادگی/عنوان شرکت/،کدملی/شناسه' }}
      />
      <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height:14, m: 0.5 }} orientation="vertical" />
    </Paper>
      {/* Table */}
      <DataGrid
        rows={pendingRows}
        columns={columns}
        autoHeight
        density="comfortable"
        pageSizeOptions={[1]}
        disableRowSelectionOnClick
        onRowClick={(params) => setSelectedUser(params.row)}
        sx={{
          mt: 1,
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f1f5f9",
          },
        }}
      />

      {/* Selected User Info */}
      {selectedUser && (
        <Paper sx={{ mt: 2, p: 2, borderRadius: 3, bgcolor: "#f8fafc" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
              gap: 2,
              fontSize: 14,
            }}
          >
            <Box>
              <div>{selectedUser.fullName}</div>
            </Box>

            <Box>
              <div>{selectedUser.role}</div>
            </Box>

            <Box>
              <div>{selectedUser.status}</div>
            </Box>

            <Box>
              <div>{selectedUser.id}</div>
            </Box>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default StackInformTwo