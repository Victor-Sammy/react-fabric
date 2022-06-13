import { Component } from 'react'
import PropTypes from 'prop-types'

const fabric = window.fabric

export default class Rect extends Component {
  static propTypes = {
    canvas: PropTypes.object,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
    stroke: PropTypes.string.isRequired,
    strokeDashArray: PropTypes.array.isRequired,
    objectCaching: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    top: 200,
    left: 0,
    width: 50,
    height: 50,
    fill: 'blue',
    moveCursor: 'pointer',
    stroke: 'red',
    strokeDashArray: [5, 5],
    objectCaching: false,
  }

  componentDidMount() {
    const rect = new fabric.Rect(this.props)
    this.props.canvas.add(rect)
    rect.on('selected', function () {
      var click = 'shaped is clicked on: true'
      alert(click)
    })
    rect.on('deselected', function () {
      var click = 'shaped is clicked on: false'
      alert(click)
    })
  }
  render() {
    return null
  }
}
