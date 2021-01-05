module.exports = async callback => {

    try {
        const Asignatura = artifacts.require("./Asignatura.sol");

        // Usar las cuentas de usuario
        const accounts = await web3.eth.getAccounts();
        if (accounts.length < 8) {
            throw new Error("No hay cuentas.");
        }

        let asignatura = await Asignatura.deployed();

        // Identificar al profesor:
        let profesor = await asignatura.profesor();
        console.log("Cuenta del profesor =", profesor);

        console.log("Crear 4 evaluaciones:");
        await asignatura.creaEvaluacion("Examen Parcial", 12345678, 30);
        await asignatura.creaEvaluacion("Examen Final", 12349999, 50);
        await asignatura.creaEvaluacion("Examen Extra 1", 12949999, 10);
        await asignatura.creaEvaluacion("Examen Extra 2", 13549999, 10);

        console.log("Matricular a 3 alumnos:");
        let evaAccount = accounts[1];
        let pepeAccount = accounts[2];
        let antonioAccount = accounts[3];
        console.log("Cuenta de Eva =", evaAccount);
        console.log("Cuenta de Pepe =", pepeAccount);
        console.log("Cuenta de Antonio =", antonioAccount)
        await asignatura.automatricula("Eva Martinez", "em@dominio.es", {from: evaAccount});
        await asignatura.automatricula("Jose Redondo", "jr@stio.com", {from: pepeAccount});
        await asignatura.automatricula("Antonio Delgado", "ad@stio.com", {from: antonioAccount});

        console.log("Añadir calificaciones a solo unos cuantos de ellos:");
        await asignatura.califica(evaAccount, 0, 1, 65);
        await asignatura.califica(evaAccount, 1, 1, 75);
        await asignatura.califica(evaAccount, 2, 2, 95);
        await asignatura.califica(pepeAccount, 0, 0, 0);
        await asignatura.califica(pepeAccount, 1, 1, 50);
    } catch (err) {   // Capturar errores
        console.log(`Error: ${err}`);
    } finally {
        console.log("FIN");
    }

    callback();      // Terminar
};
