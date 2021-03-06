import React, { Component } from 'react'
import PropTypes from 'prop-types'

const fabric = window.fabric

export default class Circle extends Component {
  static propTypes = {
    canvas: PropTypes.object,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
  }

  static defaultProps = {
    top: 0,
    left: 200,
    radius: 5,
    fill: 'red',
    borderColor: 'red',
  }

  componentDidMount() {
    const circle = new fabric.Circle(this.props)
    this.props.canvas.add(circle)
    circle.on('selected', function () {
      var click = 'shaped is clicked on: true'
      alert(click)
    })
    circle.on('deselected', function () {
      var click = 'shaped is clicked on: false'
      alert(click)
    })
  }
  render() {
    return null
  }
}
