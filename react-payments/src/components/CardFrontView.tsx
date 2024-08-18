import { CARD_COMPANY_COLOR } from "@/constants/card";
import useGetCardImage from "@/hooks/useGetCardImage";
import { CardContainer } from "@/styles/container.styles";
import CardChip from '../assets/image/cardChip.png';
import styled from "styled-components";
import { KEYS_AND_SYMBOLS } from "@/constants/message";
import { CardInfoType } from "@/types/card";
import { InputName } from "@/types/input";

interface CardFrontViewProps {
  cardInfo: Record<InputName, Record<string, string>>
}

export default function CardFrontView({cardInfo}: CardFrontViewProps) {
  const cardColor = CARD_COMPANY_COLOR[cardInfo.cardCompany.cardCompany];
  const cardImage = useGetCardImage(cardInfo);
  return (
    <CardFrontViewContainer color={cardColor}>
      <ImageWrapper>
        <CardChipImage src={CardChip}/>
        {cardImage && <CardChipImage src={cardImage}/>}
      </ImageWrapper>
      <CardNumberWrapper>
        <CardNumber>{cardInfo.cardNumber.cardNumber1}</CardNumber>
        <CardNumber>{cardInfo.cardNumber.cardNumber2}</CardNumber>
        <SecretCardNumber>
          {KEYS_AND_SYMBOLS.SECRET_NUMBER.repeat(cardInfo.cardNumber.cardNumber3?.length || 0)}
        </SecretCardNumber>
        <SecretCardNumber>
          {KEYS_AND_SYMBOLS.SECRET_NUMBER.repeat(cardInfo.cardNumber.cardNumber4?.length || 0)}
        </SecretCardNumber>
      </CardNumberWrapper>
      <TextBox>
        {cardInfo.expiryDate.month}
        {cardInfo.expiryDate.year?.length > 0 ? KEYS_AND_SYMBOLS.SLASH : ''}
        {cardInfo.expiryDate.year}
      </TextBox>
      <TextBox>{cardInfo.userName.userName}</TextBox>
    </CardFrontViewContainer>
  )
}

export const CardFrontViewContainer = styled(CardContainer)`
  padding: 15px;
  background-color: ${({color}) => color ? color : 'black'};
`;

const CardChipImage = styled.img`
  width: 36px;
  height: 22px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextBox = styled.span`
  display: flex;
  align-items: flex-end;
  height: 30px;
`;

const CardNumberWrapper = styled(TextBox)`
  justify-content: space-between;
  gap: 10px;
`;

const CardNumber = styled.div`
  width: 100px;
  letter-spacing: 3px;
`;

const SecretCardNumber = styled.div`
  width: 100px;
  font-size: 11px;
  letter-spacing: 0px;
`;