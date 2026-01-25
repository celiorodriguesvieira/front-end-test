import { Button } from '@mui/material';

export const RoundedButton = ({ disabled = false, onClick, children, ...props }) => {
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
        backgroundColor: disabled ? '#CFD7DB' : '#E5EAEC',
        color: '#111827',
        fontWeight: 700,
        lineHeight: 1,
        '&:hover': {
          backgroundColor: disabled ? '#CFD7DB' : '#E5EAEC',
        },
        '&.Mui-disabled': {
          backgroundColor: '#CFD7DB',
          color: '#111827',
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
