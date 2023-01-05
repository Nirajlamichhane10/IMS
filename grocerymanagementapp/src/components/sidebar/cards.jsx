import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18  }} color="text.secondary"   gutterBottom>
        STOCK IN 
        </Typography>
        
        <Typography variant="body2">
          1150
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See ALL details</Button>
      </CardActions>
    </Card>
  );
}