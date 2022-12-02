import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Spinner.css';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex', width: 1, height: 1 }}>
      <CircularProgress size="12rem" />
    </Box>
  );
}
