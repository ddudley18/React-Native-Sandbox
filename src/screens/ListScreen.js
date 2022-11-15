import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    let age = 10;
    const friends = [
        { name: 'Friend #1', age: age++},
        { name: 'Friend #2', age: age++},
        { name: 'Friend #3', age: age++},
        { name: 'Friend #4', age: age++},
        { name: 'Friend #5', age: age++},
        { name: 'Friend #6', age: age++},
        { name: 'Friend #7', age: age++},
        { name: 'Friend #8', age: age++},
        { name: 'Friend #9', age: age++},
        { name: 'Friend #10', age: age++},
    ]

    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
            }} 
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;