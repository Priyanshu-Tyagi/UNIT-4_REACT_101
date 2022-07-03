export default function Detials({
  priceForTwo,
  minPrice,
  time,
  title,
  cuisine,
  card = false,
  cash = false
}) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{cuisine.join(", ")}</div>
      <div>Cost ₹ {priceForTwo} for two </div>
      <div>
        Min ₹ {minPrice} • Up to {time} min
      </div>
      <div>
        Accepts {card && "Card"} {cash && "Cash"} payments only
      </div>
    </div>
  );
}
