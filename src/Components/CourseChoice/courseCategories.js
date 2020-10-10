import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Action from "../../Redux/action";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CourseWrapper from "./courseWrapper";
import CourseCard from "./courseCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function CourseCategories(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [category, setCategory] = React.useState("BackEnd");
  // Get id to set to tab content
  const [categoryID, setCategoryID] = React.useState(0);

  useEffect(() => {
    props.getCourseCategories();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    props.getCourseByCategory(category);
  }, [category]);

  const renderTabHeader = () => {
    if (props.courseCategories) {
      return props.courseCategories.map((item, index) => {
        return (
          <Tab
            key={index}
            label={item.categoryName}
            {...a11yProps(index)}
            onClick={() => {
              setCategory(item.categoryID);
              setCategoryID(index);
            }}
          />
        );
      });
    }
  };

  const renderTabContent = () => {
    if (props.courseByCategory && props.courseByCategory.length > 0) {
      return props.courseByCategory.map((item, index) => {
        return <CourseCard key={index} courseInfo={item} />;
      });
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {renderTabHeader()}
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={categoryID}>
        {props.courseByCategoryErr === null ? (
          <CourseWrapper value={renderTabContent()} />
        ) : (
          "This category doesn't have any course yet"
        )}
      </TabPanel>
    </div>
  );
}

const mapStateToProps = (state) => ({
  courseCategories: state.courseReducer.courseCategories,
  courseByCategory: state.courseReducer.courseByCategory,
  courseByCategoryErr: state.courseReducer.courseByCategoryErr,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCourseCategories: () => {
      dispatch(Action.actGetCourseCategory());
    },
    getCourseByCategory: (category) => {
      dispatch(Action.actGetCourseByCategory(category));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseCategories);
