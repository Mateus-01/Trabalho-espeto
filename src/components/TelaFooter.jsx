export default function TelaFooter(props) {
    return (
      <footer className="box-ingredientes">
        {props.ingredientes && props.ingredientes.map((ingrediente, index) => (
          <div key={index} className="card-ingredientes">
            <img src={ingrediente.src} alt={ingrediente.alt} />
          </div>
        ))}
      </footer>
    );
  }