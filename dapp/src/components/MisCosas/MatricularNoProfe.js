import React from 'react';

import {newContextComponents} from "@drizzle/react-components";

export default class MatricularNoProfe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {ContractData, ContractForm} = newContextComponents;

    return <ContractData drizzle={this.props.drizzle} drizzleState={this.props.drizzleState}
                  contract={"Asignatura"} method={"quienSoy"} methodArgs={[]}
                  render={(nombre, email) => {
                    console.log('(nombre, email) = (' + nombre + ', ' + email + ')');

                    nombre = (nombre === null) ? undefined : nombre;
                    email  = (email  === null) ? undefined : email ;

                    if (nombre || email) {
                        return <p>"YA ESTAS MATRICULADO, NO TE PUEDES VOLVER A MATRICULAR"</p>
                    }

                    return <ContractForm drizzle={this.props.drizzle} drizzleState={this.props.drizzleState}
                                contract="Asignatura" method="automatricula"
                                labels={["Nombre y Apellidos", "Correo Electronico"]}
                      />
                    }
                  }
    />
  
  }
}