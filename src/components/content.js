export default function Content (props) {
    if(props.data.length >0){
        return (
            props.data.map((val, index) =>
                <div className="box columns" key={index+Date.now()} >
                    <li className="column is-half">
                        {(index+1)+". "+ val}
                    </li>
                </div>
            )
        );
    }else{
        return(
            <div className='box'>
                <h3> Aucun élément</h3>
            </div>
        );
    }
}