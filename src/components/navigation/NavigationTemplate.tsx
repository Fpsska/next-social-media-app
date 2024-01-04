import { ListItem } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// /. IMPORTS

export const NavigationTemplate = ({
  label,
  icon,
  index,
  selectedIndex,
  setSelectedIndex
}: Props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        selected={index === selectedIndex}
        onClick={() => setSelectedIndex(index)}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};

type Props = {
  label: string;
  icon: React.JSX.Element;
  isActive?: boolean;
  index: number;
  selectedIndex: number;
  setSelectedIndex: (arg: number) => void;
};
