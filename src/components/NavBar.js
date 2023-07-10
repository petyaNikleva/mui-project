import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import { Mail, Notifications, Pets } from '@mui/icons-material'
import img from './../static/img/profile-pic.jpg'

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
  display: "flex",
  alignItems: "center",
  gap: "20px"
}))

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
          <Avatar sx={{ width: 30, height: 30 }} alt="Maria Dawn" src='https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?resize=300%2C300&ssl=1' />
        </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default NavBar