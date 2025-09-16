import { useState } from "react";
import React {useState} from "react";
import styles from "../screens/Home/styles";
import { Text, View } from "react-native";
import styles from "../screens/Home/styles";


type Props = {
  id: string,
  name: string;
  onRemove: () => void;
};

export function Task({ name, onRemove,}: Props) {
    return (
        <View>
            <Text style={styles.task}></Text>
            
        </View>

    );
}

export default Task;