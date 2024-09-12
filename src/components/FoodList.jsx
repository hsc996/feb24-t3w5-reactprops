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
            {foods.map(food => {
                return <p>{food}</p>
            })}
        </section>
    )
}