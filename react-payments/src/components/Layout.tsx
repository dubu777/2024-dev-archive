import { PropsWithChildren } from "react";
import styled from "styled-components"

export default function Layout({children}: PropsWithChildren) {
  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  )
}


const LayoutContainer = styled.div`
  width: 100dvw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;