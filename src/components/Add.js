import styled from '@emotion/styled';
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  mb: "20px",
});

const Add = () => {

  const [open, setOpen] = useState(false);
  return <>
    <Tooltip
      onClick={e => setOpen(true)}
      title="Add"
      sx={{
        position: "fixed",
        bottom: 20,
        left: { xs: "calc(50% - 25px)" },
        md: 30
      }}
    >
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Tooltip>
    <StyledModal
      open={open}
      onClose={e => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box width={400} height={280} bgcolor={"white"} p={3} borderRadius={5}>
        <Typography variant='h6' color="grey" textAlign="center">
          Create post
        </Typography>
        <UserBox>
          <Avatar
            alt="avatar3"
            src={require('../static/img/girl-b.jpg')}
            sx={{ width: 30, height: 30 }}
          />
          <Typography fontWeight={500} variant='span'>Maria Jones</Typography>
        </UserBox>
        <TextField
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on yor mind?"
          variant="standard"
          sx={{ width: "100%", mt: 2 }}
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
          <EmojiEmotions color="primary" />
          <Image color="secondary" />
          <VideoCameraBack color="success" />
          <PersonAdd color="error" />
        </Stack>
        <ButtonGroup
          fullWidth
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>Post</Button>
          <Button
            sx={{width:"100px"}}>
            <DateRange />
          </Button>
        </ButtonGroup>
      </Box>
    </StyledModal>
  </>
};

export default Add;
