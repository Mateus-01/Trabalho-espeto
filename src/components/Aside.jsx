export default function Aside(props){
    return(
        <div className="card-categoria-mobile">
            <img
             src={props.img}
             alt={props.alt}
            />
            <p>{props.title}</p>
            <button className="bnt-card">&#62;</button>
        </div>
    )
}