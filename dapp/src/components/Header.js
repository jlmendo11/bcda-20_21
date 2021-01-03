import {newContextComponents} from "@drizzle/react-components";
const {ContractData} = newContextComponents;

const Header = props => (
    <header className="AppHeader">
        <h1>
            P3 - Asignatura: &nbsp;
            <ContractData
                drizzle={props.drizzle}
                drizzleState={props.drizzleState}
                contract={"Asignatura"}
                method={"nombre"}
            />
            -
            <ContractData
                drizzle={props.drizzle}
                drizzleState={props.drizzleState}
                contract={"Asignatura"}
                method={"curso"}
                render={data => (
                    <em>{data}</em>
                )}
            />
        </h1>
    </header>
);

export default Header;
