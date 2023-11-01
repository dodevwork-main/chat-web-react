import { useForm } from 'react-hook-form'
import { Button, Stack } from '@mui/material'
import { TextFieldElement } from 'react-hook-form-mui'
import { useEffect } from 'react'

import { useLoginMutation } from '~/store'
import { useRedirectUrl } from '~/shared/lib/hooks'
import { authStore } from '~/shared/lib/store/auth'

import { FormValues } from './types'

export function LoginForm() {
  const { handleSubmit, control } = useForm<FormValues>()
  const [trigger, { data }] = useLoginMutation()
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

      <TextFieldElement
        name='password'
        label='Password'
        type='password'
        control={control}
        validation={{ required: true }}
      />

      <Button type='submit'>Login</Button>
    </Stack>
  )
}
