import React, { Component } from "react"
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Avatar,
} from "@material-ui/core"
import { FaRunning } from "react-icons/fa"

export default class ActionDisplay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      actionList: [
        "saves",
        "destroys",
        "eats",
        "discovers",
        "learns",
        "marries",
        "defeats",
        "achieves",
        "loses",
        "restores",
        "fixes",
      ],
      chosenAction: "",
    }
  }

  handleClick = () => {
    let actionChosenFromList = this.state.actionList[
      Math.floor(Math.random() * this.state.actionList.length)
    ]

    this.setState({ chosenAction: actionChosenFromList })
  }

  render() {
    return (
      <Card>
        <CardHeader
          style={{ background: `#66fcf1` }}
          avatar={
            <Avatar style={{ backgroundColor: `black` }}>
              <FaRunning />
            </Avatar>
          }
          title="Action"
        />
        <CardContent>
          {this.state.chosenAction ? (
            <h1
              style={{ textAlign: "center" }}
              name="chosenProtag"
              id="protagDisplay"
            >
              {this.state.chosenAction}
            </h1>
          ) : (
            <h1
              style={{ textAlign: "center" }}
              name="chosenProtag"
              id="protagDisplay"
            >
              Action
            </h1>
          )}
        </CardContent>
        <CardActions>
          <Button
            style={{ marginLeft: "auto", marginRight: "auto" }}
            aria-label="choose an action"
            size="large"
            color="primary"
            onClick={this.handleClick}
          >
            <FaRunning />
            Choose
          </Button>
        </CardActions>
      </Card>
    )
  }
}
