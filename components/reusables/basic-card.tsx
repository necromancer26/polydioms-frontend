import React from "react";

export default function BasicCard() {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-none lg:my-0 my-5">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Service!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary rounded-none">Learn More</button>
        </div>
      </div>
    </div>
  );
}
