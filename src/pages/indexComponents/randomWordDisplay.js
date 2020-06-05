import React from "react"
import { Card, CardContent, CardActions, Button } from "@material-ui/core"

const RandomWordDisplay = () => (
  <Card>
    <CardContent>
      <h1>Random</h1>
    </CardContent>
    <CardActions>
      <Button
        style={{ marginLeft: "auto", marginRight: "auto" }}
        aria-label="choose a random word"
        size="large"
        color="primary"
      >
        Choose
      </Button>
    </CardActions>
  </Card>
)

export default RandomWordDisplay
