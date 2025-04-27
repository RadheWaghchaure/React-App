const RestaurantCard = (props) =>{
    const {restData} = props;
    const {brand_name, banner_image_es, description,main_offering} = restData;
    return(
      <div className="rest-card">
        {banner_image_es && <img className="rest-logo" alt="rest-logo" src={banner_image_es} />}
        <h3>{brand_name}</h3>
        <h4>{description}</h4>
        <h4>{main_offering}</h4>
        
      </div>
  
    )
  };

  export default RestaurantCard;
  