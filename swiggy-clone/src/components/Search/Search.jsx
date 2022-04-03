import React, { useEffect, useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {NavBar} from "../Home/Navbar/Navbar"
import axios from "axios";

function Search() {
  //main data
  const [foodItems, setFoodItems] = useState([]);

  //take data from input box
  const [query, setQuery] = useState("");

  //filter search data
  const [searchData, setSearchData] = useState([]);

  //fetching data
  const getData = async () => {
    await axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((resp) => {
        const data = resp.data.categories;
        console.log(data);
        setFoodItems(data);
      });
  };

  //call fetching data function
  useEffect(() => {
    getData();
  }, []);

  //show data
  useEffect(() => {
    // whenever the input field with change that accroding the search result will be showed
    let searchResults = foodItems.filter((item) => {
      const regex = new RegExp(`${query}`, "gi");
      return item.strCategory.match(regex);
    });

    setSearchData(searchResults);
  }, [query]);

  console.log("foodItems", foodItems);
  return (
    <>
    <NavBar></NavBar>
    <div>
      <div className="search_container">
        {/* Search Section */}
        <div className="search_main_container">
          {/* Merge Input Field and Show Result Section */}
          <div className="mergeContainer">
            <div className="inputField">
              <SearchIcon
                sx={{
                  fontSize: "1.6vw",
                }}
              />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search For Restaurants or Dishes"
              />
              <strong
                style={{
                  fontSize: "0.7vw",
                  color: "#fc8019",
                  display: "none",
                }}
                className="clearText"
              >
                CLEAR
              </strong>
            </div>

            {/* Disability Section */}
            <div className="show_result">
              {query.length > 0 ? (
                searchData.map((item, id) => {
                  return (
                    <div className="search_item" key={id}>
                      <div className="img_container">
                        <img src={item.strCategoryThumb} alt="" />
                      </div>
                      <div className="item_desc">
                        <h5>{item.strCategory}</h5>
                        <p>Dish</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="nothing"></div>
              )}
            </div>
          </div>

          <div className="cancelSearch">
            <button className="closeBtn">
              <CloseIcon
                sx={{
                  fontSize: "2.8vw",
                  fontWeight: "100",
                  border: "none",
                }}
              />
              <span>ESC</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Search;
