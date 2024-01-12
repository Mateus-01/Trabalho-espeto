
export default function Section(props) {
    return (
        <div className="cate-espetos">
            <h3>{props.title}</h3>
            <ul className={props.className}>{props.children}</ul>
        </div>
    )
}