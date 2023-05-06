import { useState } from 'react'

import { MemberVM } from '../../../viewModel/memberVM'

export const useMemberListPage = () => {
  const [members, setMembers] = useState([] as MemberVM[])

  // const getMembers = async () => {
  //   try {
  //     const res = await memberVM.getMembers()
  //     setMembers(res)
  //   } catch (err) {
  //     // TODO
  //     console.error(err)
  //   }
  // }

  // useEffect(() => {
  //   void getMembers()
  // }, [])

  return {
    members,
  }
}
