import { StyledText } from "./Text.styles";

export interface ITextProps {
  type?: "title" | "subTitle" | "body" | "notification";
  children: React.ReactNode;
  color?: "dark" | "light" | "gray" | "red";
  $margin?: string;
}

export default function Text({
  type = "body",
  children,
  color = "dark",
  $margin = "0",
}: ITextProps) {
  return (
    <StyledText type={type} color={color} $margin={$margin}>
      {children}
    </StyledText>
  );
}
