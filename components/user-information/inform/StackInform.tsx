import { Box, Chip, FormControlLabel, Paper, Radio, RadioGroup, Stack, styled } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { users } from "components/data";
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import SyncIcon from '@mui/icons-material/Sync';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const columns: GridColDef[] = [
  { field: "id", headerName: "ردیف", width: 70 },
  { field: "name", headerName: "نام کاربری", width: 160 },
  { field: "type", headerName: "مشخصات کاربر", width: 130 },
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
  {
    field: "status",
    headerName: "وضعیت",
    width: 100,
    renderCell: () => <Chip label="فعال" color="success" size="small" />,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#e2e8f0',
  }),
    display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const StackInform = () => {
  return (
    <Box sx={{ width: "100%", mt: 2 }}>
          <Stack spacing={2}>
               <Item className='flex'>
                  <span>
                  نمایش انتخابی:
                  </span>
                        <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="all" control={<Radio />} label="همه" />
        <FormControlLabel value="Awaiting confirmation" control={<Radio />} label="در انتظار تایید" />
        <FormControlLabel value="confirmed" control={<Radio />} label="تایید شده" />
        <FormControlLabel value="rejected" control={<Radio />} label="رد شده" />

      </RadioGroup>
               </Item>
              <Item>
                  <span>
                      اطلاعات کاربران
                  </span>
                  <span>
                      <PlaylistRemoveIcon />
                      <FormatLineSpacingIcon />
                      <PresentToAllIcon />
                      <PresentToAllIcon className='-rotate-180' />
                      <SyncIcon />
                      <SaveAltIcon />   
                      
                      
                  </span>
        </Item>

        <DataGrid
          rows={users}
          columns={columns}
          pageSizeOptions={[5]}
          autoHeight
          disableRowSelectionOnClick
        />
      </Stack>
    </Box>
  );
};

export default StackInform;
