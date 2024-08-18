import { useEffect, useState } from "react";
import styled from "styled-components";
import CardFrontView from "./CardFrontView";
import CardBackView from "./CardBackView";
import { InputName } from "@/types/input";

interface CardViewProps {
  cardInfo: Record<InputName, Record<string, string>>;
}

export default function CardView({ cardInfo }: CardViewProps) {
  const [showBack, setShowBack] = useState<boolean>(false);
  useEffect(() => {
    if (cardInfo.cvc.cvc) setShowBack(true);
    if (cardInfo.cvc.cvc?.length === 3) setShowBack(false);
  }, [cardInfo.cvc]);
  return (
    <CardViewContainer $showBack={showBack}>
      {showBack ? (
        <Back>
          <CardBackView cvc={cardInfo.cvc.cvc} />
        </Back>
      ) : (
        <Front>
          <CardFrontView cardInfo={cardInfo} />
        </Front>
      )}
    </CardViewContainer>
  );
}

const CardViewContainer = styled.div<{ $showBack: boolean }>`
  display: inline-block;
  color: white;
  transition: transform 0.3s;
  transform-style: preserve-3d;
  transform: ${({ $showBack }) =>
    $showBack ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const Front = styled.div`
  backface-visibility: hidden;
`;

const Back = styled.div`
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
