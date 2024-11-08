import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInputBox from "../../components/TextInput/TextInput";
import CustomButton from '../../components/CustomButton/CustomButton';
import { getExercicio, adicionarExercicio } from '../../repository/ExercicioRepository';




function CadastroExercicioScreen() {
    const [descricao, setDescricao] = useState('');
    const [nome, setNome] = useState('');
    const [selectedValue, setSelectedValue] = useState('Braço');
    const [exercicio, setExercicio] = useState([]);
    
    useEffect(() => {
        getExercicio(setExercicio);
    }, []);


    return (
        <View style={styles.container}>

            <Text style={styles.title} >Região Muscular</Text>

            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)}
            >
                <Picker.Item label="Braço" value="Braço" />
                <Picker.Item label="Perna" value="Perna" />
                <Picker.Item label="Costa" value="Costa" />
                <Picker.Item label="Gluteo" value="Gluteo" />
                <Picker.Item label="Abdominal" value="Abdominal" />
            </Picker>

            <Text style={styles.title} >Exercício: </Text>
            <TextInputBox
                value={nome}
                onChangeText={setNome}
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

            
                <View style={{ flexDirection: "row", gap: 25 }}>
                    <CustomButton
                        title="Salvar"
                        onPress={() => {
                            adicionarExercicio(selectedValue ,nome , descricao);
                            setSelectedValue('Braço');
                            setNome('');
                            setDescricao('');
                        }}
                    />
                    <CustomButton
                        title="Limpar"
                        onPress={() => {
                            setSelectedDay("");
                            setSelectedSequence("");
                        }}
                    />
                </View>
            

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