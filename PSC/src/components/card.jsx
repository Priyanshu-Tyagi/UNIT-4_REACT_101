import Image from "./image";
import Details from "./details";
import { OrderButton } from "./orderbutton";
import Rating from "./rating";

export default function Card({ data }) {
  const {
    name,
    id,
    cuisine,
    costForTwo,
    minOrder,
    deliveryTime,
    payment_methods,
    rating,
    votes,
    reviews,
    src
  } = data;
  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <div style={{ display: "flex",justifyContent:"space-between" }}>
        <div>
          <Image src={src} />
        </div>
        <div style={{ felx: 3 }}>
          <Details
            priceForTwo={costForTwo}
            minPrice={minOrder}
            time={deliveryTime}
            title={name}
            cuisine={cuisine}
            Card={payment_methods.card}
            cash={payment_methods.cash}
          />
        </div>
        <div>
          <Rating rating={rating} votes={votes} reviews={reviews} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          border: "1px solid lightgray",
          borderBottomLeftRadius: "0.25rem",
          borderBottomRightRadius: "0.25rem",
          height: "2rem",
          alignItems: "center",
          marginBottom: "1rem"
        }}
      >
        <OrderButton />
      </div>
    </div>
  );
}
