const ServiceItems = (props) => {
    //* Props Will Return Object So We Must Convert To Array
    const serviceItems = Array.from(props.serviceItems);
    // console.log(serviceItems);
    return (
        serviceItems.map((item, index) => {
            return (
                <div key={index} className="item">
                    <div className="image-frame">
                        <img src={item.src} alt={item.title} draggable="false" />
                        <div className="badge">{item.id}</div>
                    </div>
                    <div className="toggle">
                        <p>{item.title}</p>
                        <p>{item.discr}</p>
                    </div>
                </div>
            )
        })
    )
}
export default ServiceItems;