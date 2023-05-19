import { Typography } from "antd";
import { useStyle } from "../../style/useStyle";
import { Button } from "./style";

interface ICharacterCardProps {
  name: string;
  photo: string
}

const { Title } = Typography;
export function CharacterCard({ name, photo }: ICharacterCardProps ) {
  const theme = useStyle();
  return (
    <Button>
      <div>
        <img
          src={photo}
          style={{ width: "317px", height: "268px", objectFit: "fill" }}
        />
      </div>
      <div>
        <Title level={2} style={{ color: theme.colors.fontColor }}>
          {name}
        </Title>
      </div>
    </Button>
  );
}
