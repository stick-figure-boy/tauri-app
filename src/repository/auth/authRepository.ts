import { invoke } from '@tauri-apps/api'

import { Member } from '../member/model'

import { SignInRequest } from './request'

const handler = {
  signIn: 'sign_in',
} as const

export const authRepository = () => {
  const signIn = async (request: SignInRequest): Promise<Member> => invoke<Member>(handler.signIn, { request })

  return {
    signIn,
  }
}
