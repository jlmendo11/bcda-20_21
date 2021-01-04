import {newContextComponents} from "@drizzle/react-components";
const {ContractData, ContractForm} = newContextComponents;

const CrearEvaluacion = ({drizzle, drizzleState}) => <CrearEval  drizzle={drizzle} drizzleState={drizzleState} />



const CrearEval = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Crear Evaluacion</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr !== drizzleState.accounts[0]) {
                          return <p>"NO SOY EL PROFE"</p>
                      }
                      return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                           contract="Asignatura" method="creaEvaluacion"
                                           labels={["Nombre Evaluacion", "Fecha(Segundos desde 1970)",
                                               "Puntos de la Nota Final"]}
                      />
                  }}
    />
</article>

export default CrearEvaluacion;
