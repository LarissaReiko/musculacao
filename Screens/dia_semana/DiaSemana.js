import React, { useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Picker } from "@react-native-picker/picker";

export default function DiaSemana() {
  const [selectedDay, setSelectedDay] = useState();
  const [selectedSquence, setSelectedSequence] = useState();

  const exerciciosMock = [
    {
      regiaoMuscular: "Peito",
      exercicio: "Supino Halteres",
      descricao: "Descricao mock",
    },
    {
      regiaoMuscular: "Peito",
      exercicio: "Supino Barra",
      descricao: "Descricao mock",
    },
    {
      regiaoMuscular: "Perna",
      exercicio: "Agachamento bola",
      descricao: "Descricao mock",
    },
    {
      regiaoMuscular: "Biceps",
      exercicio: "Biceps Curl",
      descricao: "Descricao mock",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.title}>Dia da Semana</Text>
        <Picker
          selectedValue={selectedDay}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedDay(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="SEGUNDA" value="SEGUNDA-FEIRA" />
          <Picker.Item label="TERCA" value="TERCA-FEIRA" />
          <Picker.Item label="QUARTA" value="QUARTA-FEIRA" />
          <Picker.Item label="QUINTA" value="QUINTA-FEIRA" />
          <Picker.Item label="SEXTA" value="SEXTA-FEIRA" />
        </Picker>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.title}>Exercicio</Text>
        <Picker
          selectedValue={selectedDay}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedDay(itemValue)}
        >
          {exerciciosMock.map((exercicio, index) => {
            return (
              <Picker.Item
                key={index}
                label={exercicio.exercicio}
                value={exercicio.exercicio}
              />
            );
          })}
        </Picker>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.title}>Sequencia</Text>
        <Picker
          selectedValue={selectedSquence}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedSequence(itemValue)}
        >
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="3x15" value="3x15" />
          <Picker.Item label="4x10" value="4x10" />
          <Picker.Item label="3x12" value="3x12" />
          <Picker.Item label="4x15" value="4x15" />
        </Picker>
      </View>

      <View>
        <View style={{ flexDirection: "row", gap: 25 }}>
          <CustomButton
            title="Salvar"
            onPress={() => Alert.alert("Salvar dados nessa função")}
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
    </View>
  );
}
/*
ARRAY E FUNÇÃO QUE IRÁ FAZER O PIKER PUXAR OS EXERCICIOS DO BANCO DE DADOS 

const exercicio = {
  0: ['Push-ups'],
  1: ['Cycling'],
  2: ['Bench Press'],
  3: ['Swimming'],
  4: ['Lunges']
};

<Picker
selectedValue={selectedExercise}
onValueChang{exercicio.map((exercise, index) => (
  <Picker.Item key={index} label={exercise} value={exercise} />
))}e={(itemValue) => setSelectedExercise(itemValue)}
style={styles.picker}
>

</Picker>*/

/*função piker de escolher qual o dia da semana desejado*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  picker: {
    borderColor: "#ccc",
    height: 50,
    width: 200,
  },
});
