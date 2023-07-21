import { FruitCard } from "../FruitCard"

export const ListFruit = ({ fruitList }) => {
    return(
        <ul>
            {fruitList.map(fruit => {
                return(
                    <FruitCard key={fruit.id} fruit={fruit} />
                )
            })}
        </ul>
    )
}