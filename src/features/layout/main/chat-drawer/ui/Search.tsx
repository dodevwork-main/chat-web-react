import { Stack, TextField } from '@mui/material'

export function Search() {
  return (
    <Stack>
      <TextField
        InputProps={{ sx: { height: '100%' } }}
        sx={{ height: '100%' }}
        fullWidth
      />
    </Stack>
  )
}
