import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

export function DataClientForm() {
  return (
    <>
      <Grid size={{ xs: 12, md: 5 }}>
        <TextField fullWidth error label="Nome" variant="outlined" />
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <TextField fullWidth error label="Email" variant="outlined" />
      </Grid>
      <Grid size={{ xs: 12, md: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Sexo</InputLabel>
          <Select value="" label="Sexo">
            <MenuItem value="Masculino">Masculino</MenuItem>
            <MenuItem value="Feminino">Feminino</MenuItem>
            <MenuItem value="Outro">Outro</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
