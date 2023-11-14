import { createSignal } from "solid-js";

export default function KUNSticker() {
  const [count, setCount] = createSignal(0);
  return (
    <img src="https://cdn.jsdelivr.net/gh/kun-moe/kun-image@main/img/wangEditor.png"/>
  );
}
