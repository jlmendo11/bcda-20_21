import React from 'react'

import ListadoRow from './ListadoRow'

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
    let matriculasLength;
    let matriculas = [];

    const {Asignatura} = this.props.drizzleState.contracts;
    if (Asignatura && Asignatura.initialized) {

        let ml = Asignatura.matriculasLength[this.state.matriculasLengthKey];
        matriculasLength = ml ? ml.value : 0;

        for (let i = 0; i < this.state.matriculasKeys.length; i++) {
            const mat = Asignatura.matriculas[this.state.matriculasKeys[i]];
            matriculas[i] = mat ? mat.value : "??";
        }
    }

    // Añadimos solo los que tengan nota distinta a N.P.
    let rows = [];
    matriculas.forEach((matricula, indice) => {
      if(matricula !== "??"){
        rows.push(<ListadoRow drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} 
          evaluacionCorrectaIndice={this.props.evaluacionCorrectaIndice} matricula={matricula} />);
      }
    });

    rows = (rows) ? rows : "NO SE HA ENCONTRADO NADIE AÚN";

    console.log(rows);

    return <div>{rows}</div>

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
