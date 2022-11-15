import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = (props) => {
    console.log(props);

    return (
        <View>
            <Text style={styles.text}>Hi there!</Text>
            <Button
                title="Go to Components Screen"
                onPress={() => props.navigation.navigate('Components')}
            />
            <Button 
                title="Go to List Screen"
                onPress={() => props.navigation.navigate('List')}
            />
            <Button 
                title="Go to Image Screen"
                onPress={() => props.navigation.navigate('Image')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;