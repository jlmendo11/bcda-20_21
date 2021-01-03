import React from 'react';

class EvaluacionesSinComponentes extends React.Component {

    state = {
        ready: false,
        evaluacionesLengthKey: null,
        evaluacionesKeys: []
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

        let thead = <thead>
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Puntos</th>
        </tr>
        </thead>;

        let tbody = evaluaciones.map((evaluacion, index) =>
            <tr key={index}>
                <th>E<sub>{index}</sub></th>
                <td>{evaluacion.nombre}</td>
                <td>{evaluacion.fecha ? (new Date(1000 * evaluacion.fecha)).toLocaleString() : ""}</td>
                <td>{(evaluacion.puntos / 10).toFixed(1)}</td>
            </tr>);

        return <section className="AppEvaluaciones">
            <h2>Evaluaciones Sin Componentes</h2>
            <table>
                {thead}
                <tbody>{tbody}</tbody>
            </table>
        </section>
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

export default EvaluacionesSinComponentes;
