import { useRouteData, createRouteData } from 'solid-start'

// img link test: https://cdn.jsdelivr.net/gh/kun-moe/kun-image@main/img/wangEditor.png

export function routeData() {
  return createRouteData(async () => {
    const response = await fetch('/api/link')
    return await response.json()
  })
}

export default function KUNSticker() {
  const links = useRouteData()
  console.log(routeData)

  console.log(links)

  return (
    <main>
      <img src="" alt="kun" />
    </main>
  )
}
