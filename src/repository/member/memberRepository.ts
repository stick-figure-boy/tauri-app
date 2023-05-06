import { invoke } from '@tauri-apps/api'

import { Member } from './model'

const handler = {
  getMembers: 'get_roles',
} as const

export const memberRepository = () => {
  const getMembers = async (): Promise<Member[]> => invoke<Member[]>(handler.getMembers)

  return {
    getMembers,
  }
}
