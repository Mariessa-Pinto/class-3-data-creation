import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Appbar, FAB, useTheme, Checkbox } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

export default function Home({navigation}) {

    const [checked, setChecked] = useState(false);

    const { bottom } = useSafeAreaInsets();
    const theme = useTheme();

    const [number, setNumber] = useState(1);

    const check = () => {

        if(number === 1) {
            console.log("ONE");
        } else if(number === 2) {
            console.log("TWO");
        } else if(number === 3){
            navigation.push('About');
        }
        console.log(number);
        setNumber(number + 1);
        }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Custom Dashboard Generator</Text>
            <View style={styles.checkBoxContainer}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                    color='#C8E3C5'
                />
                <Text>I agree to click the button</Text>
            </View>
            <TouchableOpacity 
                onPress={() => check()}
                style={number === 1 ? styles.btnBlue : 
                    number === 2 ? styles.btnRed : styles.btnGreen }
            >
                <Text>Click Me</Text>
            </TouchableOpacity>
            <Appbar
                style={[
                    styles.bottom,
                    {
                    height: BOTTOM_APPBAR_HEIGHT + bottom,
                    backgroundColor: '#E3FACD',
                    },
                ]}
                safeAreaInsets={{ bottom }}
                >
                <Appbar.Action icon="archive" onPress={() => {}} />
                <Appbar.Action icon="email" onPress={() => {}} />
                <Appbar.Action icon="label" onPress={() => {}} />
                <Appbar.Action icon="delete" onPress={() => {}} />
                <FAB
                    mode="flat"
                    size="medium"
                    icon="plus"
                    onPress={() => {}}
                    style={[
                    styles.fab,
                    { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
                    ]}
                />
            </Appbar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBlue: {
        alignItems: "center",
        backgroundColor: '#C8E3C5',
        borderColor: '#C8E3C5',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    btnRed: {
        alignItems: "center",
        backgroundColor: '#C9F0DF',
        borderColor: '#C9F0DF',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    btnGreen: {
        alignItems: "center",
        backgroundColor: '#EBF0C5',
        borderColor: '#EBF0C5',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    bottom: {
        backgroundColor: 'aquamarine',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    fab: {
        position: 'absolute',
        right: 16,
        backgroundColor: '#C8E3C5'
    },
    checkBoxContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 100,
        marginTop: -100
    }
});
