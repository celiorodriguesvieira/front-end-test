import { Typography } from '@mui/material';

export function SectionTitle({ title, ...rest }) {
  return (
    <Typography
      fontSize={24}
      borderBottom={1}
      borderColor="divider.main"
      color="primary.main"
      component="h2"
      paddingBottom={2}
      {...rest}
    >
      {title}
    </Typography>
  );
}
