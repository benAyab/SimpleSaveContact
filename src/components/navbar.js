
export default function Navbar(props){
    const onchange = (e) => props.handleChange(e.target.value);

    const onadd = (e) => {
        let v = props.value;
        if(v && (v !== "") ){
            props.handleAdd(v.trim());
        }
    }

    return (
        <section className="box">
            <nav className="level">
                <div className="level-left">
                    <div className="level-item">
                        <div className="field has-addons">
                            <p className="control">
                                <input className="input" type="text" placeholder={props.indication} value={props.value} onChange={onchange} />
                            </p>
                            <p className="control">
                                <button className="button is-primary" onClick={onadd} >
                                    <span className="icon-text">
                                        <span className="icon">
                                            <i className="feather-plus"></i>
                                        </span>
                                        <span>
                                            Ajouter
                                        </span>
                                    </span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}