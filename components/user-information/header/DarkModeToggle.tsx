import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const DarkModeSwitch = styled(Switch)(({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      transform: "translateX(22px)",
    },
  },
  "& .MuiSwitch-thumb": {
    width: 32,
    height: 32,
  },
}));

type Props = {
  checked: boolean;
  onChange: () => void;
};

const DarkModeToggle = ({ checked, onChange }: Props) => {
  return <DarkModeSwitch checked={checked} onChange={onChange} />;
};

export default DarkModeToggle;
