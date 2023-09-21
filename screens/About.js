import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bookStore, bookstore } from '../data/books'
import { useState } from 'react';
import { Appbar, FAB, useTheme, Avatar } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

export default function About({navigation}) {

    const [data, setData] = useState();

    const addingData = () => {
        console.log("started");
        setData(bookStore);
    };

    const { bottom } = useSafeAreaInsets();
    const theme = useTheme();
    return (
        <View style={styles.container}>
            <View style={styles.welcomeBanner}>
                <Text style={styles.title}>Welcome to your dashboard</Text>
                <Button 
                    title="Show data" 
                    onPress={() => addingData()}
                    color="#C8E3C5"
                />
            </View>
            {
                data && data.books.map((b, index) => {
                    if(b.category.toLowerCase() == "java") {
                        return (
                            <View key={index} style={styles.data}>
                                <Avatar.Icon size={100} icon="folder" backgroundColor='#EBF0C5' />
                                <View style={styles.dataList}>
                                    <Text style={styles.listTitle}>{b.title}</Text>
                                    {
                                        b.authors && b.authors.map((a, ind) => {
                                            return (
                                                <Text key={ind}>
                                                    {a}
                                                </Text>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                        )
                    }
                })
            }
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
        gap: 80
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
    welcomeBanner: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 350,
        marginTop: -200
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    data: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    dataList: {
        fontSize: 12
    },
    listTitle: {
        fontWeight: 'bold',
        paddingBottom: 5
    }
});
