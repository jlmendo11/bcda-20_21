import {newContextComponents} from "@drizzle/react-components";

import AlumnoRow from "./AlumnoRow";

const {ContractData} = newContextComponents;

const AlumnosBody = (props) => {
    const {drizzle, drizzleState, matriculasLength} = props;
    let rows = [];
    for (let i = 0; i < matriculasLength; i++) {
        rows.push(<ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Asignatura"}
            method={"matriculas"}
            methodArgs={[i]}
            render={addr => <AlumnoRow drizzle={drizzle}
                                       drizzleState={drizzleState}
                                       alumnoIndex={i}
                                       alumnoAddr={addr}/>
            }
        />);
    }
    return <tbody>{rows}</tbody>;
};

export default AlumnosBody;
