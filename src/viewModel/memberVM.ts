import { Member } from '../repository/member/model'

export class MemberVM {
  public accountId!: string

  public name!: string

  public email!: string

  public avatarUrl!: string

  public isAdmin!: boolean

  public constructor(init: MemberVM) {
    Object.assign(this, init)
  }

  public static parseToVM(data: Member): MemberVM {
    return new MemberVM({
      accountId: data.account_id,
      name: data.name,
      email: data.email,
      avatarUrl: data.avatar_url,
      isAdmin: data.is_admin,
    })
  }
}
