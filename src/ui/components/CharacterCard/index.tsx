import { Typography } from "antd";
import { useStyle } from "../../style/useStyle";

interface ICharacterCardProps {}

const  { Title } = Typography
export function CharacterCard () {

    const theme = useStyle()
    return (
        <div style={{borderRadius: '87px 13px', backgroundColor: 'blue', width: '317px', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <div>
                <img src="https://finalspaceapi.com/api/character/avatar/gary_goodspeed.png" style={{width: '317px', height: '268px', objectFit: 'cover', overflow: 'hidden'}} />
            </div>
            <div>
                <Title level={2} style={{color: theme.colors.fontColor}}>
                    Gary
                </Title>
            </div>
        </div>
    )
}