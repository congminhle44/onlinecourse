import React, { Component } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: "",
    };
  }
  handleSearchItem = () => {
    let { courseList } = this.props;
    if (courseList) {
      return courseList
        .filter((item) => {
          return (
            item.tenKhoaHoc
              .toLowerCase()
              .indexOf(this.state.searchKey.toLowerCase()) > -1
          );
        })
        .map((item, index) => {
          return (
            <Link key={index} className="searchItem" to="/">
              <div className="item-image">
                <img src={item.hinhAnh} alt={item.biDanh} />
              </div>
              <div className="item-content">
                <h4>{item.tenKhoaHoc}</h4>
                <p>{item.moTa}</p>
              </div>
            </Link>
          );
        });
    }
  };
  render() {
    return (
      <div className="carousel">
        <div className="carousel-form">
          <h3>High speed learning</h3>
          <p>
            Strive for perfection and break through with classes starting at US
            $9.99. Promotion ends August 27.
          </p>
          <div className="searchWrapper">
            <div className="searchBar">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  this.setState({
                    searchKey: e.target.value,
                  });
                }}
                onBlur={() => {
                  this.setState({ searchKey: "" });
                }}
                onFocus={(e) => {
                  this.setState({ searchKey: e.target.value });
                }}
              />
              {this.state.searchKey !== "" ? (
                <div className="searchResult">{this.handleSearchItem()}</div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="carousel_img">
          <img src="../images/carousel.png" alt="carousel" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courseList: state.courseReducer.courseList,
});
export default connect(mapStateToProps, null)(Carousel);
