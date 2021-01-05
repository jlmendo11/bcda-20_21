

import React from 'react'

import {newContextComponents} from "@drizzle/react-components";

import ListadoExiste from './ListadoExiste'

export default class ListadosForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {inputValue: '', submittedEvaluation: '', buttonValue: "Buscar", searching: false};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({inputValue: event.target.value, submittedEvaluation: this.state.submittedEvaluation, buttonValue: this.state.buttonValue});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      let buttonValue = (this.state.searching) ? "Buscar" : "Reset";
      let searching = !this.state.searching;
      this.setState({inputValue: this.state.inputValue, submittedEvaluation: this.state.inputValue, buttonValue: buttonValue, searching: searching});
    }

    render() {
      const {ContractData} = newContextComponents;

      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Nombre de la evaluacion (ejemplo: Examen Final):
              <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
            </label>
            <input type="submit" value={this.state.buttonValue} />
          </form>
          {this.state.searching && 
                  <ContractData
                    drizzle={this.props.drizzle}
                    drizzleState={this.props.drizzleState}
                    contract={"Asignatura"}
                    method={"matriculasLength"}
                    render={ml => (
                      <ListadoExiste 
                        drizzle             = {this.props.drizzle}
                        drizzleState        = {this.props.drizzleState}
                        submittedEvaluation = {this.state.submittedEvaluation}
                        matriculasLength    = {ml}/>
                    )}
                  />
          }
        </div>
      );
    }
  }

