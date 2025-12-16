import {
  Box,
  Chip,
  FormControlLabel,
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

const columns: GridColDef[] = [
  { field: "id", headerName: "ردیف", width: 70 },
  { field: "name", headerName: "نام کاربری", width: 160 },
  { field: "role", headerName: "نوع کاربر", width: 130 },
  {
    field: "approveStatus",
    headerName: "وضعیت تایید",
    width: 140,
    renderCell: (p) => (
      <Chip
        label={p.value}
        color={p.value === "تایید شده" ? "success" : "error"}
        size="small"
      />
    ),
  },
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
      <Paper sx={{ p: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Typography variant="h6">مدیریت کاربران</Typography>
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

      {/* جدول کاربران */}
      <DataGrid
        rows={users}
        columns={columns}
        autoHeight
        pageSizeOptions={[5]}
        onRowClick={handleRowClick}
        disableRowSelectionOnClick
      />

      {/* اطلاعات کاربر در یک سطر */}
      {selectedUser && (
        <Paper sx={{ p: 2, display: "flex", gap: 4 }}>
          <Typography>نام کاربری: {selectedUser.name}</Typography>
          <Typography>نقش: {selectedUser.role}</Typography>
          <Typography>وضعیت تایید: {selectedUser.approveStatus}</Typography>
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
