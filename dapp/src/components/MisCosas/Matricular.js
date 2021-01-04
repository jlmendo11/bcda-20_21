import {newContextComponents} from "@drizzle/react-components";
const {ContractData, ContractForm} = newContextComponents;

const Matricular = ({drizzle, drizzleState}) => <MatricularV3  drizzle={drizzle} drizzleState={drizzleState} />


const MatricularV3 = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Matricular</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr == drizzleState.accounts[0]) {
                          return <p>"ERES EL PROFE, NO TE PUEDES MATRICULAR"</p>
                      }
                      return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                           contract="Asignatura" method="automatricula"
                                           labels={["Nombre y Apellidos", "Correo Electronico"]}
                      />
                  }}
    />
</article>

export default Matricular;
