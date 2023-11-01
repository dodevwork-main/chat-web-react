import { Container, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { AuthLoginForm } from '~/features/auth/login-form'
import { Path } from '~/shared/config/constants'

export default function LoginPage() {
  return (
    <Stack flex={1} justifyContent='center' alignItems='center'>
      <Container maxWidth='sm'>
        <AuthLoginForm />

        <Stack alignItems='center' mt={1}>
          <Typography component={Link} to={Path.SignUp}>
            Sign up
          </Typography>
        </Stack>
      </Container>
    </Stack>
  )
}
