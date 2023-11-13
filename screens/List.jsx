import React from "react";
import Layout from "../components/Layout";
import { Text } from "react-native";
import styled from "styled-components/native";

const List = () => {
  return (
    <Layout>
      <StyledText>List</StyledText>
    </Layout>
  );
};

const StyledText = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export default List;
