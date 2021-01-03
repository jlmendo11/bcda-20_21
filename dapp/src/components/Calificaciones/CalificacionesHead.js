const CalificacionesHead = ({evaluacionesLength}) => {

    let thead = [];

    thead.push(<th key={"chae"}>A-E</th>);

    thead.push(<th key={"chn"}>Nombre</th>);

    for (let i = 0; i < evaluacionesLength; i++) {
        thead.push(<th key={"chev-" + i}>E<sub>{i}</sub></th>);
    }

    return <thead>{thead}</thead>;
};

export default CalificacionesHead;
