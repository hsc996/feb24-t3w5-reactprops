import FoodCard from "./FoodCard";

let foods = [
    "Gnocchi",
    "Toasted Sandwich",
    "Canned Spaghetti",
    "Takoyaki",
    "KFC",
    "Sushi",
    "Bananas"
];

export default function FoodList() {
    return(
        <section>
            {foods.map((food, index) => {
                return <FoodCard indexKey={index} foodName={food}/>
            })}
        </section>
    )
}