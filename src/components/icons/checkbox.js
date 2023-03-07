import { Checkbox } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function CheckboxIcon() {
  return (
    <div>
      <Checkbox
        {...label}
        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
      />
    </div>
  );
}

export default CheckboxIcon;