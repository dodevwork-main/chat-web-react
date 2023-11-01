import Stack from '@mui/material/Stack'
import { TextField } from '@mui/material'

type Props = {
  chatId: string
}

export function Input({ chatId }: Props) {
  return (
    <Stack alignItems='center' m={2}>
      <Stack width='70%'>
        <TextField placeholder={chatId} />
      </Stack>
    </Stack>
  )
}
