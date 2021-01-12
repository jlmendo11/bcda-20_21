
const ListadoRow = (props) => {
  const {drizzle, drizzleState, nota} = props;

  let resultadoNota;

  if(nota && nota.tipo === '0') { 
    resultadoNota = "[NO PRESENTADO]"; 
  } else if (nota && nota.tipo === '1') { 
    resultadoNota = "[PRESENTADO - NOTA = " + nota.calificacion / 10 + "]";
  } else if (nota && nota.tipo === '2') {
    resultadoNota = "[PRESENTADO - NOTA = " + nota.calificacion / 10 + "(M.H.) ]";
  } else {
    resultadoNota = "[ERROR - TIPO DE NOTA DESCONOCIDO (DISTINTO DE [0,1,2])]"
  }
  
  return resultadoNota
}

export default ListadoRow;
