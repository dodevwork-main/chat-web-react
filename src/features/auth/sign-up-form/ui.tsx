import { useForm } from 'react-hook-form'
import { Button, Stack } from '@mui/material'
import { TextFieldElement } from 'react-hook-form-mui'
import { useEffect } from 'react'

import { useSignUpMutation } from '~/store'
import { useRedirectUrl } from '~/shared/lib/hooks'
import { authStore } from '~/shared/lib/store/auth'

import { FormValues } from './types'

export function SignUpForm() {
  const { handleSubmit, control } = useForm<FormValues>()
  const [trigger, { data }] = useSignUpMutation()
  const redirectUrl = useRedirectUrl()

  useEffect(() => {
    if (data) {
      authStore.saveUserId(data.id)

      redirectUrl()
    }
  }, [data, redirectUrl])

  return (
    <Stack
      component='form'
      onSubmit={handleSubmit(trigger)}
      flex={1}
      spacing={2}
    >
      <TextFieldElement
        name='username'
        label='Username'
        control={control}
        validation={{ required: true }}
      />

      <Stack direction='row' spacing={2}>
        <TextFieldElement
          name='firstName'
          label='First Name'
          control={control}
          fullWidth
        />

        <TextFieldElement
          name='lastName'
          label='Last Name'
          control={control}
          fullWidth
        />
      </Stack>

      <TextFieldElement name='email' label='Email' control={control} />

      <TextFieldElement
        name='password'
        label='Password'
        type='password'
        control={control}
        validation={{ required: true }}
      />

      <Button type='submit'>Sign up</Button>
    </Stack>
  )
}
