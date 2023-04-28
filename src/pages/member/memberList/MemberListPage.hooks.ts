import { useEffect, useState } from 'react'

import { memberViewModel } from '../../../viewModel/member/memberViewModel'
import { MemberVM } from '../../../viewModel/member/model'

const memberVM = memberViewModel()

export const useMemberListPage = () => {
  const [members, setMembers] = useState([] as MemberVM[])

  const getMembers = async () => {
    try {
      const res = await memberVM.getMembers()
      setMembers(res)
    } catch (err) {
      // TODO
      console.error(err)
    }
  }

  useEffect(() => {
    void getMembers()
  }, [])

  return {
    members,
  }
}
