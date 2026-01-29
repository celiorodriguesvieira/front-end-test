import { Button, useTheme } from '@mui/material';

export const RoundedButton = ({ disabled = false, onClick, children, ...props }) => {
  const theme = useTheme();
  const bgColor = disabled ? theme.palette.grey[300] : theme.palette.grey[200];
  const textColor = theme.palette.grey[900];

  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      disableRipple
      sx={{
        minWidth: 32,
        width: 32,
        height: 32,
        borderRadius: '32px',
        padding: 0,
        backgroundColor: bgColor,
        color: textColor,
        fontWeight: 700,
        lineHeight: 1,
        '&:hover': {
          backgroundColor: bgColor,
        },
        '&.Mui-disabled': {
          backgroundColor: theme.palette.grey[300],
          color: textColor,
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
