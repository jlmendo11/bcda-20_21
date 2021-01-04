import React from 'react'

import {newContextComponents} from "@drizzle/react-components";

export default class ListadosEvaluacion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        ready: false,
        matriculasLengthKey: null,
        matriculasKeys: []
    }
  }
  
  render() {
    const {ContractData} = newContextComponents;

    let matriculasLength;
    let matriculas = [];

    const {Asignatura} = this.props.drizzleState.contracts;
    if (Asignatura && Asignatura.initialized) {

        let ml = Asignatura.matriculasLength[this.state.matriculasLengthKey];
        matriculasLength = ml ? ml.value : 0;

        for (let i = 0; i < this.state.matriculasKeys.length; i++) {
            const eva = Asignatura.matriculas[this.state.matriculasKeys[i]];
            matriculas[i] = eva ? eva.value : {nombre: "??", fecha: 0, puntos: 0};
        }
    }

    // Añadimos solo los que tengan nota
    let rows = [];
    matriculas.forEach((matricula, indice) => {
      console.log('La matricula con indice = ' + indice + ' tiene el address = ' + matricula + ' vamos a ver si tiene nota en ' + this.props.evaluacionCorrectaIndice);
      rows.push(<ContractData
        drizzle={this.props.drizzle}
        drizzleState={this.props.drizzleState}
        contract={"Asignatura"}
        method={"calificaciones"}
        methodArgs={[matricula, this.props.evaluacionCorrectaIndice]}
        render={nota => {
                          if(nota) {
                            <p>{matricula} (Nota:
                                                  {nota.tipo === "0" ? "N.P." : ""}
                                                  {nota.tipo === "1" ? (nota.calificacion / 10).toFixed(1) : ""}
                                                  {nota.tipo === "2" ? (nota.calificacion / 10).toFixed(1) + "(M.H.)" : ""}
                            )</p>
                          }
        }
                        
        }
      />);
    });

    return <div>{rows || <p>NO SE HA ENCONTRADO NINGUNO</p>}</div>

  }

  componentDidMount() {
    this.setState({ready: true});
  }

  componentDidUpdate() {

    const {Asignatura} = this.props.drizzleState.contracts;
    if (!Asignatura || !Asignatura.initialized) return;

    const instance = this.props.drizzle.contracts.Asignatura;

    let changed = false;

    // Copiar el estado
    let {
        matriculasLengthKey,
        matriculasKeys
    } = JSON.parse(JSON.stringify(this.state));

    if (!matriculasLengthKey) { // Observar el metodo matriculasLength().
        matriculasLengthKey = instance.methods.matriculasLength.cacheCall();
        changed = true;
    } else {
        let ml = Asignatura.matriculasLength[this.state.matriculasLengthKey];
        ml = ml ? ml.value : 0;
        for (let i = matriculasKeys.length; i < ml; i++) {
            matriculasKeys[i] = instance.methods.matriculas.cacheCall(i);
            changed = true;
        }
    }

    if (changed) {
        this.setState({
            matriculasLengthKey,
            matriculasKeys
        });
    }
  }
  
}
