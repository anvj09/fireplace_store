import React from "react";
import style from "../style/style";
import {Link} from 'react-router-dom';
import fire from "../Fire";

function Box(props){
    const [desc,setDesc] = React.useState([style.desc]);
    const [invis, vis] = React.useState(style.hide);
    const db = fire.firestore();

    React.useEffect(()=>{

         if(props.fir.stock > 10)
         {
            setDesc(style.desc2)
         }
         else{
             setDesc(style.desc)
         }

     }, [props.fir.stock]);

     function add (fireplace) {
         db.collection("Cart").add(fireplace).then(() => {
             console.log(fireplace);
         });
     }

     return (
         <Link to={`/product/${props.fir.name}`} onClick={()=>vis(style.show)}>
             <div style={style.Box}>
                 <img alt={""} style={style.image} src={props.fir.image}/>
                 <div style={desc}>
                     <ul>
                         <li>Name: {props.fir.name}</li>
                         <li style={invis}>Stock: {props.fir.stock}</li>
                         <li style={invis}>Price: {props.fir.price}</li>
                     </ul>
                     <button onClick={()=>add(props.fir)}> Add to cart  </button>
                 </div>
             </div></Link>
     )
 }
export default Box;