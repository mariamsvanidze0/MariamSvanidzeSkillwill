import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ layout }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const navItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <Box>
      {layout === 'horizontal' && (
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Website
            </Typography>
            {navItems.map((item, index) => (
              <Button key={index} color="inherit">
                {item}
              </Button>
            ))}
          </Toolbar>
        </AppBar>
      )}

      {layout === 'vertical' && (
        <Drawer variant="persistent" anchor="left" open>
          <List>
            {navItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          {navItems.map((item, index) => (
            <ListItem button key={index} onClick={toggleDrawer}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
