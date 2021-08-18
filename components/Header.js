import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width:'100%',
        backgroundColor: '#f7287b',
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
        height: 90
    },
    headerTitle: {
        color: 'white',
        fontSize: 18
    }
})

export default Header;