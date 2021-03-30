import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../components/contex';
import { useTheme } from 'react-native-paper';
import { color } from 'react-native-reanimated';
function SignIn({ navigation }) {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true,
    });
    const { signUp } = React.useContext(AuthContext);
    const { colors } = useTheme();
    const textChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
            })
        }
        else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
            })

        }

    }

    const passChange = (val) => {

        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,

        })

    }

    const ConfirmPassChange = (val) => {

        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry
        })

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer,
                {
                    backgroundColor: colors.background
                }]}>
                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Email</Text>
                <View style={styles.action}>
                    <MaterialIcons name="email" size={25} color={colors.text} />
                    <TextInput
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        placeholder="Your Email"
                        onChangeText={(val) => textChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Ionicons name="md-done-all" size={24} color={colors.text} />
                        :
                        null}
                </View>
                <Text style={[styles.text_footer, { color: colors.text, marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <Entypo name="lock" size={25} color={colors.text} />
                    <TextInput
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry ? true : false}

                    />

                    <TouchableOpacity onPress={passChange}>
                        {data.secureTextEntry ?
                            <MaterialIcons name="visibility-off" size={25} color={colors.text} />
                            :
                            <MaterialIcons name="visibility" size={24} color={colors.text} />
                        }

                    </TouchableOpacity>
                </View>

                <Text style={[styles.text_footer, { color: colors.text, marginTop: 35 }]}>Confirm Password</Text>
                <View style={styles.action}>
                    <Entypo name="lock" size={25} color={colors.text} />
                    <TextInput
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        placeholder="Confirm Your Password"
                        secureTextEntry={data.confirmSecureTextEntry ? true : false}

                    />

                    <TouchableOpacity onPress={ConfirmPassChange}>
                        {data.confirmSecureTextEntry ?
                            <MaterialIcons name="visibility-off" size={25} color={colors.text} />
                            :
                            <MaterialIcons name="visibility" size={24} color={colors.text} />
                        }

                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => { signUp() }}
                        style={styles.signIn}>
                        <LinearGradient
                            colors={['#3994cc', '#0b5380']}
                            style={styles.signIn}>
                            <Text style={styles.textSign}>Sign UP  </Text>

                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            borderColor: "#24bbd1",
                            borderWidth: 1,
                            marginTop: 15
                        }]}

                    ><Text style={[styles.textSign, {
                        color: "#24bbd1"
                    }]}>Sign IN</Text>

                    </TouchableOpacity>





                </View>

            </Animatable.View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3994cc'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
export default SignIn;