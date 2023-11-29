import React from "react";

function Rulescontent({label, data}) {
  return (
    <div>
      <div className="border-y border-faded">
        <div className="md:px-40 px-4 py-4 text-lg">{label}</div>
        
      </div>
      <div  className="md:px-40 px-4 py-4 text-xs font-light mb-32">
            <ol className="list-decimal pl-4">
                {data.map((item) => (
                    <li className="py-2">{item}</li>
                ))}
            </ol>
        </div>
    </div>
  );
}

export default Rulescontent;
