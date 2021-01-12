
import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const ListadoGetNombreAlumno = (props) => {
  const {drizzle, drizzleState, address} = props;
  //console.log("ListadoGetNombreAlumno: address=" + address);
  
  // Importante porque si no, en algún momento se entra con un valor extraño y se tendría que renderizar "null". Si NO lo haces, te sale el fallo de abajo:
  // (FALLO: Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.)
  let a = null;

  a = <ContractData 
    drizzle={drizzle}
    drizzleState={drizzleState}
    contract={"Asignatura"}
    method={"datosAlumno"}
    methodArgs={[address]}
    render={ datosAlumno => 
      <p>{datosAlumno.nombre}</p>
    }
  />;

  return a;
}

export default ListadoGetNombreAlumno;
