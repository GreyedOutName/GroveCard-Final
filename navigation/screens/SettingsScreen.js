import * as React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default function SettingsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        resizeMode: 'cover'
      },
})