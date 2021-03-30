import React from 'react';
import { Image, Text, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';

function WelcomeScreen({ navigation }) {
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    style={styles.logo}
                    source={require('/home/kuldip/runtime.coding/assets/logo.png')}
                    resizeMode="stretch" />

            </View>
            <Animatable.View
                style={[styles.footer,
                {
                    backgroundColor: colors.background
                }]}
                animation="fadeInUpBig">

                <Text style={[styles.title,
                {
                    color: colors.text
                }]}>Start learning programming with us!</Text>
                <Text style={styles.text}>Follow us on instagram @runtime.coding</Text>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <LinearGradient
                            colors={['#3994cc', '#0b5380']}
                            style={styles.signIn}>
                            <Text style={styles.textSign}>Get Started  </Text>
                            <AntDesign name="rightcircleo" size={15} color="white" />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>

        </View >

    );

};


const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3994cc'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});
export default WelcomeScreen;