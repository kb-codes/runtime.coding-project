import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { useTheme } from '@react-navigation/native';

function HomeScreen() {
    const { colors } = useTheme();
    return (
        <View style={{ color: colors.text, alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Text style={{ fontSize: 30 }} >Home Screen</Text>
        </View>
    );
}
export default HomeScreen;