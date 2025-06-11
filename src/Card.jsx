import "./Card.css";
function Card(props) {
  return (
    <>
      <div className="main shadow-2xl p-4 rounded-2xl">
        <img className="h-50 rounded-full " src={props.src} alt="" />

        <h1 className="text-center font-bold text-lg">{props.name}</h1>
        <p className="w-50 text-center text-justify">{props.bio}</p>
      </div>
    </>
  );
}
export default Card;
