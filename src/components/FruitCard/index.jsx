export const FruitCard = ({ fruit }) => {
    return(
        <li>
            <h1>Name: {fruit.name}</h1>

            <p>Category: {fruit.category}</p>

            <p>Price: {fruit.price}</p>  
        </li>
    )
}