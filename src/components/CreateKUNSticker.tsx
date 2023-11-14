import { createRouteAction } from 'solid-start'
import { For } from 'solid-js'
import { fetchPost } from '~/utils/request'
import { createStore } from 'solid-js/store'

interface Link {
  name: string
  value: string
}

export default function CreateKUNStickers() {
  const [_, { Form }] = createRouteAction(async () => {
    await fetchPost('/api/link')
  })

  const [state, setState] = createStore<Link[]>([
    { name: 'link', value: '' },
    { name: 'group', value: '' },
    { name: 'name', value: '' },
    { name: 'loli', value: '' },
    { name: 'game', value: '' },
    { name: 'uid', value: '' },
  ])

  return (
    <div>
      <For each={state}>
        {(link, index) => (
          <div>
            <input
              type="text"
              value={link.value}
              onInput={(e) => setState(index(), 'value', e.target.value)}
            />
            <span>{link.name}</span>
            <span>{link.value}</span>
          </div>
        )}
      </For>

      <button>Submit</button>
    </div>
  )
}
