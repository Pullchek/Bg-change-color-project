import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("rgb(25, 12, 118)");
  {/* useState, React Hooks API'sinin bir parçasıdır ve React bileşenlerinde yerel durum (state) tutmak için kullanılır. */}

  const onPressButton = () => {
    const randomColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    setBackgroundColor(randomColor);
  };

  const randomNumber = () => {
    return Math.floor(Math.random() * 256);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
          {/* Eğer bir <Button> bileşenine border eklemek istiyorsanız, bunu doğrudan <Button> bileşenine uygulayamazsınız 
            çünkü <Button> bileşeni stil özelliklerini doğrudan desteklemez */}
      <TouchableOpacity style={styles.button} onPress={onPressButton}>
        {/* React Native'de kullanıcı etkileşimleri için kullanılan bir bileşendir. Dokunmatik olayları (touch events) algılayarak
           kullanıcıların bir bileşene dokunma veya üzerine basma gibi etkileşimlerini yakalar ve buna yanıt verir. */}
        <Text style={styles.buttonText}>Click & Change Color</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default App;
