import React from 'react';
import { PropTypes } from 'prop-types';
import { View, TouchableHighlight, Text, TextInput } from 'react-native';

import color from 'color';
import styles from './styles';

// const underlayColor = color(styles.$btnBgColorBase).darken(
//   styles.$btnBgColorModifier
// );
const underlayColor = 'grey';

class InputWithButton extends React.Component {
  render () {
    const { onPress, buttonText, editable = true, ...props } = this.props;
    const containerStyles = [styles.container];
    if (editable === false) {
      containerStyles.push(styles.containerDisabled);
    }

    return (
      <View style={containerStyles}>
        <TouchableHighlight
          underlayColor={underlayColor}
          onPress={onPress}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>
            {buttonText}
          </Text>
        </TouchableHighlight>
        <View style={styles.border}>
          <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            {...props}
          />
        </View>
      </View>
    );
  }
}

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
};
export default InputWithButton;
