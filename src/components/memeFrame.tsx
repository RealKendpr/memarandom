import { FirstLoad } from "../utils/stateContainer";

export default function MemeFrame() {
  const [state] = FirstLoad();

  return (
    <div className="img grid place items-center min-h-dvh">
      {state.firstLoad ? (
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut iure
          assumenda sint, cum facere adipisci explicabo neque ut totam quas id
          nisi aliquid repellat unde voluptas dolorem magnam commodi nostrum.
        </div>
      ) : (
        <img className="select-none" src="./meme.png" alt="a meme" />
        // <div className="text-white">{state.count}</div>
      )}
    </div>
  );
}
