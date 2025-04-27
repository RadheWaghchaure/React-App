const Shimmer = ({ count = 10 }) => {
    return (
      <div className="shimmer-container">
        {Array.from({ length: count }).map((_, idx) => (
          <div className="shimmer-card" key={idx}>
            <div className="shimmer-logo"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text"></div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  