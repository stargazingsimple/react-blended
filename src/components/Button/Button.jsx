export const Button = ({ loadMore }) => {
  return (
    <button
      type="button"
      onClick={loadMore}
      style={{ display: "block", margin: "0 auto", marginTop: "20px" }}
    >
      Load more
    </button>
  );
};
