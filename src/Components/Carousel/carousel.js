import React, { Component } from "react";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
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
            item.courseName
              .toLowerCase()
              .indexOf(this.state.searchKey.toLowerCase()) > -1
          );
        })
        .map((item, index) => {
          return (
            <Link
              key={index}
              className="searchItem"
              to={`/course-info/course=${item._id}`}
            >
              <div className="item-image">
                <img src={item.courseImage} alt={item.courseName} />
              </div>
              <div className="item-content">
                <h4>{item.courseName}</h4>
                <p>{item.courseDescription}</p>
              </div>
            </Link>
          );
        });
    }
  };
  render() {
    return (
      <div className="carousel desktop">
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
                value={this.state.searchKey}
                onFocus={(e) => {
                  this.setState({ searchKey: e.target.value });
                }}
              />
              {this.state.searchKey !== "" ? (
                <FontAwesomeIcon
                  onClick={() => {
                    this.setState({ searchKey: "" });
                  }}
                  className="delAllText"
                  icon={faTimes}
                />
              ) : null}
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
