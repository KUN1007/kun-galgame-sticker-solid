export interface ImageLinkAttributes {
  // 链接的唯一标志
  lid: number

  // 链接
  link: string

  // 上传时间
  time: number

  // 链接所属的组
  group: number

  // 图片的名字
  name: string

  // 表情包的人物名
  loli: string

  // 表情包的游戏名
  game: string

  // 上传链接用户的 uid, 0 为游客上传
  uid?: number
}
