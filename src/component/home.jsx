import React from "react";
import { basicComponent } from "../helper/helper";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Home = ({ props }) => {
  const classes = useStyles();
  const handlePushState = item => {
    console.log("item", item);
    const { history } = props;
    history.push({
      pathname: item.path
    });
  };
  return (
    <React.Fragment>
      {basicComponent.map(item => (
        <div className="inline-block card-container" key={item.id}>
          <Card
            className={classes.card}
            onClick={() => handlePushState(item)}
          >
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {item.component}
              </Typography>
            </CardContent>
            <CardActions>Note - {item.note}</CardActions>
          </Card>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Home;
