
import ListadosForm from "./ListadosForm";


const Listados = (props) => (
    <section className="AppListados">
        <h2>ListadosV2 (CON BUSCADOR)</h2>
        <ListadosForm drizzle={props.drizzle} drizzleState={props.drizzleState}/>
    </section>
);

export default Listados;
