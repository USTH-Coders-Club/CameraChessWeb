import { useDispatch } from "react-redux";
import { gameResetPgnAndFen } from "../../../slices/gameSlice";
import { SidebarButton, Icon } from "../../common";

const RestartButton = ({ videoRef, setText }: 
  { videoRef: any, setText: React.Dispatch<React.SetStateAction<string[]>>}) => {
  const dispatch = useDispatch();
  
  const handleClick = (e: any) => {
    e.preventDefault();

    videoRef.current.currentTime = 0;
    dispatch(gameResetPgnAndFen());
    setText(["Rewound video", "Reset PGN to start position"])
  }

 return (
    <SidebarButton onClick={handleClick}>
      <Icon iconName="bi-skip-start" />
    </SidebarButton>
  );
};

export default RestartButton;
