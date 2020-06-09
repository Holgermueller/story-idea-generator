import React, { Component } from "react"
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
} from "@material-ui/core"

export default class RandomWordDisplay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      randomWordList: ["cheese", "princess", "ocean"],
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
        <CardHeader title="Random Word" />
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
            Choose
          </Button>
        </CardActions>
      </Card>
    )
  }
}
