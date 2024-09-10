import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Container, Box, Button } from '@mui/material';

function App() {
  const [layout, setLayout] = useState('horizontal');

  const toggleLayout = () => {
    setLayout((prevLayout) => (prevLayout === 'horizontal' ? 'vertical' : 'horizontal'));
  };

  return (
    <Container>
      <Box sx={{ margin: 2 }}>
        <Button variant="contained" onClick={toggleLayout}>
          Toggle Navbar Layout
        </Button>
      </Box>
      <Navbar layout={layout} />
      <Box sx={{ marginTop: 2 }}>
        <h1>Welcome to My Website</h1>
        <p>This is a demo of a flexible navbar using Material-UI.</p>
      </Box>
    </Container>
  );
}

export default App;
