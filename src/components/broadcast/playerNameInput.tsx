import { SetString } from "../../types";
import { useState } from "react";

const PlayerNameInput = ({ setPlayerBlack, setPlayerWhite }: { setPlayerBlack: SetString, setPlayerWhite: SetString }) => {
  const [isLocked, setIsLocked] = useState(false);

  const handleLockClick = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div 
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      gap: "0.25rem"
    }}
    className="text-white">
      <input 
      className="form-control-sm"
      type="text" placeholder="Black" onChange={(e) => setPlayerBlack(e.target.value)} disabled={isLocked} />
      <input 
      className="form-control-sm"
      type="text" placeholder="White" onChange={(e) => setPlayerWhite(e.target.value)} disabled={isLocked} />
      <button
        className="btn btn-dark btn-sm btn-outline-light w-100"
        onClick={handleLockClick}>{
          isLocked ? "Unlock" : "Lock"
        }</button>
    </div>
  );
}

export default PlayerNameInput;