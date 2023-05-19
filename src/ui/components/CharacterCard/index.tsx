import { Typography } from "antd";
import { useStyle } from "../../style/useStyle";
import { Button } from "./style";

interface ICharacterCardProps {}

const { Title } = Typography;
export function CharacterCard() {
  const theme = useStyle();
  return (
    <Button>
      <div>
        <img
          src="https://finalspaceapi.com/api/character/avatar/gary_goodspeed.png"
          style={{ width: "317px", height: "268px", objectFit: "fill" }}
        />
      </div>
      <div>
        <Title level={2} style={{ color: theme.colors.fontColor }}>
          Gary
        </Title>
      </div>
    </Button>
  );
}
