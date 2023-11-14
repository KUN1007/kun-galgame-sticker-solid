import ImageLinkModel from '~/server/model/imageLinkModel'
import { json } from 'solid-start'
import type { KUNLinkRequestData } from './types/link'

export async function GET() {
  return json(await ImageLinkModel.find({}))
}

export async function POST(request: KUNLinkRequestData) {
  const newLink = new ImageLinkModel({
    time: Date.now(),

    link: request.link,
    group: request.group,
    name: request.name,
    loli: request.loli,
    game: request.game,
    uid: request.uid,
  })

  const imageLink = await newLink.save()

  return imageLink
}
