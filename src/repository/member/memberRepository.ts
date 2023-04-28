import { invoke } from '@tauri-apps/api'

import { Member } from './model'

const handler = {
  getMembers: 'get_members',
} as const

export const memberRepository = () => {
  const getMembers = async (): Promise<Member[]> => invoke<Member[]>(handler.getMembers)

  return {
    getMembers,
  }
}
