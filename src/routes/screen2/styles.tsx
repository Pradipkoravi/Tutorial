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
        justifyContent: Directions.flex_end,
    },
    input: {
        height: Dimensions.size45,
        width: '85%',
        paddingLeft: Dimensions.size4,
        margin: Dimensions.size12,
        backgroundColor: Colors.Generic.white,
        fontSize: Dimensions.size16,
        borderRadius: Dimensions.size4
    },
    slidebutton: {
        height: Dimensions.size50,
        width: '85%',
        alignItems: Directions.flex_center,
        justifyContent: Directions.flex_center,
        marginTop: Dimensions.size16,
        borderRadius: Dimensions.size4,
        borderWidth: Dimensions.size1,
        marginBottom: '10%',
        borderColor: Colors.Generic.gray,
        backgroundColor: Colors.Generic.white,
    },
    fillbutton: {
        borderColor: Colors.Generic.gray,
        backgroundColor: Colors.Generic.black26,
        borderRadius: Dimensions.size4,
    },
    titlestyle: {
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
    },
    slideicon: {
        borderRadius: Dimensions.size4,
    }

});