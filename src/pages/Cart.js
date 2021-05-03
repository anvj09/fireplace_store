import React from 'react';
import fire from "../Fire";

function Cart(){
    const [fireplace, setFireplace] = React.useState([]);
    const db = fire.firestore();
    const [submit, setSubmit] = React.useState(true)

    React.useEffect(()=>{
        let newItems=[];

        db.collection("Cart").get().then(function(snapshot){
            snapshot.forEach(function(doc){
                const obj = doc.data();

                let item = {
                    id: doc.id,
                    name:obj.name,
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

    },[db, submit]);

    const handleDelete=(id)=>{
        db.collection("Cart").doc(id).delete().then(()=>{
            setSubmit(!submit);
        })
    }
    const buy=()=>{
        db.collection("Cart").get().then(function(snapshot){
            snapshot.forEach(function(doc){
                doc.ref.delete().then(()=>{
                    setSubmit(!submit);
                });
            });
        });
    }

    const fireplaceEles = fireplace.map((fir, idx)=>
        <div key={idx} >
            <div><h1>{fir.name}</h1>
                <h3>{fir.price}</h3>
                <h3>{fir.stock}</h3>
                <img src = {fir.image} alt = "items"/>
            </div>
            <button onClick={()=>handleDelete(fir.id)}>Remove</button>
        </div>
    );

    return(
        <div>
            <div><h1>Your Cart</h1>
                {fireplaceEles}
            </div>
            <button onClick={buy}>Buy</button>
        </div>
    )
}
export default Cart;