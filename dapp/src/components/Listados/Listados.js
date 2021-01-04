
import ListadosForm from "./ListadosForm";


const Listados = (props) => (
    <section className="AppListados">
        <h2>Listados</h2>
        <ListadosForm drizzle={props.drizzle} drizzleState={props.drizzleState}/>
    </section>
);

export default Listados;
