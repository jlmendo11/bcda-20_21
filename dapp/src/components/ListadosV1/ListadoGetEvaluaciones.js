
import {newContextComponents} from "@drizzle/react-components";

import ListadoGetMatriculas from './ListadoGetMatriculas'

const {ContractData} = newContextComponents;

const ListadoGetEvaluaciones = (props) => {
  const {drizzle, drizzleState, evaluacionesLength, matriculasLength} = props;
  let rows = [];
  // console.log("ListadoGetEvaluaciones: evaluacionesLength="+evaluacionesLength);
  // console.log("ListadoGetEvaluaciones: matriculasLength="+matriculasLength);
  for (let i = 0; i < evaluacionesLength; i++) {
      rows.push(<ContractData 
                  drizzle={drizzle}
                  drizzleState={drizzleState}
                  contract={"Asignatura"}
                  method={"evaluaciones"}
                  methodArgs={[i]}
                  render={ evaluacion => 
                    <ListadoGetMatriculas drizzle={drizzle} drizzleState={drizzleState}
                               nombreEvaluacion={evaluacion.nombre} indiceEvaluacion={i} matriculasLength={matriculasLength}/>
                  }
      />);
      rows.push(<p>-------------------------------------------------------------------------</p>)
  }
  return <tbody>{rows}</tbody>;
}

export default ListadoGetEvaluaciones;
