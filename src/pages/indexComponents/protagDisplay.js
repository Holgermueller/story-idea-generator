import React from "react"
import { Card, CardContent, CardActions, Button } from "@material-ui/core"

const ProtagDisplay = () => (
  <Card>
    <CardContent>
      <h1>Protag</h1>
    </CardContent>
    <CardActions>
      <Button
        style={{ marginLeft: "auto", marginRight: "auto" }}
        aria-label="choose a protagonist"
        size="large"
        color="primary"
      >
        Choose
      </Button>
    </CardActions>
  </Card>
)

export default ProtagDisplay
