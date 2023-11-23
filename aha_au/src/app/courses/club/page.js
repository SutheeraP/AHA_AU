import React from "react";
import Maincourse from "../Maincourse";

export default function page() {
  const content = (
    <div className="grid md:grid-cols-2">
      <div> club </div>
      <div> card2 </div>
      <div> card3 </div>
      <div> card3 </div>
      <div> card3 </div>
      <div> card3 </div>
    </div>
  );
  
  return (
    <>
      <Maincourse content={content}/>
    </>
  );
}
