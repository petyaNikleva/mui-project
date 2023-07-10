import { Home, FeaturedPlayList, People, Settings, Person2, ModeNight } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const SideBar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
    <List>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home/>
          </ListItemIcon>
          <ListItemText primary="Homepage"></ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#pages">
          <ListItemIcon>
            <FeaturedPlayList/>
          </ListItemIcon>
          <ListItemText primary="Pages"></ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#Groups">
          <ListItemIcon>
            <People/>
          </ListItemIcon>
          <ListItemText primary="People"></ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#Settings">
          <ListItemIcon>
            <Settings/>
          </ListItemIcon>
          <ListItemText primary="Settings"></ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#Profile">
          <ListItemIcon>
            <Person2/>
          </ListItemIcon>
          <ListItemText primary="Profile"></ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <ModeNight/>
          </ListItemIcon>
          <Switch />
        </ListItemButton>
      </ListItem>
    </List>
    </Box>
  )
}

export default SideBar