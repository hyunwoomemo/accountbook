import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, SafeAreaView } from "react-native";
import styled from "styled-components/native";

const Layout = ({ children }) => {
  return (
    <Container>
      <SafeAreaView style={Platform.OS === "android" && { paddingTop: 30 }} />

      <Wrapper>{children}</Wrapper>
      <StatusBar style="light" />
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  background-color: #1e272e;
`;

const Wrapper = styled.View`
  padding: 20px;
`;

export default Layout;
