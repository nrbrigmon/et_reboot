import React, { Component } from 'react';
import * as THREE from 'three';

class ThreeDevPrototype extends Component {
    constructor(props) {
      super(props)
  
      this.start = this.start.bind(this)
      this.stop = this.stop.bind(this)
      this.animate = this.animate.bind(this)
    }
  
    componentDidMount() {
      const width = this.mount.clientWidth;
      const height = this.mount.clientHeight;
      
      const scene = new THREE.Scene()
     
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      }); 
      
      /*  new geometry section  */    
      let material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
      let group = new THREE.Group();
      
      //this.props.dimensions are the inputs from the USER
      let { sqft, z, landscaping, siteArea } = this.props.dimensions;
      let floorHeight = 1.5;
      
        var structureX = 0;
        var structureX2 = -3;
        var structureX3 = 3;
        var structureX4 = 6;
        var structureX5 = -6;
        var structureX6 = 8;
        var structureX7 = -8;
        var structureX8 = 11;

        var structureY = 0;  var numFloors = 1;
        var structureY4 = 0.75;  var numFloors4 = 2;
        var structureY5 = 1.5;  var numFloors5 = 3;
        var structureY2 = 2.25;  var numFloors2 = 4;
        var structureY6 = 3;  var numFloors6 = 5;
        var structureY7 = 3.75;  var numFloors7 = 6;
        var structureY8 = 4.5;  var numFloors8 = 7;
        var structureY3 = 5.25;  var numFloors3 = 8;

//x, y, z
var xWth = 5, yWth = numFloors*floorHeight, zWth = 5;
var structure = new THREE.Mesh( 
  new THREE.BoxGeometry( xWth, numFloors*floorHeight, zWth ),
  material );

var structureDepth = 0;
structure.position.set( structureX, structureY, structureDepth);
structure.rotation.y = 0.5;

var structure2 = new THREE.Mesh( 
  new THREE.BoxGeometry( xWth, numFloors2*floorHeight, zWth ),
  material );
structure2.position.set( structureX2, structureY2, structureDepth);
structure2.rotation.y = 0.5;
group.add( structure2 );

var structure3 = new THREE.Mesh( 
  new THREE.BoxGeometry( xWth, numFloors3*floorHeight, zWth ),
  material );
structure3.position.set( structureX3, structureY3, structureDepth);
structure3.rotation.y = 0.5;
group.add( structure3 );

var structure4 = new THREE.Mesh( 
  new THREE.BoxGeometry( xWth, numFloors4*floorHeight, zWth ),
  material );
structure4.position.set( structureX4, structureY4, structureDepth);
structure4.rotation.y = 0.5;
group.add( structure4 );

var structure5 = new THREE.Mesh( 
  new THREE.BoxGeometry( xWth, numFloors5*floorHeight, zWth ),
  material );
structure5.position.set( structureX5, structureY5, structureDepth);
structure5.rotation.y = 0.5;
group.add( structure5 );

var structure6 = new THREE.Mesh( 
  new THREE.BoxGeometry( xWth, numFloors6*floorHeight, zWth ),
  material );
structure6.position.set( structureX6, structureY6, structureDepth);
structure6.rotation.y = 0.5;
group.add( structure6 );

var structure7 = new THREE.Mesh( 
  new THREE.BoxGeometry( xWth, numFloors7*floorHeight, zWth ),
  material );
structure7.position.set( structureX7, structureY7, structureDepth);
structure7.rotation.y = 0.5;
group.add( structure7 );

var structure8 = new THREE.Mesh( 
  new THREE.BoxGeometry( xWth, numFloors8*floorHeight, zWth ),
  material );
structure8.position.set( structureX8, structureY8, structureDepth);
structure8.rotation.y = 0.5;
group.add( structure8 );

      let numFloors = z;
      let side = Math.sqrt(sqft)/2;
      let siteSide = Math.sqrt(siteArea)/2;
      
      /* START OF CAMERA ADJUSTMENTS  */
        let camZoomAdj = Number(z) * 1.15
        let camYAdj = Number(z)/2.25
        //as screen moves, responsiveness needs to apply to camera
      // console.log(z)
       //as building beomces larger, we need to zoom the camera out
      let camera = new THREE.PerspectiveCamera(20+camZoomAdj, width / height, 1, 1000);
      // x, y, z
      camera.position.set(0, 45+camYAdj, 45);
      camera.rotation.x = -0.35;
      
      /* END OF CAMERA ADJUSTMENTS  */
      let structure = new THREE.Mesh( 
          new THREE.BoxGeometry( side, side, numFloors*floorHeight),
          material );
      
      let zAdj = 0.75*z; //adjustment for building height
      structure.position.set( 0,0,zAdj);
      // structure.rotation.z = THREE.Math.degToRad( -45 );  //this section rotates the model on Z axis
      
      
      let plane = new THREE.Mesh( 
        new THREE.PlaneGeometry(siteSide, siteSide), 
        new THREE.MeshBasicMaterial( {color: 0x444444, side: THREE.DoubleSide} )
       );
      plane.position.set( 0,0,0)

      /////////////////////////////////////////////////
      group.add( structure );
      group.add( plane );
      
      group.position.y = 27;
      group.rotation.x = THREE.Math.degToRad( -90 );
      scene.add( group );
      
      renderer.setClearColor('#000000')
      renderer.setSize(width, height)
  
      this.scene = scene
      this.camera = camera
      this.renderer = renderer
      this.material = material
  
      this.mount.appendChild(this.renderer.domElement)
      this.start()
    }
  
    componentWillUnmount() {
      this.stop()
      this.mount.removeChild(this.renderer.domElement)
    }
  
    start() {
      if (!this.frameId) {
        this.frameId = requestAnimationFrame(this.animate)
      }
    }
  
    stop() {
      cancelAnimationFrame(this.frameId)
    }
  
    animate() {
      // console.log(this.props.rotate);
      if (this.props.rotate === true){
        this.scene.rotation.y += 0.0075;
      }
  
      this.renderScene()
      this.frameId = window.requestAnimationFrame(this.animate)
    }
  
    renderScene() {
      this.renderer.render(this.scene, this.camera)
    }
  
    render() {
      return (
        <div style={{ border:'1px solid orange' }}>
          <div
            style={{ width: '100%', height: '200px', border:'1px solid green' }}
            ref={(mount) => { this.mount = mount }}
          />
        </div>
      )
    }
  }
  export default ThreeDevPrototype;