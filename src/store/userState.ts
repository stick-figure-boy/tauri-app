import { atom } from 'recoil'

import { MemberVM } from '../viewModel/memberVM'

import { RecoilAtomKeys } from './RecoilKeys'

export const loginUserState = atom<MemberVM | undefined>({
  key: RecoilAtomKeys.USER_STATE.LOGIN_USER,
  default: undefined,
})
