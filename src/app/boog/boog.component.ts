import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import * as THREE from 'three-full';
import { DOCUMENT, formatCurrency } from '@angular/common';
import { ColorService } from '../color.service';
import { GUI } from 'dat.gui';
import { DegRadHelper, StringToNumberHelper } from '../conversion/conversion.component';
import { BoogService } from '../boog.service';

@Component({
  selector: 'app-boog',
  templateUrl: 'boog.component.html',
  styleUrls: ['./boog.component.scss']
})

export class BoogComponent implements OnInit {

  fileToUpload: File = null;
  private c: any;
  private loaded = false;
  private theModel: any;
  private initRotate = 65;
  private TRAY: any;
  private TRAY1: any;
  private TRAY2: any;
  private TRAY3: any;
  private DRAG_NOTICE: any;
  private scene: THREE.Scene;
  private canvas: any;
  private renderer: THREE.WebGLRenderer;
  private swatches: any;
  private swatchesText: any;
  private customSwatches: any;
  private camera: THREE.PerspectiveCamera;
  private INITIAL_MTL: THREE.MeshPhongMaterial;
  private INITIAL_MAP: any;
  private loader: THREE.GLTFLoader;
  private hemiLight: THREE.HemisphereLight;
  private dirLight: THREE.DirectionalLight;
  private floorGeometry: THREE.PlaneGeometry;
  private floorMaterial: THREE.MeshPhongMaterial;
  private texture_new_mtl: THREE.MeshPhongMaterial;
  private controls: THREE.OrbitControls;
  private floor: THREE.Mesh;
  private document: { getElementById: (arg0: string) => void; };
  private images: any[];
  private txt_mat = new THREE.MeshPhongMaterial();
  private txt_mesh = new THREE.Mesh();
  private selectedColor = "";
  private selectedTextColor = "";
  private selectedItem = 0;
  private cameraFar = 40;
  private textureUploadedImage: THREE.MeshPhongMaterial;
  private velcro = false;
  checker = false;
  private x = 0;
  private y = -10;
  private z = 0;

  @ViewChild('fileInput', { static: false }) fileInput: any;

  colors = [];
  variations = [];
  customColors = [];
  customTextColors = [];
  isChecked = false;
  ifSelected = false;
  sliderCurrentValue: boolean;

  archSelectedColors = new Array(6);
  archSelectedTextColor = '';

  fitingObject;
  boogWidth: number;
  boogHeight: number;
  boogDiameter: number;
  boogPrice: number;

  constructor(@Inject(DOCUMENT) document, private service: ColorService, private serviceBoog: BoogService) {
    this.document = document;
  }

  ngOnInit() {
    var me = this;

    me.c = me.document.getElementById('c');

    me.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });

    me.renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));

    var LOADER = document.getElementById('js-loader');
    me.TRAY = document.getElementById('js-tray-slide');
    me.TRAY1 = document.getElementById('js-tray-slide-custom');
    me.TRAY2 = document.getElementById('js-tray-slide-text');
    me.TRAY3 = document.getElementById('js-tray-slide-custom-text');

    me.DRAG_NOTICE = document.getElementById('js-drag-notice');

    var MODEL_PATH = "../../assets/images/boog2.glb";

    const BACKGROUND_COLOR = 0xf1f1f1;

    me.scene = new THREE.Scene();

    me.scene.background = new THREE.Color(BACKGROUND_COLOR);

    me.canvas = me.c;

    me.renderer = new THREE.WebGLRenderer({ canvas: me.canvas, antialias: true });

    me.renderer.shadowMap.enabled = true;
    me.renderer.setPixelRatio(window.devicePixelRatio);

    // Add a camera
    me.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
    me.camera.position.z = me.cameraFar;
    me.camera.position.x = 50;

    me.images = new Array();
    for (let i = 0; i < 6; i++) {
      me.images[i] = "../../assets/images/" + i + ".jpg";
    }

    // Initial material
    me.INITIAL_MTL = new THREE.MeshPhongMaterial({ color: 0xf1f1f1, shininess: 10 });

    me.INITIAL_MAP = [
      { childID: "0", mtl: me.INITIAL_MTL },
      { childID: "1", mtl: me.INITIAL_MTL },
      { childID: "2", mtl: me.INITIAL_MTL },
      { childID: "3", mtl: me.INITIAL_MTL },
      { childID: "4", mtl: me.INITIAL_MTL },
      { childID: "5", mtl: me.INITIAL_MTL },
      { childID: "21", mtl: me.INITIAL_MTL },
      { childID: "22", mtl: me.INITIAL_MTL }];

    me.loader = new THREE.GLTFLoader();

    me.loader.load(MODEL_PATH, function (gltf) {
      me.theModel = gltf.scene;

      me.theModel.position.y = me.y;

      me.theModel.scale.set(2, 2, 2);
      me.theModel.rotation.y = Math.PI;

      for (let object of me.INITIAL_MAP) {
        me.initColor(me.theModel, object.childID, object.mtl);
      }

      me.scene.add(me.theModel);

      LOADER.remove();

      if (me.theModel != null) {
        me.visibleVelcro(me.theModel, false);
      }

    }, undefined, function (error) {
      console.error(error);
    });

    // Add lights
    me.hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
    me.hemiLight.position.set(0, 50, 0);
    // Add hemisphere light to scene   
    me.scene.add(me.hemiLight);

    me.dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
    me.dirLight.position.set(-8, 12, 8);
    // Add directional Light to scene    
    me.scene.add(me.dirLight);

    me.floor = new THREE.Mesh(me.floorGeometry, me.floorMaterial);
    me.floor.rotation.x = -0.5 * Math.PI;
    me.floor.position.y = -1;
    me.scene.add(me.floor);

    me.controls = new THREE.OrbitControls(me.camera, me.renderer.domElement);
    me.controls.maxPolarAngle = Math.PI / 2;
    me.controls.minPolarAngle = Math.PI / 15;
    me.controls.enableDamping = true;
    me.controls.enablePan = false;
    me.controls.dampingFactor = 0.1;
    me.controls.autoRotate = false;
    me.controls.autoRotateSpeed = 0.2;
    me.controls.rotateSpeed = 0.2;

    var animate = function () {
      me.controls.update();
      me.renderer.render(me.scene, me.camera);
      requestAnimationFrame(animate);

      if (me.resizeRendererToDisplaySize(me.renderer)) {
        const canvas = me.renderer.domElement;
        me.camera.aspect = canvas.clientWidth / canvas.clientHeight;
        me.camera.updateProjectionMatrix();
      }

      if (me.theModel != null && me.loaded == false) {
        me.initialRotation();
        me.DRAG_NOTICE.classList.add('start');
      }
    }
    animate();

    me.service.getColors().subscribe((response) => {
      (response.results).forEach((item: any) => {
        me.colors.push({
          color: ({ ...item }.value).substr(1, 6)
        });
      });

      me.buildColors(me.colors);
      me.buildTextColors(me.colors);

      // Swatches
      me.swatches = document.querySelectorAll(".tray__swatch");
      me.swatchesText = document.querySelectorAll(".tray__swatch__text");

      for (const swatch of me.swatches) {
        swatch.addEventListener('click', ($event) => me.selectSwatch($event));
      }

      for (const swatch of me.swatchesText) {
        swatch.addEventListener('click', ($event) => me.changeTextColor($event));
      }
    });

    me.service.getMetaDataModel().subscribe((response) => {
      (response.results).forEach((item: any) => {
        if (item.variations) {
          item.variations.forEach(a => {
            if (a.width || a.height || a.price) {
              this.variations.push({
                width: a.width,
                height: a.height,
                diameter: a.diameter,
                price: a.price
              })
            }
          })
        }
      })
      me.changeWidthHeight("3");
    })

    this.serviceBoog.sendBoogObject.subscribe(res => {
      var exporter = new THREE.GLTFExporter();
      // Parse the input and generate the glTF output
      exporter.parse(me.scene, function (gltf) {
        me.renderer.render(me.scene, me.camera);
        me.serviceBoog.sendBoogModel({
          ...res,
          model_design: gltf,
          model_snapshot: me.renderer.domElement.toDataURL()
        }).subscribe(boog => {
          window.location.href = `http://startboog.nl/offerte-aanvraag.html?design_id=${boog.object.id}`;
        })
      }, {});
    })

  }

  customColor(event) {
    this.isChecked = event.target.checked;

    if (!this.isChecked) {
      this.none("customColor");
    }

    this.service.ChangeCustomColor(event.target.checked);
  }

  cmykValue(event) {
    this.customColors.push({
      color: event.substr(1, 6)
    });
    this.service.ChoosedCustomColor(this.customColors[0].color);

    this.buildCustomColors(event.substr(1, 6));
    // Swatches
    this.customSwatches = document.querySelectorAll(".tray__swatch__custom");
    for (const swatch of this.customSwatches) {
      swatch.addEventListener('click', ($event) => this.selectSwatch($event));
    }

    this.customTextColors.push({
      color: event.substr(1, 6)
    });
    this.buildCustomTextColors(event.substr(1, 6));
    // Swatches
    this.customSwatches = document.querySelectorAll(".tray__swatch__custom__text");
    for (const swatch of this.customSwatches) {
      swatch.addEventListener('click', ($event) => this.changeTextColor($event));
    }

  }

  buildColors(colors) {
    colors.forEach((color, i) => {
      let swatch = document.createElement('div');
      swatch.classList.add('tray__swatch');
      swatch.style.background = "#" + color.color;
      swatch.setAttribute('data-key', i);
      this.TRAY.append(swatch);
    });
  }

  buildTextColors(colors) {
    colors.forEach((color, i) => {
      let swatch = document.createElement('div');
      swatch.classList.add('tray__swatch__text');
      swatch.style.background = "#" + color.color;
      swatch.setAttribute('data-key', i);
      this.TRAY2.append(swatch);
    });
  }

  buildCustomColors(color) {
    let elem1 = document.getElementById('custom_color');

    if (elem1) {
      elem1.remove();
    }

    let customSwatch = document.createElement('div');
    customSwatch.setAttribute('id', 'custom_color');
    customSwatch.classList.add('tray__swatch__custom');
    customSwatch.style.background = "#" + color;
    customSwatch.setAttribute('data-key', this.customColors.length.toString());
    this.TRAY1.append(customSwatch);
  }

  buildCustomTextColors(color) {
    let elem1 = document.getElementById('custom_text_color');
    if (elem1) {
      elem1.remove();
    }
    let customSwatch = document.createElement('div');
    customSwatch.setAttribute('id', 'custom_text_color');
    customSwatch.classList.add('tray__swatch__custom__text');
    customSwatch.style.background = "#" + color;
    customSwatch.setAttribute('data-key', this.customTextColors.length.toString());
    this.TRAY3.append(customSwatch);
  }

  //EOOnInit
  initColor(parent, type, mtl) {
    return new Promise((resolve, reject) => {
      parent.traverse(o => {
        if (o.isMesh) {
          if (o.name.includes(type)) {
            o.material = mtl;
            o.nameID = type;
          }
        }
      });
      resolve();
    })
  }

  resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvasPixelWidth = canvas.width / window.devicePixelRatio;
    var canvasPixelHeight = canvas.height / window.devicePixelRatio;

    const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
    if (needResize) {

      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  selectOption(e) {
    const canvas = this.renderer.domElement;
    var width = canvas.width / window.devicePixelRatio;
    var height = canvas.height / window.devicePixelRatio;
    var wh, whfov;
    if (width > height) {
      if (width / height < 1.5)
        wh = 2;
      else
        wh = width / height;
      whfov = wh;
    }
    else {
      wh = height / width + 1;
      whfov = wh * wh / 2;
    }

    this.selectedItem = e;
    if (e != 0) {
      this.controls.enabled = false;
      this.camera.position.z = 40;
      this.camera.position.x = 50;
      this.camera.position.y = 0;
    }
    else {
      this.controls.enabled = true;
    }

    switch (e) {
      case 0:
        this.theModel.position.x = this.x;
        this.theModel.position.y = this.y;
        this.theModel.position.z = this.z;
        this.camera.fov = whfov * 20; //40;
        this.camera.updateProjectionMatrix();
        break;
      case 1:
        this.modelPosition(wh, whfov, 7, -5, 0, 10);
        break;
      case 2:
        this.modelPosition(wh, whfov, 5, -10.1, 0, 5.2);
        break;
      case 3:
        this.modelPosition(wh, whfov, 0, -10, 0, 5);
        break;
      case 4:
        this.modelPosition(wh, whfov, -6.1, -10.05, 0, 4.8);
        break;
      case 5:
        this.modelPosition(wh, whfov, -7.4, -5, 0, 7);
        break;
    }
  }

  modelPosition(wh, whfov, x, y, z, fov) {
    var me = this;
    me.controls.enabled = false;
    me.theModel.position.x = wh * x; //15;	
    me.theModel.position.y = wh * y; //-10;	
    me.theModel.position.z = z;
    me.camera.fov = whfov * fov; //20;	
    me.camera.updateProjectionMatrix();
  }

  selectSwatch(e) {
    var me = this;
    var mtlName;
    let color: any = {};
    let images: any[] = [];

    var selectedObject = me.theModel.children;

    selectedObject.forEach((o) => {
      if (o.name < 6 && o.material.name == "image")
        images.push(o.name);
    });

    selectedObject.forEach((o) => {
      if (!images.includes(o.name) && (o.name == this.selectedItem || this.selectedItem == 0)) {
        console.log("o.name ", o.name);
        if (e.target.className === 'tray__swatch__custom') {
          color = this.customColors[parseInt(e.target.dataset.key) - 1]
          mtlName = "customColor";
        } else {
          color = this.colors[parseInt(e.target.dataset.key)];
          this.selectedColor = color.color;
          mtlName = "color";
        }
        this.selectedColor = color.color;
        this.archSelectedColors[this.selectedItem] = color.color;

        var new_mtl = new THREE.MeshPhongMaterial({
          color: parseInt('0x' + color.color),
          name: mtlName
        })


        if (this.selectedItem == 0) {
          this.INITIAL_MAP.forEach(i => {
            if ((i.childID < 6 || (i.childID > 6 && me.velcro == false)) && !images.includes(i.childID))
              me.setMaterial(this.theModel, i.childID, new_mtl);
          });
        }
        else {
          me.setMaterial(this.theModel, this.selectedItem, new_mtl);
          if (this.selectedItem == 1 && me.velcro == false)
            me.setMaterial(this.theModel, 21, new_mtl);
          else if (this.selectedItem == 5 && me.velcro == false)
            me.setMaterial(this.theModel, 22, new_mtl);
        }

      }
    });

  }

  downloadObj() {
    const me = this;
    var exporter = new THREE.GLTFExporter();

    // Parse the input and generate the glTF output
    exporter.parse(me.scene, function (gltf) {
      var element = document.createElement('a');
      //me.renderer.render(me.scene, me.camera);
      //me.renderer.domElement.toDataURL();
      element.setAttribute('href', 'data:text/plain;charset=utf-8, '
        + encodeURIComponent(JSON.stringify(gltf)));
      element.setAttribute('download', 'model.gltf');
      document.body.appendChild(element);
      element.click(); document.body.removeChild(element);
    }, {});

  }
  // renderJPG() {
  //   const renderer = new THREE.CSS3DRenderer({ preserveDrawingBuffer: true });
  //   window.open(renderer.domElement.toDataURL('image/png'), 'screenshot');
  // }

  setMaterial(parent, type, mtl) {
    parent.traverse(o => {
      if (o.isMesh && o.nameID != null) {
        if (o.nameID == type) {
          o.material = mtl;
        }
      }
    });
  }

  visibleVelcro(parent, visible) {
    parent.traverse(o => {
      if (o.isMesh && o.nameID != null) {
        if (o.nameID == 21 || o.nameID == 22) {
          o.visible = visible;
        }
      }
    });
  }

  initialRotation() {
    this.initRotate++;
    if (this.initRotate <= 120) {
      this.theModel.rotation.y += Math.PI / 70;
    } else {
      this.loaded = true;
    }
  }
  changeTextColor(e) {
    var me = this;
    var color;

    if (e.target.className === 'tray__swatch__custom__text') {
      color = this.customTextColors[parseInt(e.target.dataset.key) - 1]
    } else {
      color = this.colors[parseInt(e.target.dataset.key)];

    }
    me.txt_mesh.material.color.setHex(parseInt('0x' + color.color));
    me.selectedTextColor = color.color;
    this.archSelectedTextColor = color.color;

  }

  textFront(text: String) {
    this.addText(text, Math.PI / 2, 0.8);
  }
  textBack(text: String) {
    this.addText(text, -Math.PI / 2, -0.8);
  }
  addText(text: String, rotationY, positionX) {
    var me = this;
    var loader = new THREE.FontLoader();
    loader.load('../../assets/fonts.json', function (font) {
      var geometry = new THREE.TextGeometry(text, {
        font: font,
        size: 1,
        height: 0.5,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelSegments: 0.1,
      });
      geometry.center().x = -5;
      var col = "0x" + me.selectedTextColor;
      me.txt_mat.color.setHex(col);
      me.txt_mesh = new THREE.Mesh(geometry, me.txt_mat);
      me.txt_mesh.name = text;
      me.txt_mesh.position.y = 11.9;
      me.txt_mesh.position.x = positionX;
      me.txt_mesh.rotation.y = rotationY;
      me.theModel.add(me.txt_mesh);
    });
  }
  switchText(event) {
    if (this.selectedTextColor === "") this.selectedTextColor = "000000";
    switch (event.target.defaultValue) {
      case "none":
        this.selectedTextColor = "";
        this.removeStartFinish("Start");
        this.removeStartFinish("Finish");
        break;
      case "start":
        this.removeText();
        this.textFront("Start");
        this.textBack("Start");
        break;
      case "finish":
        this.removeText();
        this.textFront("Finish");
        this.textBack("Finish");
        break;
      case "startFinish":
        this.removeText();
        this.textFront("Start");
        this.textBack("Finish");
        break;
    }
  }
  removeStartFinish(text) {
    var me = this;
    var remove = me.theModel.getObjectByName(text);
    me.theModel.remove(remove);
    var remove = me.theModel.getObjectByName(text);
    me.theModel.remove(remove);
  }
  removeText() {
    this.removeStartFinish("Start");
    this.removeStartFinish("Finish");
  }

  optionChecked = false;

  addOrRemoveOption(event) {
    this.addOption();
  }

  addOption() {
    var me = this;
    let txt = new THREE.TextureLoader().load("../../assets/images/chess.png");

    txt.repeat.set(2, 5, 5);
    txt.wrapS = THREE.RepeatWrapping;
    txt.wrapT = THREE.RepeatWrapping;

    me.texture_new_mtl = new THREE.MeshPhongMaterial({
      map: txt
    });

    me.texture_new_mtl.name = "checker";
    me.setMaterial(me.theModel, 1, me.texture_new_mtl);
    me.setMaterial(me.theModel, 5, me.texture_new_mtl);
  }

  removeOption() {
    var me = this;
    var selectedObject = me.theModel.children;

    selectedObject.forEach((e) => {
      if (e.name < 6 && e.material.name == "checker") {
        e.material = null;
        e.remove(e.material);

        me.texture_new_mtl = new THREE.MeshPhongMaterial({
          color: 0xf1f1f1, shininess: 10
        });


        me.setMaterial(me.theModel, e.name, me.texture_new_mtl);
      }
    });
  }

  buildSelectedColor() {
    return `#${this.archSelectedColors[this.selectedItem]}`
  }

  buildTextColor() {
    return `#${this.archSelectedTextColor}`
  }

  none(whatToRemove) {
    var me = this;
    var selectedObject = me.theModel.children;

    if (whatToRemove == "all") {
      selectedObject.forEach((e) => {
        if (e.name < 23 && (e.material.name == "image" || e.material.name == "velcro")) {
          me.removeTexture(e);
        }
      });

      var imageSet = document.getElementsByClassName("dg main a");
      for (var i = imageSet.length - 1; i >= 0; --i) {
        imageSet[i].remove();
      }
    }
    else if (whatToRemove == "customColor") {
      selectedObject.forEach((e) => {
        if (e.name < 23 && (e.material.name == "customColor")) {
          me.removeTexture(e);
        }
      });
    }
  }

  removeTexture(e: any) {
    var me = this;
    e.material = null;
    e.remove(e.material);

    me.texture_new_mtl = new THREE.MeshPhongMaterial({
      color: 0xf1f1f1, shininess: 10
    });

    me.setMaterial(me.theModel, e.name, me.texture_new_mtl);
  }

  addLogoOrVelcroRadio(whiteBlack: any, event) {
    var me = this;
    this.serviceBoog.UploadImageSelected(event && event.target ? event.target.checked : false);
    // console.log("za sliku", event && event.target ? event.target.checked : false);

    me.none("all");

    me.ifSelected = event && event.target ? event.target.checked : false;

    me.visibleVelcro(me.theModel, true);

    var color;

    if (whiteBlack == "b") {
      color = parseInt("0x000000");
      this.serviceBoog.VelcroChecker('black');
    }
    else if (whiteBlack == "w") {
      me.velcro = true;
      color = parseInt("0xffffff");
      this.serviceBoog.VelcroChecker('white');
    }
    else {
      me.visibleVelcro(me.theModel, false);
      me.velcro = false;
    }

    var new_mtl = new THREE.MeshPhongMaterial({
      color: color
    })

    new_mtl.name = "velcro";
    me.setMaterial(this.theModel, 21, new_mtl);
    me.setMaterial(this.theModel, 22, new_mtl);

  }

  onSelectFile(event) {
    var me = this;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = function (imgsrc: any) {
        var image = new Image();
        image.src = imgsrc.target.result;
        me.textureUploadedImage = new THREE.Texture();
        switch (me.selectedItem) {
          case 2:
            me.textureUploadedImage.rotation = Math.PI / 2;
            break;
          case 3:
            me.textureUploadedImage.rotation = Math.PI / 2;
            break;
        }
        me.textureUploadedImage.image = image;
        me.textureUploadedImage.needsUpdate = true;  // will trigger warning because image not complete, but display the map ok.
        me.textureUploadedImage.wrapS = THREE.RepeatWrapping;
        me.textureUploadedImage.wrapT = THREE.RepeatWrapping;
        var material = new THREE.MeshPhongMaterial({
          map: me.textureUploadedImage
        });
        material.name = "image";
        if (me.selectedItem != 0)
          me.setMaterial(me.theModel, me.selectedItem, material);
        const gui = new GUI();
        gui.add(new StringToNumberHelper(me.textureUploadedImage, 'wrapS'), 'value', me.wrapModes)
          .name('wrapS')
          .onChange(me.updateTexture());
        gui.add(new StringToNumberHelper(me.textureUploadedImage, 'wrapT'), 'value', me.wrapModes)
          .name('mwrapT')
          .onChange(me.updateTexture());
        gui.add(me.textureUploadedImage.repeat, 'x', 0, 5, .01).name('repeat.x');
        gui.add(me.textureUploadedImage.repeat, 'y', 0, 5, .01).name('repeat.y');
        gui.add(me.textureUploadedImage.offset, 'x', -2, 2, .01).name('offset.x');
        gui.add(me.textureUploadedImage.offset, 'y', -2, 2, .01).name('offset.y');
        gui.add(me.textureUploadedImage.center, 'x', -.5, 1.5, .01).name('center.x');
        gui.add(me.textureUploadedImage.center, 'y', -.5, 1.5, .01).name('center.y');
        gui.add(new DegRadHelper(me.textureUploadedImage, 'rotation'), 'value', -360, 360)
          .name('texture.rotation');
      };
    }
    me.fileInput.nativeElement.value = '';
  }
  wrapModes = {
    'ClampToEdgeWrapping': THREE.ClampToEdgeWrapping,
    'RepeatWrapping': THREE.RepeatWrapping,
    'MirroredRepeatWrapping': THREE.MirroredRepeatWrapping,
  };
  updateTexture() {
    var me = this;
    me.textureUploadedImage.needsUpdate = true;
  }
  render(time) {
    var me = this;
    time *= 0.001;
    if (me.resizeRendererToDisplaySize(me.renderer)) {
      const canvas = me.renderer.domElement;
      me.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      me.camera.updateProjectionMatrix();
    }
    this.INITIAL_MAP.forEach((arch, ndx) => {
      const speed = .2 + ndx * .1;
      const rot = time * speed;
      arch.rotation.x = rot;
      arch.rotation.y = rot;
    });
    me.renderer.render(me.scene, me.camera);
    requestAnimationFrame(me.render);
  }

  buildSelectedTextColor() {
    return '#' + this.selectedTextColor;
  }

  sliderChangedValue(event) {
    var me = this;
    me.changeWidthHeight(event.target.value);
  }

  //widthPrice: {};
  changeWidthHeight(width) {
    var me = this;
    me.sliderCurrentValue = width;
    me.fitingObject = this.variations.find(v => this.sliderCurrentValue === v.width)
    me.boogWidth = this.fitingObject.width;
    me.boogHeight = this.fitingObject.height;
    me.boogDiameter = this.fitingObject.diameter;
    me.boogPrice = this.fitingObject.price;
    this.serviceBoog.SliderChecker(me.boogPrice);
  }

}
