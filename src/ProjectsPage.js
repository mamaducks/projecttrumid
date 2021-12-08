import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Types() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      
      
      <Typography variant="h3" gutterBottom component="div">
        Project Title
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        2014 - 2019
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        summary of project
      </Typography>
      
      <Typography variant="h5" gutterBottom component="div">
        Project Managers
      </Typography>
      <Typography variant="body1" gutterBottom>
      terry
      <Link href="#" underline="hover">
      tammy
      </Link>
      
      tommy
      tony
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        Project Architects
      </Typography>
      <Typography variant="body1" gutterBottom>
      maureen
      max
      mary
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
      ui/ux designers
      </Typography>
      <Typography variant="body1" gutterBottom>
      harry
      henry
      hunny
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
      web developers
      </Typography>
      <Typography variant="body1" gutterBottom>
      ryan
      randolph
      roger
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
      qa and testing specialists
      </Typography>
      <Typography variant="body1" gutterBottom>
      nancy
      nicole
      </Typography>
     
    </Box>
  );
}