import { Component } from 'react'
import PropTypes from 'prop-types'

const fabric = window.fabric

const canvas = new fabric.Canvas('c')

export default class Rect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true,
    }
  }
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
    rect.on('selected', function () {
      this.setState = {
        active: false,
      }
      canvas.renderAll()
      console.log('clicked')
    })

    this.props.canvas.add(rect)
  }
  render() {
    return <p>shape clicked: {this.state.active ? 'ON' : 'OFF'}</p>
  }
}
