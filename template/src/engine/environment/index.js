const THREE = require('three')
const $ = require('jquery')
const OrbitControls = require('three-orbit-controls')(THREE)
const WindowResize = require('three-window-resize')

class Environment {

  constructor () {
    this.scene = new THREE.Scene()

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000)
    this.camera.position.z = 5

    this.controls = new OrbitControls(this.camera)

    this.renderer = new THREE.WebGLRenderer({alpha: true, canvas: $('#three-canvas')[0]})
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setClearColor(0xffffff, 1)

    const windowResize = new WindowResize(this.renderer, this.camera)
    console.log({ windowResize })

    this._addCubeToScene()
  }

  render () {
    this._updateCube()
    this.renderer.render(this.scene, this.camera)
  }

  // 'private'

  _addCubeToScene () {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)
  }

  _updateCube () {
    this.cube.rotation.x += 0.1
    this.cube.rotation.y += 0.1
  }

}

module.exports = Environment
