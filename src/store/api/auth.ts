import { baseApi } from './base'

export type AuthUser = {
  id: string
  username: string
  isAdmin: boolean
}

export type AuthLoginBody = {
  username: string
  password: string
}
export type AuthLoginResponse = {
  id: string
}

export type AuthSignUpBody = {
  username: string
  password: string
  email?: string
  firstName?: string
  lastName?: string
}
export type AuthSignUpResponse = {
  id: string
}

export const { useLoginMutation, useSignUpMutation, useVerifyQuery } =
  baseApi.injectEndpoints({
    endpoints: (build) => ({
      login: build.mutation<AuthLoginResponse, AuthLoginBody>({
        query: (body) => ({
          url: '/auth/login',
          method: 'post',
          body,
        }),
      }),
      signUp: build.mutation<AuthSignUpResponse, AuthSignUpBody>({
        query: (body) => ({
          url: '/auth/sign-up',
          method: 'post',
          body,
        }),
      }),
      verify: build.query<AuthUser, void>({
        query: () => '/auth/verify',
        keepUnusedDataFor: 0,
      }),
    }),
  })
