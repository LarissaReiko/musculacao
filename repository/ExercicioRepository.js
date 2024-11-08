import * as SQLite from 'expo-sqlite/legacy';

const db = SQLite.openDatabase('exercicio.db');
const createTable = () => {
    db.transaction(tx => {
        tx.executeSql(
            "CREATE TABLE IF NOT EXISTS exercicio (id INTEGER PRIMARY KEY AUTOINCREMENT, regiao TEXT, nome TEXT, descricao TEXT); ",
            [],
            () => console.log("Tabela criada com sucesso."),
            (tx, error) => {
                console.log("Erro ao criar tabela:", error);
                return true;
            }
        );
    });
};
const getExercicio = (setExercicio) => {
    db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM exercicio;',
            [],
            (_, { rows: { _array } }) => {
                console.log("Dados recuperados:", _array);
                setExercicio(_array);
            },
            (tx, error) => {
                console.log("Erro ao recuperar dados:", error);
                return true;
            }
        );
    });
};
const adicionarExercicio = (regiao, nome, descricao, setExercicio) => {
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO exercicio (regiao, nome, descricao) VALUES (?, ?, ?);',
            [regiao, nome, descricao],
            () => {
                console.log("Dados inseridos com sucesso.");
                getExercicio(setExercicio);
            },
            (tx, error) => {
                console.log("Erro ao inserir dados:", error);
                return true;
            }
        );
    });
};
createTable();
export { db, getExercicio, adicionarExercicio};
