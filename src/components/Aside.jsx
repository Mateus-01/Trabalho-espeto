
import EspetoIcon from "../assets/espeto-icon.png"
export default function Aside(props) {
    return (
        <div className="card-categoria-mobile">
            <img
                className="img-card-mobile"
                src={props.href}
                alt={props.alt}
            />
            <p>{props.title}</p>
            <button className="btn-card">&#62;</button>
        </div>
    )
}