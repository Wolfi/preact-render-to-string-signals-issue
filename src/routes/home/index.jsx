import { h } from "preact";
import style from "./style.css";
import { signal, useSignal } from "@preact/signals";

const foo = signal(42);

const Home = () => {
  const bar = useSignal(5);

  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>Foo {foo}</p>
      <p>Bar {bar}</p>
      <button
        onClick={() => {
          foo.value++;
        }}
      >
        moar foo
      </button>
    </div>
  );
};

export default Home;
