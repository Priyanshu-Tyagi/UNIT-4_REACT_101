export default function Image({ alt, src }) {
  return (
    <div>
      <img
        alt={alt}
        src={src}
        style={{
          objectFit: "cover",
          borderRadius: "0.5rem",
          height: "100px",
          width: "120px"
        }}
      />
    </div>
  );
}
