import React from "react";
import styled from "styled-components";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { STNotification } from "../shared/STNotification";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const AppContent = styled.div`
  flex-grow: 1;
`;

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <AppContainer>
      <STNotification />
      <NavBar />

      <AppContent>{children}</AppContent>

      <Footer />
    </AppContainer>
  );
};
