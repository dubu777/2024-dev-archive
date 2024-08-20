import { BackArrowIcon } from "@/asset";
import IconButton from "../IconButton/IconButton";
import { Container, Title } from "./Header.styles";
import { useNavigate } from "react-router-dom";

interface IHeaderProps {
  showTitle: boolean;
  showBackButton: boolean;
  title?: string;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Header({
  showTitle,
  showBackButton,
  title,
  onBackButtonClick,
}: IHeaderProps) {
  const navigate = useNavigate();

  const handleBackButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onBackButtonClick) {
      onBackButtonClick(e)
    } else {
      navigate(-1)
    }
  }

  return (
    <Container>
      {showBackButton && (
        <IconButton
          alt="back-arrow"
          iconPath={BackArrowIcon}
          onClick={handleBackButtonClick}
        />
      )}
      {showTitle && <Title>{title}</Title>}
    </Container>
  );
}
