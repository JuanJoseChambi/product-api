import { useState } from "react";
import { EditProductState, Products } from "../../interfaces/interfaces"
const {VITE_PRESET_KEY, VITE_CLOUD_NAME} = import.meta.env

interface ArrayMap {
    array: Products[];
    state:EditProductState;
    setEditProduct:React.Dispatch<React.SetStateAction<EditProductState>>;
    handlerEditProduct:(id:string) => void;
    handlerDeleteProduct:(id:string) => void;
}

function Cards({array, state, setEditProduct, handlerEditProduct, handlerDeleteProduct}:ArrayMap) {

  const [edit, setEdit] = useState<string | null>(null)

  const URL = `https://api.cloudinary.com/v1_1/${VITE_CLOUD_NAME}/image/upload`;

  async function handlerUploadImage (e:React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return null;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", VITE_PRESET_KEY);
    const response = await fetch(URL, {
      method:"POST",
      body:formData
    });
    if (!response.ok) {
      throw new Error(`Error uploading image: ${response.status}`);
    }

    const responseData = await response.json();
    setEditProduct({ ...state, image: responseData.secure_url });
  }


  return (
    <>
    {Array.isArray(array) ? array.map((product, i) => (
        <section key={product._id} className="w-[300px] min-h-[400px] relative flex flex-col justify-evenly items-start p-2 m-2 bg-redd-500">
          <button onClick={() => { 
            if(edit) {
              setEdit(null); 
              handlerEditProduct(product._id)
            }else{
            setEdit(product._id)
            }}} 
            className="absolute top-2 right-2 text-xl">{edit === product._id?<i className='bx bx-check' ></i>:<i className='bx bx-edit-alt'></i>}</button>
            <button className="absolute top-2 left-2 text-xl" onClick={() => handlerDeleteProduct(product._id)}><i className='bx bx-trash' ></i></button>
          <picture className="w-full h-[150px] flex justify-center items-center overflow-hidden bg-blued-500">
              <img className="w-[50%] object-cover" src={product.image} alt="Image Not Found" ></img>
          </picture>
          {edit === product._id ? <input className="text-xs w-full" onChange={handlerUploadImage} type="file" /> : null}

          {edit === product._id 
          ?( 
          <>
            <input type="text" onChange={(e) => setEditProduct({...state, name:e.target.value?e.target.value:product.name})} className="font-semibold text-xl" placeholder={`${product.name}`}/>
            <input type="text" onChange={(e) => setEditProduct({...state, stock:e.target.value?Number(e.target.value):product.stock})} className="font-semibold text-xl" placeholder={`${product.stock}`}/>
          </>) 
          : <h1 key={product._id} className="font-semibold text-xl">{product.name} | {product.stock}</h1>}

          {edit === product._id 
          ? ( 
          <section className="flex justify-center items-center">
            <input type="text"  onChange={(e) => setEditProduct({...state, brand:e.target.value?e.target.value:product.brand})} className="w-[90px] flex justify-start items-center text-xs font-light" placeholder={`B: ${product.brand}`}/>
            <input type="text"  onChange={(e) => setEditProduct({...state, category:e.target.value?e.target.value:product.category})} className="w-[90px] flex justify-start items-center text-xs font-light" placeholder={`C: ${product.category}`}/>
            <input type="text"  onChange={(e) => setEditProduct({...state, type:e.target.value?e.target.value:product.type})} className="w-[90px] flex justify-start items-center text-xs font-light" placeholder={`T: ${product.type}`}/>
          </section>)  
          : <p className="flex justify-start items-center text-xs font-light">M:{product.brand} | C:{product.category} | T:{product.type}</p>}

          {edit=== product._id ? <textarea onChange={(e) => setEditProduct({...state, description:e.target.value?e.target.value:product.description})} className="text-sm font-light w-full max-h-[100px] bg-blued-500" placeholder={product.description}></textarea> : <p className="text-sm font-light">{product.description}</p>}

          {edit === product._id 
          ? ( 
          <section className="flex justify-center items-center">
            <input 
            type="text" 

            onChange={(e) => {
              const valueInArrays = e.target.value?e.target.value.split(","):product.sizes;
              setEditProduct({...state,sizes:valueInArrays}) 
            }}  

            className="w-[90px] flex justify-start items-center text-xs font-light" 
            placeholder={`${product.sizes.map((size) => size)}`}/>
            <input 
            type="text" 

            onChange={(e) => {
              const valueInArrays = e.target.value?e.target.value.split(","):product.available_colors;
              setEditProduct({...state,availeble_colors:valueInArrays}) 
            }} 

            className="w-[90px] flex justify-start items-center text-xs font-light" 
            placeholder={`${product.available_colors.map((color) => color)}`}/>
          </section>) 
          : <span className="flex justify-start items-center text-xs font-light">{product.sizes.map((size) => (<p key={size} className="mx-1">{size}</p>))} | {product.available_colors.map((color) => (<p key={color} className="mx-1">{color}</p>))}</span>}

          {edit === product._id ? <input type="text" onChange={(e) => setEditProduct({...state, price:e.target.value?Number(e.target.value):product.price})} placeholder={`${product.price}`}/> :<p className="font-medium text-xm">Price : {product.price} | Card {i+1}</p>}
        </section>
      )):null}
    </>
  )
}

export default Cards
