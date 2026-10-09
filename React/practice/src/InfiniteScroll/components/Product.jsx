import { Button, Card } from "keep-react";

export default function Product({ title, thumbnail, price }) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-4 border m-4 rounded-lg shadow-md">
            <div>
                <img src={thumbnail} alt={title} />
            </div>
            <div>
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
        </div>
    );
}