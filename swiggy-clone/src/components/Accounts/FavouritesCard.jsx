import React from "react";

export const FavouritesCard = () => {
  return (
    <div>
      <div className="FavouritesCardDiv">
        <div className="FavouritesCardDiv1">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_207/empty_favorites_2x_sdbuxy"
            alt="img"
            style={{ height: "207px" }}
          />
          <div className="FavouritesCardDiv2">Where is the love?</div>
          <div className="FavouritesCardDiv3">
            Once you favourite a restaurant, it will appear here.
          </div>
        </div>
      </div>
    </div>
  );
};
