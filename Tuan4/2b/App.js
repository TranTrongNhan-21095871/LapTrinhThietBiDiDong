import React from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ReviewForm = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image 
                    source={require('./usb.png')} 
                    style={styles.image} 
                />
                <Text style={styles.productName}>USB Bluetooth Music Receiver HJX-001 - Biến loa thường thành loa bluetooth</Text>
            </View>
            <Text style={styles.reviewTitle}>Cực Kỳ Hài Lòng</Text>
            <View style={styles.rating}>
                <Text style={styles.ratingText}>★★★★★</Text>
            </View>
            <View style={styles.logoHinhanh}>
                <Image 
                    source={require('./camera.png')} 
                    style={styles.image} 
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Thêm hình ảnh</Text>
                </TouchableOpacity>
            </View>
            
            <TextInput
                style={styles.textInput}
                multiline
                placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
                placeholderTextColor="#888"
            />
            <Text style={styles.link}>https://meet.google.com/nsj-ojwi-xpp</Text>
            <Button title="Gửi" color="#007BFF" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        padding: 20,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '100%',
        marginVertical:40,
    },
    logoHinhanh: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '100%',
        marginVertical:40,
    },
    image: {
        width: 40,
        height: 40,
    },
    productName: {
        fontSize: 12,
        fontWeight: 'bold',
        flex: 1,
        marginLeft: 10,
    },
    reviewTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical:40,
    },
    rating: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    ratingText: {
        fontSize: 24,
    },
    textInput: {
        width: '100%',
        height: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical:40,
        backgroundColor: '#fff',
        textAlignVertical: 'top',
    },
    link: {
        color: '#007BFF',
        marginBottom: 20,
    },
    button: {
        marginHorizontal:10,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
});

export default ReviewForm;
