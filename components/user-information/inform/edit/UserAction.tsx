import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  onAdd: () => void;
  onEdit: () => void;
  disabledEdit: boolean;
}

const UserActions = ({ onAdd, onEdit, disabledEdit }: Props) => {
  return (
    <Box sx={{ display: "flex", gap: 1, py: 1 }}>
      <Button
        variant="contained"
        size="small"
        startIcon={<AddIcon />}
        onClick={onAdd}
      >
        ثبت نام کاربر
      </Button>

      <Button
        variant="outlined"
        size="small"
        startIcon={<EditIcon />}
        disabled={disabledEdit}
        onClick={onEdit}
      >
        ویرایش
      </Button>

      <Button
        variant="outlined"
        size="small"
        color="error"
        startIcon={<DeleteIcon />}
        disabled
      >
        حذف
      </Button>
    </Box>
  );
};

export default UserActions;
