import {newContextComponents} from "@drizzle/react-components";
const {ContractData, ContractForm} = newContextComponents;

const Calificar = ({drizzle, drizzleState}) => <CalificarV3  drizzle={drizzle} drizzleState={drizzleState} />


const CalificarV1 = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Calificar</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
        contract={"Asignatura"} method={"profesor"} methodArgs={[]}
        render={addr => {
            if (addr !== drizzleState.accounts[0]) {
                return <p>"NO SOY EL PROFE"</p>
            }
            return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                 contract="Asignatura" method="califica"
                render={({inputs, inputTypes, state, handleInputChange, handleSubmit}) => {
                    const labels = ["Dirección del Alumno:", "Índice de la Evaluación:",
                        "Tipo: (0=NP 1=Nota 2=MH):", "Nota (x10)"];
                    return <form onSubmit={handleSubmit}>
                        {inputs.map((input, index) => (
                            <p> {labels[index]} &nbsp;
                                <input key={input.name} type={inputTypes[index]} name={input.name}
                                       value={state[input.name]} placeholder={input.name}
                                       onChange={handleInputChange}
                                /> </p> ))}
                        <button key="submit" type="button" onClick={handleSubmit}>calificar </button>
                    </form>
                }}
            />
        }}
    />
</article>

const CalificarV2 = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Calificar</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr !== drizzleState.accounts[0]) {
                          return <p>"NO SOY EL PROFE"</p>
                      }
                      return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                           contract="Asignatura" method="califica"
                      />
                  }}
    />
</article>

const CalificarV3 = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Calificar</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr !== drizzleState.accounts[0]) {
                          return <p>"NO SOY EL PROFE"</p>
                      }
                      return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                           contract="Asignatura" method="califica"
                                           labels={["Dirección Alumno", "Índice Evaluación",
                                               "0=NP 1=Nota 2=MH", "Nota (x10)"]}
                      />
                  }}
    />
</article>

export default Calificar;
