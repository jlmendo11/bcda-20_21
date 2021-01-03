import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const CalificacionRow = (props) => {
    const {drizzle, drizzleState, alumnoIndex, alumnoAddr, evaluacionesLength} = props;

    let cells = [];

    for (let ei = 0; ei < evaluacionesLength; ei++) {

        cells.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Asignatura"}
                method={"calificaciones"}
                methodArgs={[alumnoAddr, ei]}
                render={nota =>
                    <td key={"p2-" + alumnoIndex + "-" + ei}>
                        {nota.tipo === "0" ? "N.P." : ""}
                        {nota.tipo === "1" ? (nota.calificacion / 10).toFixed(1) : ""}
                        {nota.tipo === "2" ? (nota.calificacion / 10).toFixed(1) + "(M.H.)" : ""}
                    </td>
                }
            />)
    }

    return (
        <tr key={"d" + alumnoIndex}>
            <th>A<sub>{alumnoIndex}</sub></th>

            <td><ContractData drizzle={drizzle}
                              drizzleState={drizzleState}
                              contract={"Asignatura"}
                              method={"datosAlumno"}
                              methodArgs={[alumnoAddr]}
                              render={datos => <>
                                  {datos.nombre}
                              </>}
            /></td>

            {cells}
        </tr>
    );
};

export default CalificacionRow;


