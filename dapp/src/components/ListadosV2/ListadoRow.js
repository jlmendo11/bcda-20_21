
import React from 'react'


export default class ListadoRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        ready: false,
        notaKey: null,
        datosAlumnoKey: null
    }
  }
  
  render() {
    let nota;
    let datosAlumno;

    const {Asignatura} = this.props.drizzleState.contracts;
    if (Asignatura && Asignatura.initialized) {
      console.log(this.state);
      if(this.state.notaKey){
        nota = Asignatura.calificaciones[this.state.notaKey];
        nota = nota ? nota.value : undefined;
      }
      if(this.state.datosAlumnoKey) {
        datosAlumno = Asignatura.datosAlumno[this.state.datosAlumnoKey];
        datosAlumno = datosAlumno ? datosAlumno.value : undefined;
      }
    }

    // Significa que no hemos encontrado ninguna nota todavia
    if(!nota || !datosAlumno){
      return <p>{this.props.matricula} ...</p>;
    }
    else {
      let resultadoAlumno;
      let resultadoNota;

      console.log(datosAlumno);
      if(nota && nota.tipo === '0') { 
        resultadoNota = "[NO PRESENTADO]"; 
      } else if (nota && nota.tipo === '1') { 
        resultadoNota = "[PRESENTADO - NOTA = " + nota.calificacion / 10 + "]";
      } else if (nota && nota.tipo === '2') {
        resultadoNota = "[PRESENTADO - NOTA = " + nota.calificacion / 10 + "(M.H.) ]";
      } else {
        resultadoNota = "[ERROR - TIPO DE NOTA DESCONOCIDO (DISTINTO DE [0,1,2])]"
      }

      if(datosAlumno && datosAlumno.nombre) {
        resultadoAlumno = datosAlumno.nombre;
      } else {
        resultadoAlumno = this.props.matricula;
      }

      return <p>{resultadoAlumno} - {resultadoNota}</p>

    }
  }

  componentDidMount() {
    this.setState({ready: true});
  }

  componentDidUpdate() {
    console.log('this.props.matricula = ' + this.props.matricula);
    console.log('this.props.evaluacionCorrectaIndice = ' + this.props.evaluacionCorrectaIndice);
    const {Asignatura} = this.props.drizzleState.contracts;
    if (!Asignatura || !Asignatura.initialized) return;

    const instance = this.props.drizzle.contracts.Asignatura;

    let changed = false;

    // Copiar el estado
    let {
      notaKey,
      datosAlumnoKey
    } = JSON.parse(JSON.stringify(this.state));

    if (!notaKey) { // Observar el metodo calificaciones().
      notaKey = instance.methods.calificaciones.cacheCall(this.props.matricula, this.props.evaluacionCorrectaIndice);
      changed = true;
    } 
    
    if (!datosAlumnoKey) { // Observar el metodo datosAlumno
      datosAlumnoKey = instance.methods.datosAlumno.cacheCall(this.props.matricula);
      changed = true;
    }

    if (changed) {
        this.setState({
          notaKey,
          datosAlumnoKey
        });
    }
  }


}
