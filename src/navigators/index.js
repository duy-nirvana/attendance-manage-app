import React, { useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ScanScreen from '../screens/scan';
import SettingsScreen from '../screens/settings';
import LoginScreen from '../screens/login';

const Tab = createMaterialBottomTabNavigator();

const Navigator = (props) => {
    const [hasOpenCamera, setOpenCamera] = useState(false);
    const [hasScaned, setScaned] = useState(false);
    const [hasLogin, setLogin] = useState(false);

    const handleCamera = (status) => {
        setOpenCamera(status);
    }

    const handleScan = (status) => {
        setScaned(status);
    }
    
    return (
        <>
            {
                hasLogin ? (
                    <Tab.Navigator
                        initialRouteName="App"
                        activeColor= "navy"
                        barStyle={{ backgroundColor: '#fff', borderTopWidth: .4, borderTopColor: '#aaa' }}
                    >
                <Tab.Screen 
                    name="Scan"
                    children={(props) => <ScanScreen {...props} handleCamera={handleCamera} hasOpenCamera={hasOpenCamera} hasScaned={hasScaned} handleScan={handleScan} />}
                    options={{
                        tabBarLabel: 'Scan',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="qrcode" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Settings"
                    children={(props) => <SettingsScreen {...props} handleCamera={handleCamera} handleScan={handleScan} />}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="settings" color={color} size={26} />
                        ),
                    }}
                />
                
                </Tab.Navigator>
                ) : (
                    <LoginScreen />
                )
            }
        </>
    )
}

export default Navigator;