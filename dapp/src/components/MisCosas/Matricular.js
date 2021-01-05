import {newContextComponents} from "@drizzle/react-components";

import MatricularNoProfe from './MatricularNoProfe';

const {ContractData, ContractForm} = newContextComponents;

const Matricular = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    
    <h3>Matricular</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr === drizzleState.accounts[0]) {
                          return <p>"ERES EL PROFE, NO TE PUEDES MATRICULAR"</p>
                      }
                      return <MatricularNoProfe drizzle={drizzle} drizzleState={drizzleState}/>  
                  }}
    />
</article>

export default Matricular;
