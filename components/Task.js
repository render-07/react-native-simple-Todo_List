import React from 'react'

export const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.jakol}</Text>
            </View>

            <View style={styles.circular}></View>
        </View>   
    )
}
