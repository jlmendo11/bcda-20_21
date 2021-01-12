import {newContextComponents} from "@drizzle/react-components";
import ListadoGetMatriculasLength from "./ListadoGetMatriculasLength";

const {ContractData} = newContextComponents;

const Listados = (props) => (
    <section className="AppListadosV2">
        <h2>ListadosV1 (SIN BUSCADOR)</h2>
        <ContractData
                    drizzle={props.drizzle}
                    drizzleState={props.drizzleState}
                    contract={"Asignatura"}
                    method={"evaluacionesLength"}
                    render={el => 
                      <ListadoGetMatriculasLength
                        drizzle             = {props.drizzle}
                        drizzleState        = {props.drizzleState}
                        evaluacionesLength  = {el}/>
                    }
        />    
    </section>
);

export default Listados;
