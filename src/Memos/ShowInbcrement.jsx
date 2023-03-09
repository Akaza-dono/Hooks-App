export const ShowInbcrement = ({ increment }) => {
    console.log('dasdas')
  return (
    <>
      <button className="btn btn-primary" 
              onClick={() => increment(5)}>
        incremetar
      </button>
    </>
  );
};
