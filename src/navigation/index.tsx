import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen1 from '../routes/screen1';
import Screen2 from '../routes/screen2';
import Screen3 from '../routes/screen3';

const RootStack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Screen1">
                <RootStack.Screen options={{ headerShown: false }} name="Screen1" component={Screen1} />
                <RootStack.Screen options={{ headerShown: false }} name="Screen2" component={Screen2} />
                <RootStack.Screen options={{ headerShown: false }} name="Screen3" component={Screen3} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;