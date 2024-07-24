import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '../config/base';

// images 
const chartbot = require('../assets/chatbot.png');

// components
import Topbar from '../components/Topbar';
import ChartBotWidget from '../components/ChartBotWidget';
import ChartuserWidget from '../components/ChartuserWidget';
import ChartInputWidget from '../components/ChartInputWidget';

const ChartScreen = () => {
    const navigation = useNavigation();
    const [isEmpty, setIsEmpty] = useState(true);
    const [charts, setCharts] = useState<any>([]);

    const [toggleDrawer, setToggleDrawer] = useState(false);

    const addChartMessage = async (message: string) => {
        setIsEmpty(false);
        const newMessage = {
            id: Date.now().toString(),  // Using timestamp as a unique ID
            threadTitle: 'New Chat',
            user: 'user',
            request: message,
            time: new Date().toLocaleTimeString(),
        };

        setCharts((prevCharts: any) => [...prevCharts, newMessage]);
        try {
            const response = await fetch(BASE_URL + '/chat-with-gemini', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "modelType": "text_only",
                    "prompt": message // Use the message parameter here
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const botMessage = {
                id: Date.now().toString() + "b",  // Using timestamp as a unique ID
                threadTitle: 'New Chat',
                user: 'chatbot',
                reply: data.result, // Adjust according to the API response
                time: new Date().toLocaleTimeString(),
            };
            setCharts((prevCharts: any) => [...prevCharts, botMessage]);

        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'An error occurred while sending message');
        }
    };

    return (
        <View style={styles.container}>
            {/* topbar */}
            <Topbar setToggleDrawer={setToggleDrawer} toggleDrawer={toggleDrawer} />

            {/* drawer */}
            {toggleDrawer && (
                <View style={styles.drawer}>
                    <View style={{ alignItems: 'center', padding: 20, borderBottomColor: Colors.dark, borderWidth: .3 }}>
                        <Text style={styles.drawTitle}> Chart History </Text>
                    </View>

                    <View style={{ padding: 20, alignItems: 'center' }}>
                        <Text style={{ color: Colors.dark }}>No chart History </Text>
                    </View>
                </View>
            )}

            {isEmpty ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={chartbot} style={{ width: 100, height: 100 }} />
                    <Text style={{ color: Colors.light }}>Hello there, I am mchart. Let's chat...</Text>
                </View>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, padding: 20 }}>
                    {charts.map((item: { user: any; id: any; threadTitle?: string; reply?: string; time?: string; }) => (
                        item.user === 'user' ?
                            <ChartuserWidget key={item.id} item={item} /> : <ChartBotWidget key={item.id} item={item} />
                    ))}
                </ScrollView>
            )}

            <ChartInputWidget onSend={addChartMessage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
    },
    drawer: {
        position: 'absolute',
        backgroundColor: Colors.lighter,
        width: 300,
        height: '100%',
        zIndex: 1000
    },
    drawTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.darker,
        alignItems: 'center'
    }
});

export default ChartScreen;

