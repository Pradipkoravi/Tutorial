import React, { useState, useEffect } from 'react';
import { View, Pressable, Text, StyleSheet, Modal, NativeModules } from 'react-native';
import { Colors, ConstStrings, Dimensions, Directions } from '../../utilities';
import { Button } from '../../component';

const DeviceInfo = (): JSX.Element => {
    const [modalVisible, setModalVisible] = useState(false);
    const [deviceName, setDeviceName] = useState("");
    const DeviceInfo = NativeModules.DeviceModule;

    useEffect(() => {
        setTimeout(async () => {
            const deviceName = await DeviceInfo.getDeviceName();
            setDeviceName(deviceName);
            setModalVisible(true);
        }, 500);
    }, []);

    return (
        <Modal
            animationType={'fade'}
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}>
            <Pressable style={styles.layout1} onPress={() => setModalVisible(!modalVisible)} >
                <View style={styles.modelview}>
                    <Text style={styles.devicename}>{deviceName}</Text>
                    <Button
                        title={ConstStrings.press_me}
                        color={Colors.Generic.black26}
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                </View>
            </Pressable>
        </Modal>
    );
};
const styles = StyleSheet.create({
    layout1: {
        flex: Dimensions.size1,
        alignItems: Directions.flex_center,
        justifyContent: Directions.flex_center,
    },
    modelview: {
        width: '90%',
        height: '50%',
        backgroundColor: Colors.Generic.white,
        borderRadius: Dimensions.size4,
        alignItems: Directions.flex_center,
        justifyContent: Directions.flex_end,
        paddingVertical: Dimensions.size40
    },
    devicename: {
        fontSize: Dimensions.size36,
        alignSelf: Directions.flex_center,
    },
    btntext: {
        fontSize: Dimensions.size16,
    }
});
export default DeviceInfo;