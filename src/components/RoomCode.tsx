import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToclipBoard() {
        navigator.clipboard.writeText(props.code);
    }

    return (
        <button className="room-code" onClick={copyRoomCodeToclipBoard}>
            <div>
                <img src={copyImg} alt="Copy room Code" />
            </div>
            <span>Sala  #{props.code}</span>
        </button>
    )
}