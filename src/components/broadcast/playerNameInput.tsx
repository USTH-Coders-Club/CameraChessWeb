import { SetString } from "../../types";

const PlayerNameInput = ({ setPlayerBlack, setPlayerWhite }: { setPlayerBlack: SetString, setPlayerWhite: SetString }) => {

  return (
    <div className="text-white">

      <input type="text" placeholder="Black" onChange={(e) => setPlayerBlack(e.target.value)} />
      <input type="text" placeholder="White" onChange={(e) => setPlayerWhite(e.target.value)} />
    </div>
  )
}

export default PlayerNameInput;