
import {newContextComponents} from "@drizzle/react-components";
import ListadoGetCalificaciones from "./ListadoGetCalificaciones";

import ListadoGetNombreAlumno from './ListadoGetNombreAlumno'

const {ContractData} = newContextComponents;

const ListadoGetMatriculas = (props) => {
  const {drizzle, drizzleState, nombreEvaluacion, indiceEvaluacion, matriculasLength} = props;
  let rows = [];
  // console.log("ListadoGetMatriculas: evaluacion=...");
  // console.log(evaluacion);
  // console.log("ListadoGetMatriculas: evaluacion.nombre="+evaluacion.nombre);
  for (let i = 0; i < matriculasLength; i++) {
      // console.log("Buscamos al alumno numero: " + i)
      rows.push(<ContractData 
                  drizzle={drizzle}
                  drizzleState={drizzleState}
                  contract={"Asignatura"}
                  method={"matriculas"}
                  methodArgs={[i]}
                  render={address => 
                    <span>
                        <ListadoGetNombreAlumno drizzle={drizzle} drizzleState={drizzleState} address={address}/>
                        <ListadoGetCalificaciones drizzle={drizzle} drizzleState={drizzleState} indiceEvaluacion={indiceEvaluacion} address={address}/>
                    </span>
                  }
      />);
      if(i !== matriculasLength - 1) {
        rows.push(<p>----------</p>);
      }
  }
  return <div><h3>{nombreEvaluacion} (Evaluacion número {indiceEvaluacion}): </h3>{rows}</div>;
}

export default ListadoGetMatriculas;