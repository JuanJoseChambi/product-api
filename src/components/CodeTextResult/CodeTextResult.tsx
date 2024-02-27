interface CodeTextResultProp {
    obect?:boolean;
    custom?:boolean;
    id?:string;
    name?:string;
    image?:string;
    description?:string;
    brand?:string;
    price?:string;
    category?:string;
    type?:string;
    stock?:string;
}

function CodeTextResult({obect, custom, id, name, image, description, price, category, type, stock}:CodeTextResultProp) {
  return (
    <> 
            <span className="text-pinkCode">"results":</span><span className="text-grayCode"> {obect ? `{` : '['}</span><br />
            {obect ? null : <span className="corchete">   {'{'}</span>}
            <span className="text-pinkCode">    "_id": </span><span className="text-greenCode">"{custom? id :"6586177c054c7b7c9fee808c"}",</span><br />

            <span className="text-pinkCode">    "name": </span><span className="text-greenCode">"{custom? name : "Zapatillas Deportivas Nike Air Max"}",</span><br />
            <span className="text-pinkCode">    "image": </span><span className="text-greenCode">"{custom? `https://example.com/${image}.jpg` :"https://example.com/zapatillas.jpg"}",</span><br />
            <span className="text-pinkCode">    "description": </span><span className="text-greenCode">"{custom?description :`Zapatillas deportivas de alta gama con tecnología Air Max para una máxima \n    comodidad y rendimiento.`}",</span><br />
            {/* <span className="text-pinkCode">    "brand": </span><span className="text-greenCode">"{custom? brand: "Nike"}",</span><br /> */}
            <span className="text-pinkCode">    "price": </span><span className="text-orangeCode">{custom? price: "129.99"},</span><br />
            <span className="text-pinkCode">    "category": </span><span className="text-greenCode">"{custom?category:"Calzado Deportivo"}",</span><br />
            <span className="text-pinkCode">    "type": </span><span className="text-greenCode">"{custom?type:"Ropa"}",</span><br />
            <span className="text-pinkCode">    "stock": </span><span className="text-orangeCode">{custom?stock:"100"},</span><br />
            <span className="text-pinkCode">    "available_colors": </span><span className="text-grayCode">{`[`}</span><br />
            <span className="text-orangeCode">      "Azul Marino",</span><br />
            <span className="text-orangeCode">      "Gris",</span><br />
            <span className="text-orangeCode">      "Blanco",</span><br />
            <span className="corchete">     {`]`},</span>
            <span className="text-pinkCode">    "size": </span><span className="text-grayCode">{`[`}</span><br />
            <span className="text-orangeCode">      "XS",</span><br />
            <span className="text-orangeCode">      "S",</span><br />
            <span className="text-orangeCode">      "M",</span><br />
            <span className="text-orangeCode">      "L",</span><br />
            <span className="corchete">     {`]`},</span>
            <span className="text-pinkCode">    "createdAt": </span><span className="text-greenCode">"2023-12-22T23:10:52.971Z",</span><br />
            <span className="text-pinkCode">    "updatedAt": </span><span className="text-greenCode">"2023-12-22T23:10:52.971Z",</span><br />
            {obect ? null : (<span className="corchete">   {'}'},</span>)}
            {obect ? null : (<span className="corchete">   //  ... </span>)}
            <span className="corchete"> {obect ? `}` : ']'} {obect ? null : ","}</span>
    </>
  )
}

export default CodeTextResult