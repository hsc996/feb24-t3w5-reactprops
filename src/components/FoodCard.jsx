export default function FoodCard(props) {
    const {foodName, indexKey} = props
    return(
        <div key={indexKey}>
            <h3>{foodName}</h3>
            <p>{props.foodName}</p>
        </div>
    )
}