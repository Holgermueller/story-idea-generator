import React, { Component } from "react"
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Avatar,
} from "@material-ui/core"
import { FaQuestionCircle } from "react-icons/fa"

export default class RandomWordDisplay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      randomWordList: [
        "cheese",
        "royal",
        "ocean",
        "world",
        "kingdom",
        "monster",
        "animal",
        "farm",
        "town",
        "relative",
      ],
      chosenRandomWord: "",
    }
  }

  handleClick = () => {
    let randomWordChosenFromList = this.state.randomWordList[
      Math.floor(Math.random() * this.state.randomWordList.length)
    ]

    this.setState({ chosenRandomWord: randomWordChosenFromList })
  }

  render() {
    return (
      <Card>
        <CardHeader
          style={{ background: `#66fcf1` }}
          avatar={
            <Avatar style={{ backgroundColor: `black` }}>
              <FaQuestionCircle />
            </Avatar>
          }
          title="Random Word"
        />
        <CardContent>
          {this.state.chosenRandomWord ? (
            <h1
              style={{ textAlign: "center" }}
              name="chosenProtag"
              id="protagDisplay"
            >
              {this.state.chosenRandomWord}
            </h1>
          ) : (
            <h1
              style={{ textAlign: "center" }}
              name="chosenProtag"
              id="protagDisplay"
            >
              Random
            </h1>
          )}
        </CardContent>
        <CardActions>
          <Button
            style={{ marginLeft: "auto", marginRight: "auto" }}
            aria-label="choose a random word"
            size="large"
            color="primary"
            onClick={this.handleClick}
          >
            <FaQuestionCircle />
            Choose
          </Button>
        </CardActions>
      </Card>
    )
  }
}
