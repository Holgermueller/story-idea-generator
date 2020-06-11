import React, { Component } from "react"
import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Avatar,
} from "@material-ui/core"
import { IoMdPerson } from "react-icons/io"

export default class ProtagDisplay extends Component {
  constructor(props) {
    super(props)

    this.state = {
      protagList: [
        "Magician",
        "Professor",
        "Farmer",
        "Student",
        "Surfer",
        "Shaman",
        "Jester",
        "Orphan",
        "Explorer",
        "Creator",
        "Lover",
        "Ruler",
        "Caregiver",
        "Warrior",
        "Child",
        "Rebel",
        "Seducer",
        "Thief",
        "Troubadour",
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
        <CardHeader
          style={{ background: `#66fcf1` }}
          avatar={
            <Avatar style={{ backgroundColor: `black` }}>
              <IoMdPerson />
            </Avatar>
          }
          title="Protgonist"
        />
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
            <h1 style={{ textAlign: "center" }}>Protagonist</h1>
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
            <IoMdPerson />
            Choose
          </Button>
        </CardActions>
      </Card>
    )
  }
}
