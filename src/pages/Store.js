import React from 'react';
import fire from "../Fire";
//import PopUp from "../component/PopUp";
//import style from "../style/style";
//import {Link} from "react-router-dom";
//import Box from "../component/Box";


function Store (){

        const [popUp, setpopUp] = React.useState(true);
        const [fireplace, setFireplace] = React.useState([]);
        const db = fire.firestore();


        React.useEffect(()=>{
              let newItems=[];

              db.collection("fireplace").get().then(function(snapshot){
                      snapshot.forEach(function(doc){
                              const obj = doc.data();

                              let item = {
                              id: doc.id,
                              type:obj.type,
                              price: obj.price,
                              stock:obj.stock,
                              image:obj.image
                              };

              console.log(obj);

              newItems.push(item);
              });

             setFireplace(newItems)
             });

             console.log()

        },[db]);

                function visible () {
                        setpopUp(!popUp);
                }

                function add (fireplace) {
                        db.collection("Cart").add(fireplace).then(() => {
                                console.log(fireplace);
                        });
                }

                const fireplaceEles = fireplace.map((fir, idx)=>
                    <div key={idx} onClick={visible}>
                            <div><h1>{fir.type}</h1>
                                <img src = {fir.image} alt = "Fireplace Products"/>
                                <h3>{fir.price}</h3>
                                <h3>{fir.stock}</h3>

                            </div>
                        {popUp===false && <div className={"PopUp"} >Item Details</div>}
                        <button onClick={()=>add(fir)}>Add to cart</button>
                    </div>
                );

                return(
                    <div>
                            <header>
                                    <h1>Warm up by one of our fireplaces</h1>
                            </header>
                            {fireplaceEles}
                    </div>
                )
        }
export default Store;