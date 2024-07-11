import { useState } from "react";
export default function Player({ initialName, symbol, isActive, onChangeName }) {
const [playerName, setPlayerName] = useState(initialName);
const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
      setIsEditing((isEditing) => !isEditing);
      if(isEditing){
        onChangeName(symbol, playerName);
      }
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={e => setPlayerName(e.target.value)}/>;
    }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? `Save` : 'Edit'}</button>
      </span>
    </li>
  );
}
