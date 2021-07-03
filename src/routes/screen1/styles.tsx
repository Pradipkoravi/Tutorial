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
    input: {
        height: Dimensions.size45,
        width: '85%',
        paddingLeft: Dimensions.size4,
        margin: Dimensions.size12,
        backgroundColor: Colors.Generic.white,
        fontSize: Dimensions.size16,
        borderRadius: Dimensions.size4
    },
    errortext: {
        alignSelf: Directions.flex_start,
        color: Colors.Generic.red,
        marginLeft: '7.5%'
    },
    button: {
        height: Dimensions.size45,
        width: '85%',
        alignItems: Directions.flex_center,
        justifyContent: Directions.flex_center,
        backgroundColor: Colors.Generic.blue,
        marginTop: Dimensions.size16,
        borderRadius: Dimensions.size4
    },
    btntext: {
        color: Colors.Generic.white,
        fontSize: Dimensions.size16,
    }
});