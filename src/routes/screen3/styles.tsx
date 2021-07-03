import { StyleSheet } from 'react-native';
import { Colors, Dimensions, Directions } from '../../utilities';

export default StyleSheet.create({
    container: {
        flex: Dimensions.size1,
        backgroundColor: Colors.Generic.black26
    },
    layout1: {
        flex: Dimensions.size1,
        alignItems: Directions.flex_center,
        justifyContent: Directions.flex_center,
    },
    button: {
        height: Dimensions.size45,
        width: '85%',
        alignItems: Directions.flex_center,
        justifyContent: Directions.flex_center,
        backgroundColor: Colors.Generic.black26,
        marginTop: Dimensions.size16,
        borderRadius: Dimensions.size4
    },
    btntext: {
        color: Colors.Generic.white,
        fontSize: Dimensions.size16,
    },
    welcomelayout: {
        position: Directions.position_absolute,
        top: Dimensions.size16,
        right: Dimensions.size30,
    },
    welcometext: {
        color: Colors.Generic.white,
        fontSize: Dimensions.size16,
    }
});