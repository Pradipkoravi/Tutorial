import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Colors, Dimensions, Directions } from '../../utilities';

const Button = ({ ...props }): JSX.Element => {
    return (
        <Pressable
            style={[props?.style ? props?.style : styles.button, { backgroundColor: props?.color }]}
            onPress={props?.onPress}>
            <Text style={[styles.btntext, { color: props?.titleColor ? props?.titleColor : Colors.Generic.white, }]}>{props?.title}</Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    button: {
        height: Dimensions.size45,
        width: '85%',
        alignItems: Directions.flex_center,
        justifyContent: Directions.flex_center,
        marginTop: Dimensions.size16,
        borderRadius: Dimensions.size4
    },
    btntext: {
        fontSize: Dimensions.size16,
    }
});
export default Button;