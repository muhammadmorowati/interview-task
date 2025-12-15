import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SyncIcon from '@mui/icons-material/Sync';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#e2e8f0',
  }),
}));

export default function StackInform() {
  return (
    <Box sx={{ width: '95%' }}>
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
              <Item>
                    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
        </Item>
      </Stack>
    </Box>
  );
}
