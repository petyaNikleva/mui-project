import SideBar from './components/SideBar'
import Feed from './components/Feed'
import RightBar from './components/RightBar'
import NavBar from './components/NavBar';

import { Box, Stack } from '@mui/material';
import Add from './components/Add';

function App() {
  return (
    <Box>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="center">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <Add/>
    </Box>
  );
}

export default App;
