import React, { useState, useCallback } from 'react';
import { StatusBar, View, TextInput, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Colors, ConstStrings } from '../../utilities';
import { Button, DeviceInfo } from '../../component';
import { loginUserRequest } from '../../redux/app/user/action';

const Screen1 = (): JSX.Element => {

    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState('');

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleOnSubmit = useCallback(() => {
        if (inputValue.trim().length != 0) {
            const postJson = { username: inputValue };
            dispatch(loginUserRequest(postJson));
            navigation.navigate('Screen2');
        } else {
            setInputError(ConstStrings.please_enter_name);
        }
    }, [inputValue, dispatch]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.layout1}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => { setInputValue(text); setInputError(''); }}
                    value={inputValue}
                    placeholder={ConstStrings.enter_name}
                    keyboardType="default"
                />
                <Text style={styles.errortext}>{inputError}</Text>
                <Button
                    title={ConstStrings.submit}
                    color={Colors.Generic.blue}
                    onPress={handleOnSubmit}
                />
                <DeviceInfo />
            </View>
        </SafeAreaView>
    );
};

export default Screen1;
