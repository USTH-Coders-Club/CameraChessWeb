import { Display, CornersButton, HomeButton, PgnButton, Sidebar, DigitalButton, RecordButton, StopButton, StudyButton, DeviceButton } from "../common";
import { SetBoolean, SetNumber, SetStringArray, SetStudy, Study, SetString } from "../../types";
import BoardNumberInput from "./boardNumberInput";
import PlayerNameInput from "./playerNameInput";

const BroadcastSidebar = ({ piecesModelRef, xcornersModelRef, videoRef, canvasRef, sidebarRef,
  playing, setPlaying, text, setText, digital, setDigital, study, setStudy, setBoardNumber, setPlayerWhite, setPlayerBlack}: {
    piecesModelRef: any, xcornersModelRef: any, videoRef: any, canvasRef: any, sidebarRef: any,
    playing: boolean, setPlaying: SetBoolean,
    text: string[], setText: SetStringArray,
    digital: boolean, setDigital: SetBoolean,
    study: Study | null, setStudy: SetStudy,
    setBoardNumber: SetNumber,
    playerWhite: string, playerBlack: string, setPlayerWhite: SetString, setPlayerBlack: SetString
  }) => {

  return (
    <Sidebar sidebarRef={sidebarRef} >
      <li className="my-1">
        <DeviceButton videoRef={videoRef} />
      </li>
      <li className="my-1">
        <CornersButton piecesModelRef={piecesModelRef} xcornersModelRef={xcornersModelRef} videoRef={videoRef} canvasRef={canvasRef}
          setText={setText} />
      </li>
      <li className="my-1">
        <div className="btn-group w-100" role="group">
          <RecordButton playing={playing} setPlaying={setPlaying} />
          <StopButton setPlaying={setPlaying} setText={setText} />
        </div>
      </li>
      <li className="my-1">
        <StudyButton study={study} setStudy={setStudy} onlyBroadcasts={true} />
      </li>
      <li className="my-1">
        <BoardNumberInput setBoardNumber={setBoardNumber} />
      </li>
      <li className="border-top"></li>
      <li className="my-1">
        <Display text={text} />
      </li>
      <li className="border-top"></li>
      <li className="my-1">
        <div className="btn-group w-100" role="group">
          <DigitalButton digital={digital} setDigital={setDigital} />
          <PgnButton setText={setText} playing={playing} />
          <HomeButton />
        </div>
      </li>
      <li className="border-top"></li>
      <li className="my-1">
        <PlayerNameInput 
          setPlayerWhite={setPlayerWhite}
          setPlayerBlack={setPlayerBlack}
        />
      </li>
      <li className="border-top"></li>
      <li className="my-1">
        <p className="text-white">UCC - USTH Coders Club</p>
      </li>
    </Sidebar>
  );
};

export default BroadcastSidebar;