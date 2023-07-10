import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import { Mail, Notifications, Pets } from '@mui/icons-material'
// import img from './../../public/images/profilePic.jpg';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled("div")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display:"flex",
  }
}));

const UserBox = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display:"none",
  }
}));

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>NavBar</Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder="search..." /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} alt="Maria Dawn" src={require('../static/img/profile-pic.jpg')} />
        </Icons>
        <UserBox>
          <Avatar sx={{ width: 30, height: 30 }} alt="Maria Dawn" src={require('../static/img/profile-pic.jpg')} />
          <Typography>Maria</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default NavBar