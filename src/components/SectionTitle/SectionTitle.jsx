import { Typography } from '@mui/material';

export const SectionTitle = ({ title, ...rest }) => {
  return (
    <Typography
      fontSize={24}
      borderBottom={1}
      borderColor="divider.main"
      color="text.primary"
      component="h2"
      paddingBottom={2}
      {...rest}
    >
      {title}
    </Typography>
  );
};
