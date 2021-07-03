import React, { useState } from 'react';
import { StatusBar, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Colors, ConstStrings } from '../../utilities';
import { Button } from '../../component';
import { useSelector } from 'react-redux';
import { userName } from '../../redux/app/user/selector';
import SwipeButton from 'rn-swipe-button';
import Icons from '../../assets';

const Screen2 = (): JSX.Element => {
    const navigation = useNavigation();
    const welcomeName: any = useSelector(userName);
    const [disableCBButton, setDisableCBButton] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.layout1}>
                <View style={styles.welcomelayout}>
                    <Text style={styles.welcometext}>{ConstStrings.welcome_text + ' '}{welcomeName?.username}</Text>
                </View>
                <Button
                    title={ConstStrings.press_me}
                    onPress={(): void => navigation.navigate('Screen3')}
                />
                <Button
                    title={ConstStrings.press_me}
                    color={Colors.Generic.bluegray}
                    onPress={(): void => navigation.navigate('Screen3')}
                />
                <Button
                    title={ConstStrings.press_me}
                    color={Colors.Generic.blue}
                    onPress={(): void => navigation.navigate('Screen3')}
                />
                <SwipeButton
                    onSwipeSuccess={(): void => navigation.navigate('Screen3')}
                    title={ConstStrings.slide_continue_text}
                    titleColor={Colors.Generic.blue}
                    titleStyles={styles.titlestyle}
                    shouldResetAfterSuccess={true}
                    containerStyles={styles.slidebutton}
                    railBorderColor={Colors.Generic.gray}
                    railStyles={styles.fillbutton}
                    railBackgroundColor={Colors.Generic.black26}
                    thumbIconBackgroundColor={Colors.Generic.blue}
                    thumbIconStyles={styles.slideicon}
                    thumbIconBorderColor={Colors.Generic.blue}
                    thumbIconImageSource={Icons.dimondicon} />
            </View>
        </SafeAreaView>
    );
};

export default Screen2;
