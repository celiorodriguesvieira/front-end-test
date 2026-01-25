import { Typography } from '@mui/material';

export function ProductTitle({ title }) {
  return (
    <Typography minHeight="32px" fontSize={14} lineHeight="16px" color="primary.main">
      {title}
    </Typography>
  );
}
