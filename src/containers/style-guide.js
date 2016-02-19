import React, { Component } from 'react'
import zooids from 'zooids'

export default class StyleGuide extends Component {
  render() {
    console.log(zooids);
    return <div>
      <h1>Zooids, The Style Guide</h1>
      <h2>App Bar</h2>
      <AppBar />
    </div>
  }
}
