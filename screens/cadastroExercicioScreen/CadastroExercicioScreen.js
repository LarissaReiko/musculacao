import { DefaultTheme } from "@react-navigation/native";
import react from "react";
import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import TextInputBox from "../../components/TextInput/TextInput";


function CadastroExercicioScreen() {
    const [descricao, setDescricao] = useState('');
    const [exercicio, setExercicio] = useState('');
    const [selectedValue, setSelectedValue] = useState(' ');

    return (
        <View style={styles.container}>

            <Text style={styles.title} >Região Muscular</Text>

            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(setExercicio)}
            >
                <Picker.Item label="Braço" value="Braço" />
                <Picker.Item label="Perna" value="Perna" />
                <Picker.Item label="Costa" value="Costa" />
                <Picker.Item label="Gluteo" value="Gluteo" />
                <Picker.Item label="Abdominal" value="Abdominal" />
            </Picker>

            <Text style={styles.title} >Exercício: </Text>
            <TextInputBox
                value={exercicio}
                onChangeText={setExercicio}
                placeholder=""
                keyboardType="default"
                style={styles.input}
            />

            <Text style={styles.title} >Descrição: </Text>
            <TextInputBox
                value={descricao}
                onChangeText={setDescricao}
                placeholder=""
                keyboardType="default"
                style={styles.input}
            />

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 20,
        marginBottom: 10, // Ajuste a margem para que não fique tão distante
        textAlign: 'center', // Centraliza o texto
        
    },
    picker: {
        height: 50, // Aumentando a altura para uma melhor usabilidade
        width: 200,
        textAlign: 'center',
        borderRadius: 20,
        fontSize: 20,
        borderColor: 'Black',
        borderRadius: 5,
    },
    input: {
        height: 70, // Aumentando a altura para múltiplas linhas
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        paddingTop: 0,
        fontSize: 16,
        textAlignVertical: 'top'
    },
});


export default CadastroExercicioScreen; 