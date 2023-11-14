import ImageLinkModel from '~/server/model/imageLinkModel'
import { json } from 'solid-start'

export async function GET() {
  return json(await ImageLinkModel.find({}))
}
