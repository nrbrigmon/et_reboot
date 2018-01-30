import React, { Component } from 'react';
import * as THREE from 'three';

class ThreeBuildingPrototypeScene extends Component {
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
      let numFloors = z;
      let side = Math.sqrt(sqft)/2;
      let siteSide = Math.sqrt(siteArea)/2;
      
      /* START OF CAMERA ADJUSTMENTS  */
        let camZoomAdj = Number(z) * 1.15
        let camYAdj = Number(z)/2.25
        //as screen moves, responsiveness needs to apply to camera
      console.log(z)
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
      /*  START - section for adjusting landscaping  */
      let percLand = Number(landscaping)/100;
      
      let greenery = new THREE.Mesh( 
        new THREE.PlaneGeometry(siteSide*percLand, siteSide*percLand), 
        new THREE.MeshBasicMaterial( {color: 0x009900, side: THREE.DoubleSide} )
       );
      // greenery.rotation.x = planeX;
      greenery.position.set(0,0,0.07)
      
      group.add( greenery );
      /*  END - section for adjusting landscaping  */
      
      /*  START - section for adding a floor divider  */
      let numDividers = Math.floor(numFloors);
      let floorDividerPos = 1.5;
      //for numFloors, add a divider minus 1
      for (let i = 1; i < numFloors; i++) {
        
          let floorDivider = new THREE.Mesh( 
            new THREE.BoxGeometry( Number(side)+0.1, Number(side)+0.1, 0.05),
            new THREE.MeshBasicMaterial( {color: 0x222222, side: THREE.DoubleSide} )
          );
        
          // floorDivider.rotation.y = 0.75;
          floorDivider.position.z = floorDividerPos
          group.add( floorDivider );
          floorDividerPos += 1.5;
       }
      
      /*  END - section for adding a floor divider  */
      
      /////////////////////////////////////////////////
      group.add( structure );
      group.add( plane );
      
      group.position.y = 25;
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
      // this.scene.rotation.y += 0.0075
  
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
            style={{ width: '100%', height: '350px', border:'1px solid green' }}
            ref={(mount) => { this.mount = mount }}
          />
        </div>
      )
    }
  }
  export default ThreeBuildingPrototypeScene;