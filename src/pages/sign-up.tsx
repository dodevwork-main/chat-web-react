import { Container, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { AuthSignUpForm } from '~/features/auth/sign-up-form'
import { Path } from '~/shared/config/constants'

export default function SignUpPage() {
  return (
    <Stack flex={1} justifyContent='center' alignItems='center'>
      <Container maxWidth='sm'>
        <AuthSignUpForm />

        <Stack alignItems='center' mt={1}>
          <Typography component={Link} to={Path.Login}>
            Login
          </Typography>
        </Stack>
      </Container>
    </Stack>
  )
}
