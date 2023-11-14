import KUNSticker from "~/components/KUNSticker";
import CreateKUNStickers from '~/components/CreateKUNSticker'

export default function Sticker() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Sticker
      </h1>
      <KUNSticker />
      <CreateKUNStickers/>
    </main>
  );
}
