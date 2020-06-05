import React from "react"
import { Card, CardContent, CardActions, Button } from "@material-ui/core"

const ActionDisplay = () => (
  <Card>
    <CardContent>
      <h1>Action</h1>
    </CardContent>
    <CardActions>
      <Button
        style={{ marginLeft: "auto", marginRight: "auto" }}
        aria-label="choose an action"
        size="large"
        color="primary"
      >
        Choose
      </Button>
    </CardActions>
  </Card>
)

export default ActionDisplay
