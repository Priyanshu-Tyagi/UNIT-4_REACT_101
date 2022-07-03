export default function Rating({ rating, votes, reviews }) {
  return (
    <div>
      <div
        style={{
          borderRadius: "0.25rem",
          backgroundColor: "green",
          fontWeight: "900",
          padding: "3px 5px",
          color: "white"
        }}
      >
        {rating}
      </div>
      <div>{votes} votes</div>
      <div>{reviews} reviews</div>
    </div>
  );
}
