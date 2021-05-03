import React from 'react';
import fire from "../Fire";

function Admin(){

    const [fireplace, setFireplace]=React.useState([]);
    const [submit, setSubmit]=React.useState(true);
    const [form, setForm]=React.useState({
    })

    const db = fire.firestore();

    React.useEffect(()=>{
        let newItems=[];

        db.collection("fireplace").get().then(function(snapshot){
            snapshot.forEach(function(doc){
                const obj = doc.data();

                let item = {
                    id: doc.id,
                    type:obj.type,
                    price:obj.price,
                    stock:obj.stock,
                    image:obj.image
                };

                console.log(obj);

                newItems.push(item);
            });

            setFireplace(newItems)
        });

        console.log()

    },[db,submit]);

    const handleChange = prop => event =>{
        setForm({
            ...form,
            [prop]:event.target.value
        })
    };

    const handleSubmit = ()=>{
        db.collection("fireplace").add(form).then(() => {
            setForm({
                type:"",
                price:"",
                stock: "",
                image:""
            });
            setSubmit(!submit)
        });
    }

    const handleDelete=(id)=>{
        db.collection("fireplace").doc(id).delete().then(()=>{
            setSubmit(!submit);
        })
    }

    const fireplaceEles = fireplace.map((alb, idx)=>
        <div key={idx} onClick={()=>handleDelete(alb.id)}>
            <h1>{alb.type}</h1>
            <h3>{alb.price}</h3>
            <h3>{alb.stock}</h3>
            <h3>{alb.image}</h3>
        </div>
    );

    return(
        <div>
            <h1>Administration Only.  Need to add product?</h1>
            {fireplaceEles}
            <input type="text" placeholder={"Fireplace Type..."} onChange={handleChange("type")}/>
            <input type="text" placeholder={"Price..."} onChange={handleChange("price")}/>
            <input type="text" placeholder={"In Stock..."} onChange={handleChange("stock")}/>
            <input type="text" placeholder={"Image..."} onChange={handleChange("image")}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Admin;