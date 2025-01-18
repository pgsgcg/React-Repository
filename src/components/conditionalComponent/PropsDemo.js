function DisplayMessage(props) {
    return <h3>{props.name}</h3>;
  }
  
  function PropsDemo() {
    return (
      <div>
        <DisplayMessage name="Prabir Ghosh" />
        <DisplayMessage name="Renu Apartment" />
        <DisplayMessage name="1C, 166 Purba Putiary, Dakshin Para, Keorapukur Bazar" />        
      </div>
    );
  }

  export default PropsDemo;