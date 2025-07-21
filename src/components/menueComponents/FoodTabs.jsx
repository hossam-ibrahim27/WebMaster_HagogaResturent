import "../../css/menueComponents/FoodTabs.css"
const FoodTabs = (props) => {
    //* Props Will Return Object So We Must Convert To Array
    const food = Array.from(props.foodsprice);
    return (
        <div className="menue-page food-cards">
            {
                food.map((element, index) => {
                    return (
                        <div key={index} className="food-discription">
                            <div className="img-body">
                                <img src={element.src} alt={element.label} />
                            </div>
                            <div className="price">
                                <h2>{element.label}</h2>
                                <span>{element.price} جنية</span>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default FoodTabs;