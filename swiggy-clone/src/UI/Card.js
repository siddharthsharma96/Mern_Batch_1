const Card = ({ resData }) => {
  return (
    <div className="card">
      <img
        alt="restaurant images"
        src={`/images/${resData?.info?.cloudinaryImageId}.avif`}
      />
      <div className="card__Data">
        <h3 className="card__Res__Name">{resData?.info?.name}</h3>
      </div>
    </div>
  );
};
export default Card;
