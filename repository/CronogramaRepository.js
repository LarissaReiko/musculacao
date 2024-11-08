import * as SQLite from 'expo-sqlite/legacy';

const db = SQLite.openDatabase('cronograma.db');
const createTable = () => {
    db.transaction(tx => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS cronograma (id INTEGER PRIMARY KEY AUTOINCREMENT, diaDaSemana TEXT, idExercicio INT, sequencia TEXT); ",
            [],
            () => console.log("Tabela criada com sucesso."),
            (tx, error) => {
                console.log("Erro ao criar tabela:", error);
                return true;
            }
        );
    });
};
const getCronograma = (setCronograma) => {
    db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM cronograma;',
            [],
            (_, { rows: { _array } }) => {
                console.log("Dados recuperados:", _array);
                setCronograma(_array);
            },
            (tx, error) => {
                console.log("Erro ao recuperar dados:", error);
                return true;
            }
        );
    });
};
const adicionarCronograma = (diaDaSemana, idExercicio, sequencia) => {
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO cronograma (diaDaSemana, idExercicio, sequencia) VALUES (?, ?, ?);',
            [diaDaSemana, idExercicio, sequencia],
            () => {
                console.log("Dados inseridos com sucesso.");
                getCronograma(setCronograma);
            },
            (tx, error) => {
                console.log("Erro ao inserir dados:", error);
                return true;
            }
        );
    });
};
createTable();
export { db, getCronograma, adicionarCronograma};
