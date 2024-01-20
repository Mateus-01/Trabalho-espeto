
export default function Aside(props){
    return(
        <div className="card-categoria-mobile">
            <img
                className="img-card-mobile"
                src={process.env.PUBLIC_URL + props.href}
                alt={props.alt}
            />
            <p>{props.title}</p>
            <button className="btn-card">&#62;</button>
        </div>
    )
}