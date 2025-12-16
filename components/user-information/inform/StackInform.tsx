import {
  Box,
  Chip,
  Divider,
  FormControlLabel,
  IconButton,
  InputBase,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid, type GridColDef, type GridRowParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { users } from "components/data";
import EditUserModal from "./edit/CreateUserModal";
import UserActions from "./edit/UserAction";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SyncIcon from '@mui/icons-material/Sync';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const columns: GridColDef[] = [
  { field: "id", headerName: "ردیف", width: 60 },

  { field: "name", headerName: "نام کاربری", flex: 1, minWidth: 140 },

  { field: "type", headerName: "مشخصات کاربر", flex: 1, minWidth: 120 },

  { field: "role", headerName: "نوع کاربر", flex: 1, minWidth: 110 },

  { field: "identity", headerName: "هویت", flex: 1, minWidth: 90 },

  {
    field: "nationalId",
    headerName: "کد ملی",
    flex: 1,
    minWidth: 150,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "authType",
    headerName: "نحوه ثبت نام",
    flex: 1,
    minWidth: 130,
  },

  {
    field: "email",
    headerName: "ایمیل",
    flex: 1.5,
    minWidth: 200,
  },

  {
    field: "phone",
    headerName: "تلفن همراه",
    flex: 1,
    minWidth: 150,
    align: "center",
    headerAlign: "center",
valueFormatter: (value: string | number | null) =>
  value
    ? String(value).replace(/(\d{4})(\d{3})(\d{4})/, "$1 $2 $3")
    : "-"
  },

  {
    field: "approveStatus",
    headerName: "وضعیت تایید",
    flex: 1,
    minWidth: 130,
    align: "center",
    headerAlign: "center",
    renderCell: (p) => (
      <Chip
        label={p.value}
        color={p.value === "تایید شده" ? "success" : "error"}
        size="small"
      />
    ),
  },
];

const userInfoMap = [
  { label: "نام کاربری", key: "name" },
  { label: "نوع کاربر", key: "type" },
  { label: "نقش", key: "role" },
  { label: "هویت", key: "identity" },
  { label: "کد ملی", key: "nationalId" },
  { label: "نحوه ثبت نام", key: "authType" },
  { label: "ایمیل", key: "email" },
  { label: "موبایل", key: "phone" },
];

const StackInform = () => {
  const [filter, setFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [openEdit, setOpenEdit] = useState(false);

  useEffect(() => {
    console.log("FILTER:", filter);
  }, [filter]);

  const handleRowClick = (params: GridRowParams) => {
    setSelectedUser(params.row);
  };

  return (
    <Stack spacing={2}>
      {/* هدر با رادیوباتن‌ها کنار مدیریت کاربران */}
      <div className="bg-slate-200 p-2 rounded-xl">
          <Paper sx={{ p: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Typography variant="h6" fontSize={16}>نمایش انتخابی</Typography>
        <RadioGroup
          row
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <FormControlLabel value="all" control={<Radio />} label="همه" />
          <FormControlLabel value="pending" control={<Radio />} label="در انتظار" />
          <FormControlLabel value="approved" control={<Radio />} label="تایید شده" />
          <FormControlLabel value="rejected" control={<Radio />} label="رد شده" />
        </RadioGroup>
      </Paper>
    </div>
<Paper
  sx={{
    p: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#07657f"
  }}
>
  <Typography sx={{ color: "white" }}>
    اطلاعات کاربران
  </Typography>

  <Stack direction="row" spacing={1} alignItems="center">
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
      {/* جدول کاربران */}
    <DataGrid
  rows={users}
  columns={columns}
  autoHeight
  density="comfortable"
  pageSizeOptions={[5, 10]}
  onRowClick={handleRowClick}
  disableRowSelectionOnClick
  sx={{
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "#f1f5f9",
      fontWeight: 600,
    },
  }}
/>

      {/* اطلاعات کاربر در یک سطر */}
    {selectedUser && (
  <Paper sx={{ p: 2, display: "flex", flexWrap: "wrap", gap: 3 }}>
    {userInfoMap.map((item) => (
      <Typography key={item.key}>
       {selectedUser[item.key]}
      </Typography>
    ))}
  </Paper>
)}

      {/* اکشن‌ها */}
      <UserActions
        onAdd={() => console.log("ADD USER")}
        onEdit={() => setOpenEdit(true)}
        disabledEdit={!selectedUser}
      />

      {/* مودال ویرایش */}
      <EditUserModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        initialData={selectedUser}
      />
    </Stack>
  );
};

export default StackInform;
