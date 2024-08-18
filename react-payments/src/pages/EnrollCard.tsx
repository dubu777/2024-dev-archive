import CardView from "@/components/CardView";
import InputForm from "@/components/InputForm";
import { path } from "@/constants/path";
import { useInputStore } from "@/store/useInputStore";
import { Link } from "react-router-dom";
import styled from "styled-components"


export default function EnrollCard() {
  const {canSubmit, inputValues} = useInputStore();
  console.log(inputValues);
  
  return (
    <EnrollCardContainer>
      <CardView cardInfo={inputValues}/>
      <InputForm
      />
      <Link to={path.COMPLETED}  state={{cardInfo: inputValues}}>
        {canSubmit && <SubmitButton>확인</SubmitButton>}
      </Link>
    </EnrollCardContainer>
  )
}

const EnrollCardContainer = styled.div`
  margin: 50px 0px 80px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;

  @media screen and (max-width: 500px) {
    width: 85vw;
  }
`;

const SubmitButton = styled.div`
  width: 100%;
  height: 60px;
  background-color: #000000;
  color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
`;
