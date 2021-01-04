
import React from 'react'

import ListadoEvaluacion from './ListadoEvaluacion'

export default class ListadoExiste extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        ready: false,
        evaluacionesLengthKey: null,
        evaluacionesKeys: []
    }
  }
  
  render() {
    let evaluacionesLength;
    let evaluaciones = [];

    const {Asignatura} = this.props.drizzleState.contracts;
    if (Asignatura && Asignatura.initialized) {

        let el = Asignatura.evaluacionesLength[this.state.evaluacionesLengthKey];
        evaluacionesLength = el ? el.value : 0;

        for (let i = 0; i < this.state.evaluacionesKeys.length; i++) {
            const eva = Asignatura.evaluaciones[this.state.evaluacionesKeys[i]];
            evaluaciones[i] = eva ? eva.value : {nombre: "??", fecha: 0, puntos: 0};
        }
    }

    // Vamos a buscar el indice de esa evaluacion por ese nombre
    let evaluacionCorrectaIndice = -1;
    evaluaciones.forEach((evaluacion, indice) => {
      console.log('La evaluacion con indice ' + indice + ' tiene el nombre ' + evaluacion.nombre);
      if(evaluacion.nombre === this.props.submittedEvaluation){
        evaluacionCorrectaIndice = indice;
      }
    });

    // Significa que no hemos encontrado ninguna evaluacion por ese nombre
    if(evaluacionCorrectaIndice === -1){
      return <div>
        <h2>Listado de la evaluacion: {this.props.submittedEvaluation}, buscando en un total de {this.props.matriculasLength} matriculados</h2>
        <p>No hemos podido encontrar la evaluacion de nombre {this.props.submittedEvaluation}</p>
      </div>
    }

    // Si llegamos hasta aquí, es que la evaluación si que existe y tiene indice = evaluacionCorrectaIndice
    return <div>
      <h2>Listado de la evaluacion: {this.props.submittedEvaluation}, buscando en un total de {this.props.matriculasLength} matriculados</h2>
      <ListadoEvaluacion drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} 
                         evaluacionCorrectaIndice={evaluacionCorrectaIndice} matriculasLength={this.props.matriculasLength}/>
  </div>
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
        evaluacionesLengthKey,
        evaluacionesKeys
    } = JSON.parse(JSON.stringify(this.state));

    if (!evaluacionesLengthKey) { // Observar el metodo evaluacionesLength().
        evaluacionesLengthKey = instance.methods.evaluacionesLength.cacheCall();
        changed = true;
    } else {
        let el = Asignatura.evaluacionesLength[this.state.evaluacionesLengthKey];
        el = el ? el.value : 0;
        for (let i = evaluacionesKeys.length; i < el; i++) {
            evaluacionesKeys[i] = instance.methods.evaluaciones.cacheCall(i);
            changed = true;
        }
    }

    if (changed) {
        this.setState({
            evaluacionesLengthKey,
            evaluacionesKeys
        });
    }
  }


}
