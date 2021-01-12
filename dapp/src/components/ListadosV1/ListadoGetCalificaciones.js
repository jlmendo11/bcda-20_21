
import {newContextComponents} from "@drizzle/react-components";

import ListadoRow from './ListadoRow'

const {ContractData} = newContextComponents;

const ListadoGetCalificaciones = (props) => {
  const {drizzle, drizzleState, indiceEvaluacion, address} = props;

  // Importante porque si no, en algún momento se entra con un valor extraño y se tendría que renderizar "null". Si NO lo haces, te sale el fallo de abajo:
  // (FALLO: Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.)
  let a = null;

  a = <ContractData 
    drizzle={drizzle}
    drizzleState={drizzleState}
    contract={"Asignatura"}
    method={"calificaciones"}
    methodArgs={[address, indiceEvaluacion]}
    render={ nota => 
      <ListadoRow drizzle={drizzle} drizzleState={drizzleState} nota={nota}/>
    }
  />;

  return a
}

export default ListadoGetCalificaciones;
