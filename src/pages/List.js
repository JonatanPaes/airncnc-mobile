import React, { useState, useEffect } from "react";
import { View, AsyncStorage, Text } from "react-native";

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("techs").then(storagedTechs => {
      const techsArrays = storagedTechs.split(",").map(tech => tech.trim());

      setTechs(techsArrays);
    });
  }, []);

  return (
    <View>
      <Text>{techs}</Text>
    </View>
  );
}
