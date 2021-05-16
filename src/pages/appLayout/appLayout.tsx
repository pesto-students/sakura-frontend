import React from "react";
import { Container } from "react-bootstrap";

type AppLayoutProps = {
  children?: React.ReactNode;
};

export const AppLayout: React.FC<AppLayoutProps> = (props) => (
  <Container fluid>{props.children}</Container>
);
