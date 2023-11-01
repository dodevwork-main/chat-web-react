import Stack from '@mui/material/Stack'

type Props = {
  chatId: string
}

export function Body({ chatId }: Props) {
  return (
    <Stack flex={1} minHeight={0}>
      Body - {chatId}
    </Stack>
  )
}
