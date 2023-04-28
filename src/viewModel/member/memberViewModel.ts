import { memberRepository } from '../../repository/member/memberRepository'

import { MemberVM } from './model'

export const memberViewModel = () => {
  const getMembers = async () => {
    try {
      const resp = await memberRepository().getMembers()
      const res: MemberVM[] = []
      resp.forEach((r) => {
        const m: MemberVM = {
          name: r.name,
        }
        res.push(m)
      })
      return res
    } catch (err) {
      throw err
    }
  }

  return {
    getMembers,
  }
}
