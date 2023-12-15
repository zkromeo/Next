import React from "react";
import Image from "next/image";

export default function Product(props) {
    return (
        <div className="card">
            <Image className="product--image" src={props.url} alt="product image" />
            <h2>{props.name}</h2>
            <p className="price">{props.price}</p>
            <p>{props.description}</p>
            <p>
                <button>Add to Cart</button>
            </p>
        </div>
    );
}