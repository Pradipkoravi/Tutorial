import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Colors, ConstStrings } from '../../utilities';
import { Button } from '../../component';
import { useSelector } from 'react-redux';
import { userName } from '../../redux/app/user/selector';

const Screen3 = (): JSX.Element => {
    const navigation = useNavigation();
    const welcomeName: any = useSelector(userName);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.layout1}>
                <View style={styles.welcomelayout}>
                    <Text style={styles.welcometext}>{ConstStrings.welcome_text + ' '}{welcomeName?.username}</Text>
                </View>
                <Button
                    title={ConstStrings.go_to_home}
                    color={Colors.Generic.blue}
                    onPress={(): void => navigation.navigate('Screen1')}
                />
            </View>
        </SafeAreaView>
    );
};

export default Screen3;
