import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    diaContainer: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    diaText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    exercicioContainer: {
        marginBottom: 8,
    },
    exercicioText: {
        fontSize: 16,
        color: '#555',
    },
    descricaoText: {
        fontSize: 14,
        color: '#777',
    },
});
