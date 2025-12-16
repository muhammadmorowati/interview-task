import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Box,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

interface UserFormValues {
  name: string;
  role: string;
  email: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  initialData?: Partial<UserFormValues>;
}

const validationSchema = Yup.object({
  name: Yup.string().required("نام کاربری الزامی است"),
  role: Yup.string().required("نوع کاربر الزامی است"),
  email: Yup.string()
    .email("ایمیل معتبر نیست")
    .required("ایمیل الزامی است"),
});

const EditUserModal = ({ open, onClose, initialData }: Props) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>ویرایش اطلاعات کاربر</DialogTitle>

      <Formik
        enableReinitialize
        initialValues={{
          name: initialData?.name || "",
          role: initialData?.role || "",
          email: initialData?.email || "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("EDIT USER:", values);
          onClose();
        }}
      >
        {({ values, handleChange, touched, errors }) => (
          <Form>
            <DialogContent>
              <Box sx={{ display: "grid", gap: 2 }}>
          <TextField
  name="name"
  label="نام کاربری"
  value={values.name}
  onChange={handleChange}
  error={Boolean(touched.name && errors.name)}
  helperText={touched.name ? errors.name : ""}
  fullWidth
/>

<TextField
  select
  name="role"
  label="نوع کاربر"
  value={values.role}
  onChange={handleChange}
  error={Boolean(touched.role && errors.role)}
  helperText={touched.role ? errors.role : ""}
  fullWidth
>
  <MenuItem value="Admin">Admin</MenuItem>
  <MenuItem value="Supervisor">Supervisor</MenuItem>
  <MenuItem value="SSO User">SSO User</MenuItem>
</TextField>

<TextField
  name="email"
  label="ایمیل"
  value={values.email}
  onChange={handleChange}
  error={Boolean(touched.email && errors.email)}
  helperText={touched.email ? errors.email : ""}
  fullWidth
/>
              </Box>
            </DialogContent>

            <DialogActions>
              <Button onClick={onClose}>انصراف</Button>
              <Button type="submit" variant="contained">
                ذخیره تغییرات
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default EditUserModal;
