import React from "react";

function Card({ children, reverse }) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
  //   return (
  //     <div
  //       className="card"
  //       style={{
  //         backgroundColor: reverse ? "rgba(0,0,0,0.4" : "#FFF",
  //         color: reverse ? "#FFF" : "#000",
  //       }}
  //     >
  //       {children}
  //     </div>
  //   );
}

Card.defaultProps = { reverse: false };

export default Card;
