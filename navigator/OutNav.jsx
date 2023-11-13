import React, { useRef } from "react";
import { Animated } from "react-native";
import styled from "styled-components";

const OutNav = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const moveY = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [-30, 0],
  });

  const moveX = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 0],
  });

  Animated.timing(opacity, {
    toValue: 1,
    useNativeDriver: true,
    duration: 300,
  }).start();
  return (
    <Container>
      <Title style={{ opacity, transform: [{ translateY: moveY }] }}>커플 가계부</Title>
      <ButtonWrapper style={{ transform: [{ translateX: moveX }] }}>
        <Button>
          <StyledText>로그인</StyledText>
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #1e272e;
  align-items: center;
  justify-content: center;
`;

const Title = styled(Animated.Text)`
  font-size: 36px;
  font-weight: bold;
`;

const ButtonWrapper = styled(Animated.View)`
  /* background-color: red; */
`;

const Button = styled.TouchableOpacity`
  margin-top: 100px;
  padding: 20px 50px;
  background-color: tomato;
  border-radius: 50px;
`;

const StyledText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export default OutNav;
