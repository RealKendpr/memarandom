import { FirstLoad } from "../utils/stateContainer";

export default function FetchMeme() {
  // const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [, actions] = FirstLoad();

  return (
    <button className="button" onClick={actions.firstLoad}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36px"
        height="36px"
        viewBox="0 0 20 20"
        className="hover:text-zinc-300 transition-colors"
        fill="currentColor"
      >
        <path d="M15.65 4.35A8 8 0 1 0 17.4 13h-2.22a6 6 0 1 1-1-7.22L11 9h7V2z"></path>
      </svg>
    </button>
  );
}
