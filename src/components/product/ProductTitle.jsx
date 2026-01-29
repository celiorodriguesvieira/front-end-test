import { Typography } from '@mui/material';

export const ProductTitle = ({ title }) => {
  return (
    <Typography minHeight="32px" fontSize={14} lineHeight="16px" color="text.primary" variant="h3">
      {title}
    </Typography>
  );
};
