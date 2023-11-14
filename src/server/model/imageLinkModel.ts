// 图片链接模型，记录是谁上传图片，图片的链接
import mongoose from '../db/connection'
import increasingSequence from '../middleware/increasingSequenceMiddleware'

import { ImageLinkAttributes } from './types/imageLinkModel'

// 图片链接 schema 结构
const ImageLinkSchema = new mongoose.Schema<ImageLinkAttributes>(
  {
    lid: { type: Number, unique: true },
    link: { type: String, required: true },
    time: { type: Number, required: true },
    group: { type: Number, required: true },
    name: { type: String, required: true },
    loli: { type: String, required: true },
    game: { type: String, required: true },
    uid: { type: Number, default: 0 },
  },
  // 时间戳，自动生成
  { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
)

// pre-save 钩子，在保存文档之前自动递增 lid 字段
ImageLinkSchema.pre('save', increasingSequence('lid'))

const ImageLinkModel = mongoose.model<ImageLinkAttributes>(
  'links',
  ImageLinkSchema
)

export default ImageLinkModel
