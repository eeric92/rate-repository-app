import React from "react";
import { View } from "react-native";
import RepositoryStats from "./RepositoryStats";
import StyledText from "./StyledText";

const RepositoryItem = (props) => (
  <View key={props.id} style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}>
    <StyledText fontSize="subheading" fontWeight="bold">
      FullName: {props.fullName}
    </StyledText>
    <StyledText>Description: {props.description}</StyledText>
    <StyledText>Language: {props.language}</StyledText>
    <RepositoryStats {...props} />
  </View>
);

export default RepositoryItem;
