import * as BABYLON from '@babylonjs/core';
import {Inspector} from '@babylonjs/inspector';
import * as GUI from '@babylonjs/gui/2D';

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = async function() {
  const scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
  camera.attachControl(true);
  camera.wheelDeltaPercentage = 0.02;
  camera.setPosition(new BABYLON.Vector3(0, 0, 10));

  const torus = new BABYLON.MeshBuilder.CreateTorus('mySphere', {
    diameter: 3,
    thickness: 1,
    tessellation: 80
  });
  torus.position.x = -4;

   scene.registerBeforeRender(function() {
    torus.rotation.x -= 0.01; 
    torus.rotation.z -= 0.01; 
  });
  
  const pbr = new BABYLON.PBRSpecularGlossinessMaterial('pbr', scene);
  torus.material = pbr;
  pbr.diffuseColor = new BABYLON.Color3(1, 234/255, 0);
  pbr.glossiness = 1;
  pbr.environmentTexture = BABYLON.CubeTexture.CreateFromPrefilteredData('https://playground.babylonjs.com/textures/environment.dds', scene);
  pbr.specularGlossinessTexture = new BABYLON.Texture('/glossiness_texture.png', scene);

  //GUI
  // const advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI');

  // // const button = GUI.Button.CreateSimpleButton('myBtn', 'Click Me!');
  // // button.width = '200px';
  // // button.height = '40px';
  // // button.color = 'white';
  // // button.background = 'deepskyblue';
  // // advancedTexture.addControl(button);

  // const button = GUI.Button.CreateImageButton('myBtn', 'Click Me!', 'play.svg');
  // button.width = '200px';
  // button.height = '40px';
  // button.color = 'white';
  // button.background = 'deepskyblue';
  // button.image.left = '30px';
  // button.onPointerUpObservable.add(function() {
  //   torus.material.diffuseColor = BABYLON.Color3.Teal();
  // });
  // //advancedTexture.addControl(button);

  // const button2 = button.clone();
  // button2.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
  // // button2.verticalAlignment = GUI.Control.VERTICAL_ALIGNMENT_TOP;
  // // button2.left = '100px';
  // // button2.top = '100px';
  // button2.onPointerUpObservable.add(function() {
  //   torus.material.diffuseColor = BABYLON.Color3.Green();
  // });
  // //advancedTexture.addControl(button2);

  // // const container = new GUI.Container();
  // // container.background = 'black';
  // // container.width = 0.5;
  // // container.horizontalAlignment = GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
  // // container.isPointerBlocker = true;
  // // advancedTexture.addControl(container);

  // // const rectangle = new GUI.Rectangle();
  // // rectangle.width = '300px';
  // // rectangle.height = '300px';
  // // rectangle.cornerRadius = 50;
  // // rectangle.addControl(button2);
  // // container.addControl(rectangle);

  // // const ellipse = new GUI.Ellipse();
  // // ellipse.width = '300px';
  // // ellipse.height = '300px';
  // // ellipse.thickness = 5;
  // // container.addControl(ellipse);

  // const panel = new GUI.StackPanel();
  // const b1 = button.clone();
  // panel.addControl(b1);
  // const b2 = button.clone();
  // panel.addControl(b2);
  // const b3 = button.clone();
  // panel.addControl(b3);
  // panel.isVertical = false;
  // advancedTexture.addControl(panel);

  // panel.linkWithMesh(torus);
  // panel.linkOffsetX = -500;

  // // const text = new GUI.TextBlock();
  // // text.text = 'Hello World!';
  // // text.color = 'white';
  // // text.fontSize = 72;
  // // text.fontFamily = 'Montserrat Black';
  // // text.shadowColor = '#000';
  // // text.shadowOffsetX = 2;
  // // text.shadowOffsetY = 2;
  // // advancedTexture.addControl(text);

  // // const input = new GUI.InputText();
  // // input.width = 0.2;
  // // input.height = '40px';
  // // input.text = 'Default text';
  // // input.color = 'black';
  // // input.background = 'deepskyblue';
  // // input.focusedBackground = 'white';
  // // input.onTextChangedObservable.add(function(value) {
  // //   torus.material.diffuseColor = new BABYLON.Color3(0, 0, value.text);
  // // });
  // // advancedTexture.addControl(input);

  // // const slider = new GUI.Slider();
  // // slider.minimum = 0.2;
  // // slider.maximum = 3;
  // // slider.height = '20px';
  // // slider.width = '200px';
  // // slider.value = 1;
  // // slider.onValueChangedObservable.add(function(value) {
  // //   torus.scaling.y = value;
  // // });
  // // advancedTexture.addControl(slider);

  // const mesh = new BABYLON.MeshBuilder.CreatePlane('', {
  //   width: 5,
  //   height: 5
  // });
  // mesh.position.y = 2;
  // mesh.rotation.y = Math.PI;

  // mesh.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;

  // const advancedTexture2 = GUI.AdvancedDynamicTexture.CreateForMesh(mesh);

  // const picker = new GUI.ColorPicker();
  // picker.width = '500px';
  // picker.onValueChangedObservable.add(function(value) {
  //   torus.material.diffuseColor.copyFrom(value);
  // });
  // advancedTexture2.addControl(picker);

  // // const checkbox = new GUI.Checkbox();
  // // checkbox.width = '20px';
  // // checkbox.height = '20px';
  // // checkbox.color = 'white';
  // // checkbox.isChecked = false;
  // // checkbox.onIsCheckedChangedObservable.add(function(value) {
  // //   torus.material.wireframe = value;
  // // });
  // // //advancedTexture.addControl(checkbox);

  // // const checkboxHeader = GUI.Control.AddHeader(checkbox, 'Wireframe:', '100px', {
  // //   isHorizontal: true,
  // //   controlFirst: false
  // // });
  // // checkboxHeader.color = 'white';
  // // advancedTexture.addControl(checkboxHeader);

  // // const cBoxWithHeader = GUI.Checkbox.AddCheckBoxWithHeader('Wirefame:', function(value) {
  // //   torus.material.wireframe = value;
  // // });
  // // cBoxWithHeader.children[0].isChecked = false;
  // // cBoxWithHeader.children[1].fontSize = 38;
  // // advancedTexture.addControl(cBoxWithHeader);

  const advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI();
  //const loadedGUI = await advancedTexture.parseFromSnippetAsync('8G32IT');
  const loadedGUI = await advancedTexture.parseFromURLAsync('/guiTexture.json');

  const slider = advancedTexture.getControlByName('scaleSlider');
  slider.minimum = 0.2;
  slider.maximum = 3;
  slider.onValueChangedObservable.add(function(value) {
    torus.scaling.y = value;
  });

  return scene;
}

const scene = await createScene();

engine.runRenderLoop(function() {
  scene.render();
});

window.addEventListener('resize', function() {
  engine.resize();
});

// Inspector.Show(scene, {});