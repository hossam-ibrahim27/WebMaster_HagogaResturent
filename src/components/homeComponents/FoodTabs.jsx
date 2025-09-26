import "../../../src/css/homeComponents/MainSection.css"
import "../../../src/css/homeComponents/FoodTabs.css"

const FoodTabs = (props) => {
    // console.log(typeof props.id);
    // console.log(typeof props.foodsprice);
    //* Props Will Return Object So We Must Convert To Array
    const food = Array.from(props.foodsprice);
    return (
        <div className="food-card">
            {
                food.map((element, index) => {
                    return (
                        <div key={index} className="food-discrip">
                            <div className="overlay">
                                <div>
                                    <img src={element.src} alt={element.label} />
                                </div>
                                <div className="price">
                                    <h2>{element.label}</h2>
                                    <span>{element.price} جنية</span>
                                </div>
                            </div>

                        </div>
                    );
                })
            }
        </div>
    );
}
export default FoodTabs;