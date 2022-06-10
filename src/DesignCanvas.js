import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

const fabric = window.fabric

export default class DesignCanvas extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    objectCaching: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    width: 1000,
    height: 800,
    objectCaching: false,
  }

  state = {
    canvas: null,
  }

  componentDidMount() {
    const canvas = new fabric.Canvas(this.c)
    this.setState({ canvas })
  }
  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        canvas: this.state.canvas,
      })
    })
    const { width, height } = this.props
    return (
      <Fragment>
        <canvas ref={(c) => (this.c = c)} width={width} height={height} />
        {this.state.canvas && children}
        <button
          onClick={(e) => {
            e.preventDefault()
            console.log(this.state.canvas.toJSON())
          }}
        >
          To JSON
        </button>
      </Fragment>
    )
  }
}
