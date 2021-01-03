import MisDatos from "./MisDatos";
import MisNotas from "./MisNotas";

const MisCosas = (props) => {
    const {drizzle, drizzleState} = props;

    return <section className="AppMisCosas">
        <h2>Mis Cosas</h2>

        <MisDatos drizzle={drizzle}
                  drizzleState={drizzleState}/>

        <MisNotas drizzle={drizzle}
                  drizzleState={drizzleState}/>
    </section>;
}

export default MisCosas;

