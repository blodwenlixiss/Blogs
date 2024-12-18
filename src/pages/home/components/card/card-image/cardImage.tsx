export const CardImage = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="mb-5">
      <img
        className="rounded-lg w-full h-40 object-cover"
        src={imageUrl}
        alt=""
      />
    </div>
  );
};
