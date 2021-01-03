import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const AlumnoRow = (props) => {
    const {drizzle, drizzleState, alumnoIndex, alumnoAddr} = props;
    return <tr key={"ALU-" + alumnoIndex}>
        <th>A<sub>{alumnoIndex}</sub></th>

        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Asignatura"}
            method={"datosAlumno"}
            methodArgs={[alumnoAddr]}
            render={datos => <>
                <td>{datos.nombre}</td>
                <td>{datos.email}</td>
            </>}
        />

        <td>{alumnoAddr}</td>
    </tr>;
};

export default AlumnoRow;
