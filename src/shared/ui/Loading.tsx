import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'

type Props = {
  isHeight100vh?: boolean
}

export function Loading({ isHeight100vh = false }: Props) {
  return (
    <Stack
      flex={1}
      justifyContent='center'
      alignItems='center'
      height={isHeight100vh ? '100vh' : 'initial'}
    >
      <CircularProgress />
    </Stack>
  )
}
