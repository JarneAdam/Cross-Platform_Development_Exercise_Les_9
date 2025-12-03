import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const icon_color = "#3a3f46";
const icon_size = 25;

const getAccessibilityProps = (icon, pokemonName) => {
  switch(icon) {
    case 'search':
      return {
        accessibilityLabel: `Zoek ${pokemonName}`,
        accessibilityHint: `Zoek ${pokemonName}`
      };
    case 'bookmark':
      return {
        accessibilityLabel: 'Opslaan',
        accessibilityHint: 'Sla deze Pokémon op in je favorieten'
      };
    case 'share':
      return {
        accessibilityLabel: 'Delen',
        accessibilityHint: 'Deel deze Pokémon met vrienden'
      };
    default:
      return {};
  }
};

const IconButton = ({ icon, onPress, data }) => {
  const accessibilityProps = getAccessibilityProps(icon, data.name);
  
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(data.name);
      }}
      {...accessibilityProps}
    >
      <FontAwesome
        name={icon}
        style={styles.icon}
        size={icon_size}
        color={icon_color}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 5,
    paddingRight: 5
  }
});

export default IconButton;
