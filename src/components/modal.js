export default function Modal (props) {
    const handleOverwrite = (val) =>{
        props.overwrite(val);
    }
  
    return (
        <div className="modal is-active">
            <div className="modal-background"> </div>
            <div className="modal-card">
                <div className="modal-card-title"> Attention </div>
                <div className="modal-card-body">
                    <p> Il ya {props.elements.length}  enregistrement(s) identique(s) à la ligne</p>
                    <p> {props.elements.join(", ")} </p>
                    <p> Enregistrer quand même ?</p>
                </div>
                <div className="modal-card-foot">
                    <div className="control">
                        <button className="button is-danger is-rounded" onClick={() => handleOverwrite(true)} > OUI</button>
                        <button  className="button is-light is-rounded" onClick={() => handleOverwrite(false)} > NON</button>
                    </div>
                </div>
            </div>

        </div>
    );
    
}