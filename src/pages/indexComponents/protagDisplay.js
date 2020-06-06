import React, { Component } from "react"
import { Card, CardContent, CardActions, Button } from "@material-ui/core"

export default class ProtagDisplay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      protagList: [
        "Wizard",
        "Professor",
        "Farmer",
        "Student",
        "Surfer",
        "Shaman",
      ],
      chosenProtag: "",
    }
  }

  hanndleClick = () => {
    let protagChosenFromList = this.state.protagList[
      Math.floor(Math.random() * this.state.protagList.length)
    ]

    this.setState({ chosenProtag: protagChosenFromList })
  }

  render() {
    return (
      <Card>
        <CardContent>
          {this.state.chosenProtag ? (
            <h1
              style={{ textAlign: "center" }}
              name="chosenProtag"
              id="protagDisplay"
            >
              {this.state.chosenProtag}
            </h1>
          ) : (
            <h1>Protagonist</h1>
          )}
        </CardContent>
        <CardActions>
          <Button
            style={{ marginLeft: "auto", marginRight: "auto" }}
            aria-label="choose a protagonist"
            size="large"
            color="primary"
            onClick={this.hanndleClick}
          >
            Choose
          </Button>
        </CardActions>
      </Card>
    )
  }
}
