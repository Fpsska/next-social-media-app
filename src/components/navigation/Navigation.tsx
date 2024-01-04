import { useState } from 'react';

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import List from '@mui/material/List';

import { NavigationTemplate } from '.';

// /. IMPORTS

export const Navigation = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  return (
    <nav aria-label="navigation">
      <List>
        <NavigationTemplate
          icon={<HomeOutlinedIcon style={{ color: '#fbfbfb' }} />}
          label="Home"
          index={1}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <NavigationTemplate
          icon={<ManageSearchOutlinedIcon style={{ color: '#fbfbfb' }} />}
          label="States"
          index={2}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <NavigationTemplate
          icon={<GridViewOutlinedIcon style={{ color: '#fbfbfb' }} />}
          label="Explore"
          index={3}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <NavigationTemplate
          icon={<MoveToInboxOutlinedIcon style={{ color: '#fbfbfb' }} />}
          label="Inbox"
          index={4}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <NavigationTemplate
          icon={<BookmarkBorderOutlinedIcon style={{ color: '#fbfbfb' }} />}
          label="Favorite"
          index={5}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <NavigationTemplate
          icon={<SettingsOutlinedIcon style={{ color: '#fbfbfb' }} />}
          label="Settings"
          index={6}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </List>
    </nav>
  );
};
