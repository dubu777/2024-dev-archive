import { path } from "@/constants/path";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Check from '../assets/image/check.png';

export default function Completed() {
  const location = useLocation();
  const cardInfo = location.state.cardInfo;
  console.log(cardInfo, 'cardinfo');
  
  return (
    <CompletedContainer>
      <CheckImage src={Check} alt="check" />
      <TextWrapper>
        <Text>{cardInfo.userName.userName}님의</Text>
        <Text>{cardInfo.cardNumber.cardNumber1} {cardInfo.cardNumber.cardNumber2} •••• ••••</Text>
        <Text>{cardInfo.cardCompany.cardCompany}가 등록되었어요.</Text>
      </TextWrapper>
      <Link to={path.ENROLL_CARD}>
        <Button>확인</Button>
      </Link>
    </CompletedContainer>
  )
}


const CompletedContainer = styled.div`
  display: flex;
  width: 100dvw;
  height: 100dvh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin-top: 10px;
`;

const CheckImage = styled.img`
  width: 75px;
`;

const Button = styled.button`
  width: 320px;
  height: 44px;
  border-radius: 5px;
  background-color: #333333;
  color: white;
  font-size: 16px;
`;
