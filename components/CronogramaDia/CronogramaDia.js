import React from 'react';
import { View, Text, FlatList} from 'react-native';
import styles from './Style';

const diasMock = {
    segunda: [
        { regiaoMuscular: "Peito", exercicio: "Supino Halteres", descricao: "Descricao mock" },
        { regiaoMuscular: "Peito", exercicio: "Supino Barra", descricao: "Descricao mock" },
    ],
    terca: [
        { regiaoMuscular: "Perna", exercicio: "Agachamento bola", descricao: "Descricao mock" },
        { regiaoMuscular: "Biceps", exercicio: "Biceps Curl", descricao: "Descricao mock" },
    ],
    quarta: [
        { regiaoMuscular: "Costas", exercicio: "Remada Curvada", descricao: "Descricao mock" },
        { regiaoMuscular: "Costas", exercicio: "Pull-Up", descricao: "Descricao mock" },
    ],
    quinta: [
        { regiaoMuscular: "Ombros", exercicio: "Desenvolvimento Halteres", descricao: "Descricao mock" },
        { regiaoMuscular: "Ombros", exercicio: "Elevação Lateral", descricao: "Descricao mock" },
    ],
    sexta: [
        { regiaoMuscular: "Triceps", exercicio: "Triceps Testa", descricao: "Descricao mock" },
        { regiaoMuscular: "Triceps", exercicio: "Triceps Pulley", descricao: "Descricao mock" },
    ],
    sabado: [
        { regiaoMuscular: "Perna", exercicio: "Leg Press", descricao: "Descricao mock" },
    ],
    domingo: [
    ],
};

const flatData = Object.entries(diasMock).map(([dia, exercicios]) => ({
    dia,
    exercicios,
}));

const CronogramaDia = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={flatData}
                keyExtractor={(item) => item.dia}
                renderItem={({ item }) => (
                    <View style={styles.diaContainer}>
                        <Text style={styles.diaText}>{item.dia.toUpperCase()}</Text>
                        {item.exercicios.map((exercicio, index) => (
                            <View key={index} style={styles.exercicioContainer}>
                                <Text style={styles.exercicioText}>
                                    {exercicio.regiaoMuscular}: {exercicio.exercicio}
                                </Text>
                                <Text style={styles.descricaoText}>{exercicio.descricao}</Text>
                            </View>
                        ))}
                    </View>
                )}
            />
        </View>
    );
};

export default CronogramaDia;
