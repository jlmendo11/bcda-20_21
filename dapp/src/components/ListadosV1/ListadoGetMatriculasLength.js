import {newContextComponents} from "@drizzle/react-components";
import ListadoGetEvaluaciones from "./ListadoGetEvaluaciones";

const {ContractData} = newContextComponents;

const ListadoGetMatriculasLength = (props) => {
  const {drizzle, drizzleState, evaluacionesLength} = props;
    
  return <ContractData 
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Asignatura"}
            method={"matriculasLength"}
            render={ml => 
              <ListadoGetEvaluaciones drizzle={drizzle} drizzleState={drizzleState}
                                      evaluacionesLength={evaluacionesLength} matriculasLength={ml}/>
            }
        />;
}

export default ListadoGetMatriculasLength;


