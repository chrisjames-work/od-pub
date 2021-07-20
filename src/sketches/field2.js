export default (p5) => {
  // LETTER
  var typeX, typeXSlider;
  var typeY, typeYSlider;
  var typeStroke, typeStrokeSlider;
  var strecherXslider, strecherXsize;
  var strecherX = 0;
  var strecherYslider, strecherYsize;
  var strecherY = 0;

  // FIELD
  var column, columnSlider;
  var row, rowSlider;
  var tracking, trackingSlider;
  var lineSpace, lineSpaceSlider;
  var xSpace, ySpace;

  // WAVE
  var speed, speedSlider;
  var xOffset, xOffsetSlider;
  var yOffset, yOffsetSlider;
  var zWave, zWaveSlider, zWaveCheck;
  var zWaver = 0;
  var zWaveChecked = 0;
  var xWave, xWaveSlider, xWaveCheck;
  var xWaver = 0;
  var xWaveChecked = 0;
  var yWave, yWaveSlider, yWaveCheck;
  var yWaver = 0;
  var yWaveChecked = 0;
  var yWavezRot, yWavezRotSlider;
  var yWavezRoter = 0;
  var yWavexStr, yWavexStrSlider;
  var yWavexStrer = 0;
  var xStrechWave, xStrechWaveSlider, xStrechWaveCheck;
  var xStrechWave = 0;
  var xStrechWaveChecked = 0;
  var yStrechWave, yStrechWaveSlider, yStrechWaveCheck;
  var yStrechWave = 0;
  var yStrechWaveChecked = 0;

  // CAMERA
  var xRotCamera, yRotCamera, zRotCamera;
  var xRotCameraSlider, yRotCameraSlider, zRotCameraSlider;
  var zoomCamera, zoomCameraSlider;

  // STRING
  var letter_select, inp, inpText, c1;
  var myText = [];
  var runLength;
  var fullTextCheck, fullText;

  // COLOR
  var strkColor = 0;
  var bkgdColor = 255;
  var inp1, inp2, inp3, inp4, inp5, inp6;
  var inpNumber = 1;

  var inp1check, inp2check, inp3check, inp4check, inp5check, bkgdColorPicker;

  // SAVE
  var exportButton;

  // PRESETS
  var presetStacks,
    presetBricks,
    presetSimpleZ,
    presetComplexZ,
    presetZebra,
    presetHarlequin;

  let font;

  p5.preload = () => {
    const src = require("@/assets/fonts/NotoIKEALatin-Regular.ttf");
    font = p5.loadFont(src);
  };

  p5.setup = () => {
    strkColor = p5.color(0);
    bkgdColor = p5.color(255);

    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    p5.background(bkgdColor);
    p5.smooth();
    p5.textFont(font);
    p5.frameRate(30);

    inp = p5.select("#textfield");

    columnSlider = p5.createSlider(1, 200, 21);
    columnSlider.position(25, 17);
    columnSlider.style("width", "100px");
    rowSlider = p5.createSlider(1, 200, 21);
    rowSlider.position(25, 47);
    rowSlider.style("width", "100px");
    trackingSlider = p5.createSlider(-10, 100, 5);
    trackingSlider.position(25, 77);
    trackingSlider.style("width", "100px");
    lineSpaceSlider = p5.createSlider(-10, 100, 5);
    lineSpaceSlider.position(25, 107);
    lineSpaceSlider.style("width", "100px");

    typeXSlider = p5.createSlider(0, 100, 20);
    typeXSlider.position(25, 147);
    typeXSlider.style("width", "100px");
    typeYSlider = p5.createSlider(0, 100, 40);
    typeYSlider.position(25, 177);
    typeYSlider.style("width", "100px");
    typeStrokeSlider = p5.createSlider(0, 10, 2, 0.1);
    typeStrokeSlider.position(25, 207);
    typeStrokeSlider.style("width", "100px");

    speedSlider = p5.createSlider(-10, 10, 2);
    speedSlider.position(25, 247);
    speedSlider.style("width", "100px");
    xOffsetSlider = p5.createSlider(0.1, 60, p5.PI);
    xOffsetSlider.position(25, 277);
    xOffsetSlider.style("width", "100px");
    yOffsetSlider = p5.createSlider(0.1, 60, p5.PI);
    yOffsetSlider.position(25, 307);
    yOffsetSlider.style("width", "100px");

    zWaveSlider = p5.createSlider(0, 200, 0);
    zWaveSlider.position(25, 347);
    zWaveSlider.style("width", "100px");
    zWaveCheck = p5.createCheckbox("", false);
    zWaveCheck.position(130, 346);
    xWaveSlider = p5.createSlider(0, 200, 0);
    xWaveSlider.position(25, 377);
    xWaveSlider.style("width", "100px");
    xWaveCheck = p5.createCheckbox("", false);
    xWaveCheck.position(130, 376);
    yWaveSlider = p5.createSlider(0, 200, 0);
    yWaveSlider.position(25, 407);
    yWaveSlider.style("width", "100px");
    yWaveCheck = p5.createCheckbox("", false);
    yWaveCheck.position(130, 406);
    yWavezRotSlider = p5.createSlider(0, 60, 0);
    yWavezRotSlider.position(45, 436);
    yWavezRotSlider.style("width", "50px");
    yWavexStrSlider = p5.createSlider(0, 60, 0);
    yWavexStrSlider.position(110, 436);
    yWavexStrSlider.style("width", "50px");
    xStrechWaveSlider = p5.createSlider(0, 100, 0);
    xStrechWaveSlider.position(25, 467);
    xStrechWaveSlider.style("width", "100px");
    xStrechWaveCheck = p5.createCheckbox("", false);
    xStrechWaveCheck.position(130, 466);
    yStrechWaveSlider = p5.createSlider(0, 100, 0);
    yStrechWaveSlider.position(25, 497);
    yStrechWaveSlider.style("width", "100px");
    yStrechWaveCheck = p5.createCheckbox("", false);
    yStrechWaveCheck.position(130, 496);

    fullTextCheck = p5.createCheckbox("", true);
    fullTextCheck.position(140, 57);
    xRotCameraSlider = p5.createSlider(-180, 180, 0);
    xRotCameraSlider.position(-20, p5.height - 107);
    xRotCameraSlider.style("width", "100px");
    xRotCameraSlider.style("rotate", 270);
    yRotCameraSlider = p5.createSlider(-180, 180, 0);
    yRotCameraSlider.position(20, p5.height - 107);
    yRotCameraSlider.style("width", "100px");
    yRotCameraSlider.style("rotate", 270);
    zRotCameraSlider = p5.createSlider(-180, 180, 0);
    zRotCameraSlider.position(60, p5.height - 107);
    zRotCameraSlider.style("width", "100px");
    zRotCameraSlider.style("rotate", 270);
    zoomCameraSlider = p5.createSlider(-500, 500, 0);
    zoomCameraSlider.position(15, p5.height - 20);
    zoomCameraSlider.style("width", "100px");

    presetStacks = p5.createButton("Stacks");
    presetStacks.position(140, p5.height - 30);
    presetStacks.mousePressed(stackSet);
    presetBricks = p5.createButton("Bricks");
    presetBricks.position(200, p5.height - 30);
    presetBricks.mousePressed(brickSet);
    presetSimpleZ = p5.createButton("Simple Z");
    presetSimpleZ.position(260, p5.height - 30);
    presetSimpleZ.mousePressed(simpleZSet);
    presetComplexZ = p5.createButton("Complex Z");
    presetComplexZ.position(335, p5.height - 30);
    presetComplexZ.mousePressed(complexZSet);
    presetZebra = p5.createButton("Zebra");
    presetZebra.position(420, p5.height - 30);
    presetZebra.mousePressed(zebraSet);
    presetHarlequin = p5.createButton("Harlequin");
    presetHarlequin.position(480, p5.height - 30);
    presetHarlequin.mousePressed(harlequinSet);

    zWaveCheck.changed(zWaveChecker);
    xWaveCheck.changed(xWaveChecker);
    yWaveCheck.changed(yWaveChecker);
    xStrechWaveCheck.changed(xStrechWaveChecker);
    yStrechWaveCheck.changed(yStrechWaveChecker);
    fullTextCheck.changed(fullTexter);

    inp1 = p5.createColorPicker("#000");
    inp1.position(180, 80);
    inp1.style("width", "20px");
    inp1check = p5.createCheckbox("", true);
    inp1check.position(160, 82);
    inp2 = p5.createColorPicker("#ff0000");
    inp2.position(180, 110);
    inp2.style("width", "20px");
    inp2check = p5.createCheckbox("", false);
    inp2check.position(160, 112);
    inp3 = p5.createColorPicker("#0000ff");
    inp3.position(180, 140);
    inp3.style("width", "20px");
    inp3check = p5.createCheckbox("", false);
    inp3check.position(160, 142);
    inp4 = p5.createColorPicker("#ffff00");
    inp4.position(180, 170);
    inp4.style("width", "20px");
    inp4check = p5.createCheckbox("", false);
    inp4check.position(160, 172);
    inp5 = p5.createColorPicker("#ffffff");
    inp5.position(180, 200);
    inp5.style("width", "20px");
    inp5check = p5.createCheckbox("", false);
    inp5check.position(160, 202);

    bkgdColorPicker = p5.createColorPicker("#FFFFFF");
    bkgdColorPicker.position(160, 265);
    bkgdColorPicker.style("height", "50px");

    inp1check.changed(inp1checker);
    inp2check.changed(inp2checker);
    inp3check.changed(inp3checker);
    inp4check.changed(inp4checker);
    inp5check.changed(inp5checker);
  };

  p5.draw = () => {
    bkgdColor = bkgdColorPicker.value();
    p5.background(bkgdColor);
    inpText = String(inp.value());

    column = columnSlider.value();
    row = rowSlider.value();
    tracking = trackingSlider.value();
    lineSpace = lineSpaceSlider.value();

    speed = speedSlider.value();
    zWave = zWaveSlider.value();
    xWave = xWaveSlider.value();
    yWave = yWaveSlider.value();
    yWavezRot = yWavezRotSlider.value();
    yWavexStr = yWavexStrSlider.value();
    xStrechWave = xStrechWaveSlider.value();
    yStrechWave = yStrechWaveSlider.value();

    xOffset = xOffsetSlider.value();
    yOffset = yOffsetSlider.value();

    typeX = typeXSlider.value();
    typeY = typeYSlider.value();
    typeStroke = typeStrokeSlider.value();

    xRotCamera = xRotCameraSlider.value();
    yRotCamera = yRotCameraSlider.value();
    zRotCamera = zRotCameraSlider.value();
    zoomCamera = zoomCameraSlider.value();

    xSpace = typeX + tracking;
    ySpace = typeY + lineSpace + yStrechWave / 2;

    p5.push();
    p5.translate(-p5.width / 2, -p5.height / 2);

    p5.stroke(125);
    p5.strokeWeight(1);
    p5.line(10, 130, 130, 130);
    p5.line(10, 230, 130, 230);
    p5.line(150, 240, 220, 240);
    p5.line(10, 330, 130, 330);
    p5.line(10, 520, 130, 520);
    p5.line(185, p5.height - 43, 500, p5.height - 43);

    p5.fill(125);
    p5.textAlign(p5.LEFT);

    p5.textSize(13);
    p5.rotateZ(-p5.PI / 2);
    p5.text("GRID", -120, 17);
    p5.text("TYPE", -220, 17);
    p5.text("TYPE COLOR", -220, 150);
    p5.text("BKGD COLOR", -330, 150);
    p5.text("WAVE", -320, 17);
    p5.text("AMPLITUDE", -510, 17);
    p5.rotateZ(p5.PI / 2);

    p5.textSize(9);
    p5.text("GRID: Columns " + column, 25, 16);
    p5.text("GRID: Rows " + row, 25, 46);
    p5.text("GRID: Tracking " + tracking, 25, 76);
    p5.text("GRID: Line Space " + lineSpace, 25, 106);

    p5.text("TYPE: X-Scale " + typeX, 25, 146);
    p5.text("TYPE: Y-Scale " + typeY, 25, 176);
    p5.text("TYPE: Weight " + typeStroke, 25, 206);

    p5.text("WAVE: Speed " + speed, 25, 246);
    p5.text("WAVE: X Size" + xOffset, 25, 276);
    p5.text("WAVE: Y Size " + yOffset, 25, 306);

    p5.text("AMPLITUDE: Z Axis " + zWave, 25, 346);
    p5.text("OFFSET", 150, 360);
    p5.text("AMPLITUDE: X Axis " + xWave, 25, 376);
    p5.text("OFFSET", 150, 390);
    p5.text("AMPLITUDE: Y Axis " + yWave, 25, 406);
    p5.text("OFFSET", 150, 420);
    p5.text("Z Smooth " + yWavezRot, 45, 435);
    p5.text("X Stretch " + yWavexStr, 110, 435);
    p5.text("AMPLITUDE: X Stretch " + xStrechWave, 25, 466);
    p5.text("OFFSET", 150, 480);
    p5.text("AMPLITUDE: Y Stretch " + yStrechWave, 25, 496);
    p5.text("OFFSET", 150, 510);

    p5.text("FULL TEXT", 160, 70);

    p5.text("CAMERA: Zoom", 15, p5.height - 22);
    p5.text("PRESETS", 145, p5.height - 40);

    p5.translate(0, p5.height);
    p5.rotateZ(-p5.PI / 2);
    p5.text("CAMERA: X-Rotation " + xRotCamera, 45, 20);
    p5.text("CAMERA: Y-Rotation " + yRotCamera, 45, 60);
    p5.text("CAMERA: Z-Rotation " + zRotCamera, 45, 100);

    p5.pop();

    p5.noFill();
    p5.strokeWeight(typeStroke);

    p5.push();
    // camera
    p5.translate(0, 0, zoomCamera);
    p5.rotateX(p5.radians(xRotCamera));
    p5.rotateY(p5.radians(yRotCamera));
    p5.rotateZ(p5.radians(zRotCamera));

    if (fullText == true) {
      runLength = row * column;
      p5.translate((-column * xSpace) / 2, (-row * ySpace) / 2);
    } else {
      runLength = inpText.length;
      if (inpText.length >= column) {
        p5.translate(
          (-column * xSpace) / 2,
          (-p5.floor(inpText.length / column) * ySpace) / 2
        );
      } else {
        p5.translate(
          (-inpText.length * xSpace) / 2,
          (-p5.floor(inpText.length / column) * ySpace) / 2
        );
      }
    }

    // THE TYPE
    for (var i = 0; i < runLength; i++) {
      if (fullText == true) {
        letter_select = i % inpText.length;
      } else {
        letter_select = i;
      }

      setTextColor(p5.floor(i / column));
      p5.stroke(strkColor);

      zWaver =
        sinEngine(
          zWaveChecked,
          xOffset,
          i % column,
          yOffset,
          p5.floor(i / column),
          speed,
          1
        ) * zWave;
      xWaver = p5.map(
        sinEngine(
          xWaveChecked,
          xOffset,
          i % column,
          yOffset,
          p5.floor(i / column),
          speed,
          1
        ),
        -1,
        1,
        0,
        xWave
      );
      yWaver =
        sinEngine(
          yWaveChecked,
          xOffset,
          i % column,
          yOffset,
          p5.floor(i / column),
          speed,
          1
        ) * yWave;

      yWavezRoter =
        cosEngine(
          yWaveChecked,
          xOffset,
          i % column,
          yOffset,
          p5.floor(i / column),
          speed,
          1
        ) * yWavezRot;

      yWavexStrer = p5.map(
        cosEngine2(
          yWaveChecked,
          xOffset,
          i % column,
          yOffset,
          p5.floor(i / column),
          speed,
          1
        ),
        -1,
        1,
        0,
        yWavexStr
      );

      strecherX =
        p5.map(
          sinEngine(
            xStrechWaveChecked,
            xOffset,
            i % column,
            yOffset,
            p5.floor(i / column),
            speed,
            1
          ),
          -1,
          1,
          0,
          xStrechWave
        ) + yWavexStrer;

      if (p5.floor(i / column) % 2 == 1) {
        strecherY = p5.map(
          sinEngine(
            yStrechWaveChecked,
            xOffset,
            i % column,
            yOffset,
            p5.floor(i / column),
            speed,
            1
          ),
          -1,
          1,
          0,
          yStrechWave
        );
      } else {
        strecherY = p5.map(
          sinEngine(
            yStrechWaveChecked + p5.PI,
            xOffset,
            i % column,
            yOffset,
            p5.floor(i / column),
            speed,
            1
          ),
          -1,
          1,
          0,
          yStrechWave
        );
      }

      p5.push();
      p5.translate(
        (i % column) * xSpace + xWaver,
        p5.floor(i / column) * ySpace + yWaver,
        zWaver
      );
      p5.translate(-(typeX + strecherX) / 2, -(typeY + strecherY) / 2);

      // rotation adjustments
      var preZAnchX =
        sinEngine(
          zWaveChecked,
          xOffset,
          (i % column) - 1,
          yOffset,
          p5.floor(i / column),
          speed,
          1
        ) * zWave;
      var postZAnchX =
        sinEngine(
          zWaveChecked,
          xOffset,
          (i % column) + 1,
          yOffset,
          p5.floor(i / column),
          speed,
          1
        ) * zWave;
      var diffZAnchorX = postZAnchX - preZAnchX;
      var newYrot = p5.atan2(p5.abs(diffZAnchorX), 2 * xSpace);
      if (preZAnchX > postZAnchX) {
        p5.rotateY(newYrot);
      } else {
        p5.rotateY(-newYrot);
      }

      var preZAnchY =
        sinEngine(
          zWaveChecked,
          xOffset,
          i % column,
          yOffset,
          p5.floor(i / column) - 1,
          speed,
          1
        ) * zWave;
      var postZAnchY =
        sinEngine(
          zWaveChecked,
          xOffset,
          i % column,
          yOffset,
          p5.floor(i / column) + 1,
          speed,
          1
        ) * zWave;
      var diffZAnchorY = postZAnchY - preZAnchY;
      var newXrot = p5.atan2(p5.abs(diffZAnchorY), 2 * ySpace);
      if (preZAnchY > postZAnchY) {
        p5.rotateX(-newXrot);
      } else {
        p5.rotateX(newXrot);
      }

      p5.rotateZ(p5.radians(yWavezRoter));
      keyboardEngine();
      p5.pop();
    }

    p5.pop();
  };

  function sinEngine(
    Offset,
    xLength,
    xCounter,
    yLength,
    yCounter,
    Speed,
    slopeN
  ) {
    var sinus = p5.sin(
      (p5.frameCount * Speed) / 100 +
        xCounter / xLength +
        yCounter / yLength +
        Offset
    );
    var sign = sinus >= 0 ? 1 : -1;
    var sinerSquare = sign * (1 - p5.pow(1 - p5.abs(sinus), slopeN));
    return sinerSquare;
  }

  function cosEngine(
    Offset,
    xLength,
    xCounter,
    yLength,
    yCounter,
    Speed,
    slopeN
  ) {
    var cosus = p5.cos(
      (p5.frameCount * Speed) / 100 +
        xCounter / xLength +
        yCounter / yLength +
        Offset
    );
    var sign = cosus >= 0 ? 1 : -1;
    var coserSquare = sign * (1 - p5.pow(1 - p5.abs(cosus), slopeN));
    return coserSquare;
  }

  function cosEngine2(
    Offset,
    xLength,
    xCounter,
    yLength,
    yCounter,
    Speed,
    slopeN
  ) {
    var cosus = p5.cos(
      ((p5.frameCount * Speed) / 100 +
        xCounter / xLength +
        yCounter / yLength +
        Offset) *
        2
    );
    var sign = cosus >= 0 ? 1 : -1;
    var coserSquare = sign * (1 - p5.pow(1 - p5.abs(cosus), slopeN));
    return coserSquare;
  }

  function fullTexter() {
    if (this.checked()) {
      fullText = true;
    } else {
      fullText = false;
    }
  }

  function zWaveChecker() {
    if (this.checked()) {
      zWaveChecked = p5.PI;
    } else {
      zWaveChecked = 0;
    }
  }

  function xWaveChecker() {
    if (this.checked()) {
      xWaveChecked = p5.PI;
    } else {
      xWaveChecked = 0;
    }
  }

  function yWaveChecker() {
    if (this.checked()) {
      yWaveChecked = p5.PI;
    } else {
      yWaveChecked = 0;
    }
  }

  function xStrechWaveChecker() {
    if (this.checked()) {
      xStrechWaveChecked = p5.PI / 2;
    } else {
      xStrechWaveChecked = 0;
    }
  }

  function yStrechWaveChecker() {
    if (this.checked()) {
      yStrechWaveChecked = p5.PI / 2;
    } else {
      yStrechWaveChecked = 0;
    }
  }

  function inp1checker() {
    inp2check.checked(false);
    inp3check.checked(false);
    inp4check.checked(false);
    inp5check.checked(false);
    inpNumber = 1;
  }

  function inp2checker() {
    inp1check.checked(true);
    inp3check.checked(false);
    inp4check.checked(false);
    inp5check.checked(false);
    if (this.checked()) {
      inpNumber = 2;
    } else {
      inpNumber = 1;
    }
  }

  function inp3checker() {
    inp1check.checked(true);
    inp2check.checked(true);
    inp4check.checked(false);
    inp5check.checked(false);
    if (this.checked()) {
      inpNumber = 3;
    } else {
      inpNumber = 2;
    }
  }

  function inp4checker() {
    inp1check.checked(true);
    inp2check.checked(true);
    inp3check.checked(true);
    inp5check.checked(false);
    if (this.checked()) {
      inpNumber = 4;
    } else {
      inpNumber = 3;
    }
  }

  function inp5checker() {
    inp1check.checked(true);
    inp2check.checked(true);
    inp3check.checked(true);
    inp4check.checked(true);
    if (this.checked()) {
      inpNumber = 5;
    } else {
      inpNumber = 4;
    }
  }

  function setTextColor(switcher) {
    if (inpNumber == 6) {
      if (switcher % 6 == 0) {
        strkColor = inp1.value();
      }
      if (switcher % 6 == 1) {
        strkColor = inp2.value();
      }
      if (switcher % 6 == 2) {
        strkColor = inp3.value();
      }
      if (switcher % 6 == 3) {
        strkColor = inp4.value();
      }
      if (switcher % 6 == 4) {
        strkColor = inp5.value();
      }
      if (switcher % 6 == 5) {
        strkColor = inp6;
      }
    }
    if (inpNumber == 5) {
      if (switcher % 5 == 0) {
        strkColor = inp1.value();
      }
      if (switcher % 5 == 1) {
        strkColor = inp2.value();
      }
      if (switcher % 5 == 2) {
        strkColor = inp3.value();
      }
      if (switcher % 5 == 3) {
        strkColor = inp4.value();
      }
      if (switcher % 5 == 4) {
        strkColor = inp5.value();
      }
    } else if (inpNumber == 4) {
      if (switcher % 4 == 0) {
        strkColor = inp1.value();
      }
      if (switcher % 4 == 1) {
        strkColor = inp2.value();
      }
      if (switcher % 4 == 2) {
        strkColor = inp3.value();
      }
      if (switcher % 4 == 3) {
        strkColor = inp4.value();
      }
    } else if (inpNumber == 3) {
      if (switcher % 3 == 0) {
        strkColor = inp1.value();
      }
      if (switcher % 3 == 1) {
        strkColor = inp2.value();
      }
      if (switcher % 3 == 2) {
        strkColor = inp3.value();
      }
    } else if (inpNumber == 2) {
      if (switcher % 2 == 0) {
        strkColor = inp1.value();
      }
      if (switcher % 2 == 1) {
        strkColor = inp2.value();
      }
    } else if (inpNumber == 1) {
      strkColor = inp1.value();
    }
  }

  function reSetting() {
    yWaver = 0;
    columnSlider.value(33);
    rowSlider.value(7);
    trackingSlider.value(5);
    lineSpaceSlider.value(5);
    typeXSlider.value(20);
    typeYSlider.value(40);
    typeStrokeSlider.value(2);
    speedSlider.value(-2);
    xOffsetSlider.value(3.1);
    yOffsetSlider.value(3.1);
    xWaveSlider.value(0);
    zWaveSlider.value(0);
    xStrechWaveSlider.value(0);
    yStrechWaveSlider.value(0);
    yWaveSlider.value(0);
    yWavezRotSlider.value(0);
    yWavexStrSlider.value(0);
    xRotCameraSlider.value(0);
    yRotCameraSlider.value(0);
    zRotCameraSlider.value(0);
    zoomCameraSlider.value(0);

    xStrechWaveCheck.checked(false);
    xStrechWaveChecked = 0;
    fullTextCheck.checked(false);
    fullText = false;
    strkColor = p5.color(0);
    bkgdColor = p5.color(255);
  }

  function stackSet() {
    reSetting();
    columnSlider.value(22);
    rowSlider.value(8);
    trackingSlider.value(4);
    lineSpaceSlider.value(12);
    typeXSlider.value(20);
    typeYSlider.value(18);
    speedSlider.value(-3);
    xOffsetSlider.value(5.1);
    yOffsetSlider.value(59.1);
    yWaveSlider.value(100);
    yWavezRotSlider.value(35);
    yWavexStrSlider.value(7);

    fullTextCheck.checked(true);
    fullText = true;
  }

  function brickSet() {
    reSetting();
    columnSlider.value(20);
    rowSlider.value(9);
    trackingSlider.value(17);
    lineSpaceSlider.value(7);
    typeXSlider.value(13);
    typeYSlider.value(20);
    speedSlider.value(-4);
    xWaveSlider.value(86);
    xStrechWaveSlider.value(25);

    xStrechWaveCheck.checked(true);
    xStrechWaveChecked = p5.PI / 2;
    fullTextCheck.checked(true);
    fullText = true;
    strkColor = p5.color(255);
    bkgdColor = p5.color(0);
  }

  function simpleZSet() {
    reSetting();
    columnSlider.value(28);
    rowSlider.value(15);
    trackingSlider.value(5);
    lineSpaceSlider.value(5);
    typeXSlider.value(20);
    typeYSlider.value(40);
    speedSlider.value(-4);
    xOffsetSlider.value(9.1);
    zWaveSlider.value(90);
    xRotCameraSlider.value(33);
    yRotCameraSlider.value(-27);
    zRotCameraSlider.value(24);

    fullTextCheck.checked(true);
    fullText = true;
  }

  function complexZSet() {
    reSetting();
    columnSlider.value(38);
    rowSlider.value(10);
    trackingSlider.value(5);
    lineSpaceSlider.value(6);
    typeXSlider.value(8);
    typeYSlider.value(21);
    typeStrokeSlider.value(0.9);
    speedSlider.value(2);
    xOffsetSlider.value(4.1);
    yOffsetSlider.value(3.1);
    zWaveSlider.value(41);
    xWaveSlider.value(63);
    yWaveSlider.value(25);
    yWavezRotSlider.value(22);
    xRotCameraSlider.value(26);
    yRotCameraSlider.value(-39);
    zRotCameraSlider.value(15);
    zoomCameraSlider.value(200);

    yWaveCheck.checked(true);
    yWaveChecked = p5.PI;
    fullTextCheck.checked(true);
    fullText = true;
    strkColor = p5.color(255);
    bkgdColor = p5.color(0);
  }

  function zebraSet() {
    reSetting();
    columnSlider.value(50);
    rowSlider.value(8);
    trackingSlider.value(7);
    lineSpaceSlider.value(18.5);
    typeXSlider.value(6);
    typeYSlider.value(20);
    typeStrokeSlider.value(1);
    speedSlider.value(-4);
    xOffsetSlider.value(6.1);
    yOffsetSlider.value(5.1);
    yWaveSlider.value(33);
    yWavezRotSlider.value(18);
    yStrechWaveSlider.value(35);

    fullTextCheck.checked(true);
    fullText = true;
  }

  function harlequinSet() {
    reSetting();
    columnSlider.value(40);
    rowSlider.value(7);
    trackingSlider.value(5);
    lineSpaceSlider.value(11);
    typeXSlider.value(9);
    typeYSlider.value(19);
    typeStrokeSlider.value(1.1);
    speedSlider.value(2);
    xOffsetSlider.value(2.1);
    yOffsetSlider.value(59.1);
    yStrechWaveSlider.value(58);

    fullTextCheck.checked(true);
    fullText = true;
    strkColor = p5.color(255);
    bkgdColor = p5.color(0);
  }

  function keyboardEngine() {
    //  if (letter_select >= inpText.length) {
    //      letter_space( strecherX,  strecherY, strecherShear);
    //  } else {

    c1 = inpText.charAt(letter_select);

    if (c1 == "A") {
      letter_A(strecherX, strecherY);
    } else if (c1 == "a") {
      letter_a(strecherX, strecherY);
    } else if (c1 == "B") {
      letter_B(strecherX, strecherY);
    } else if (c1 == "b") {
      letter_b(strecherX, strecherY);
    } else if (c1 == "C") {
      letter_C(strecherX, strecherY);
    } else if (c1 == "c") {
      letter_c(strecherX, strecherY);
    } else if (c1 == "D") {
      letter_D(strecherX, strecherY);
    } else if (c1 == "d") {
      letter_d(strecherX, strecherY);
    } else if (c1 == "E") {
      letter_E(strecherX, strecherY);
    } else if (c1 == "e") {
      letter_e(strecherX, strecherY);
    } else if (c1 == "F") {
      letter_F(strecherX, strecherY);
    } else if (c1 == "f") {
      letter_f(strecherX, strecherY);
    } else if (c1 == "G") {
      letter_G(strecherX, strecherY);
    } else if (c1 == "g") {
      letter_g(strecherX, strecherY);
    } else if (c1 == "H") {
      letter_H(strecherX, strecherY);
    } else if (c1 == "h") {
      letter_h(strecherX, strecherY);
    } else if (c1 == "I") {
      letter_I(strecherX, strecherY);
    } else if (c1 == "i") {
      letter_i(strecherX, strecherY);
    } else if (c1 == "J") {
      letter_J(strecherX, strecherY);
    } else if (c1 == "j") {
      letter_j(strecherX, strecherY);
    } else if (c1 == "K") {
      letter_K(strecherX, strecherY);
    } else if (c1 == "k") {
      letter_k(strecherX, strecherY);
    } else if (c1 == "L") {
      letter_L(strecherX, strecherY);
    } else if (c1 == "l") {
      letter_l(strecherX, strecherY);
    } else if (c1 == "M") {
      letter_M(strecherX, strecherY);
    } else if (c1 == "m") {
      letter_m(strecherX, strecherY);
    } else if (c1 == "N") {
      letter_N(strecherX, strecherY);
    } else if (c1 == "n") {
      letter_n(strecherX, strecherY);
    } else if (c1 == "O") {
      letter_O(strecherX, strecherY);
    } else if (c1 == "o") {
      letter_o(strecherX, strecherY);
    } else if (c1 == "P") {
      letter_P(strecherX, strecherY);
    } else if (c1 == "p") {
      letter_p(strecherX, strecherY);
    } else if (c1 == "Q") {
      letter_Q(strecherX, strecherY);
    } else if (c1 == "q") {
      letter_q(strecherX, strecherY);
    } else if (c1 == "R") {
      letter_R(strecherX, strecherY);
    } else if (c1 == "r") {
      letter_r(strecherX, strecherY);
    } else if (c1 == "S") {
      letter_S(strecherX, strecherY);
    } else if (c1 == "s") {
      letter_s(strecherX, strecherY);
    } else if (c1 == "T") {
      letter_T(strecherX, strecherY);
    } else if (c1 == "t") {
      letter_t(strecherX, strecherY);
    } else if (c1 == "U") {
      letter_U(strecherX, strecherY);
    } else if (c1 == "u") {
      letter_u(strecherX, strecherY);
    } else if (c1 == "V") {
      letter_V(strecherX, strecherY);
    } else if (c1 == "v") {
      letter_v(strecherX, strecherY);
    } else if (c1 == "W") {
      letter_W(strecherX, strecherY);
    } else if (c1 == "w") {
      letter_w(strecherX, strecherY);
    } else if (c1 == "X") {
      letter_X(strecherX, strecherY);
    } else if (c1 == "x") {
      letter_x(strecherX, strecherY);
    } else if (c1 == "Y") {
      letter_Y(strecherX, strecherY);
    } else if (c1 == "y") {
      letter_y(strecherX, strecherY);
    } else if (c1 == "Z") {
      letter_Z(strecherX, strecherY);
    } else if (c1 == "z") {
      letter_z(strecherX, strecherY);
    } else if (c1 == "_") {
      letter_underscore(strecherX, strecherY);
    } else if (c1 == "-") {
      letter_dash(strecherX, strecherY);
    } else if (c1 == "?") {
      letter_question(strecherX, strecherY);
    } else if (c1 == ".") {
      letter_period(strecherX, strecherY);
    } else if (c1 == "!") {
      letter_exclaim(strecherX, strecherY);
    } else if (c1 == " ") {
      letter_space(strecherX, strecherY);
    } else if (c1 == ":") {
      letter_colon(strecherX, strecherY);
    } else if (c1 == ";") {
      letter_semicolon(strecherX, strecherY);
    } else if (c1 == ",") {
      letter_comma(strecherX, strecherY);
    } else if (c1 == "/") {
      letter_slash(strecherX, strecherY);
    } else if (c1 == "&") {
      letter_amp(strecherX, strecherY);
    } else if (c1 == "1") {
      one(strecherX, strecherY);
    } else if (c1 == "2") {
      two(strecherX, strecherY);
    } else if (c1 == "3") {
      three(strecherX, strecherY);
    } else if (c1 == "4") {
      four(strecherX, strecherY);
    } else if (c1 == "5") {
      five(strecherX, strecherY);
    } else if (c1 == "6") {
      six(strecherX, strecherY);
    } else if (c1 == "7") {
      seven(strecherX, strecherY);
    } else if (c1 == "8") {
      eight(strecherX, strecherY);
    } else if (c1 == "9") {
      nine(strecherX, strecherY);
    } else if (c1 == "0") {
      zero(strecherX, strecherY);
    }
    //  }
  }
  /////////////////////////////////////////////////// LETTERS

  function letter_A(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, typeY + strY);
    p5.vertex(typeX / 2 + strX / 2, 0);
    p5.vertex(typeX + strX, typeY + strY);
    p5.endShape();

    let ang = p5.atan((typeX / 2 + strX / 2) / (typeY + strY));
    let angX = p5.tan(ang) * (typeY / 3);

    p5.line(
      angX,
      (2 * typeY) / 3 + strY,
      typeX + strX - angX,
      (2 * typeY) / 3 + strY
    );
    p5.pop();
  }

  function letter_a(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, typeY + strY);
    p5.vertex(typeX + strX, typeY / 2);
    p5.bezierVertex(
      typeX + strX,
      typeY / 2,
      typeX + strX,
      typeY / 4,
      typeX / 2 + strX,
      typeY / 4
    );
    p5.vertex(typeX / 2, typeY / 4);
    p5.bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
    p5.endShape();

    p5.beginShape();
    p5.vertex(typeX + strX, (3 * typeY) / 4 + strY);
    p5.vertex(typeX + strX, (3 * typeY) / 4);
    p5.bezierVertex(
      typeX + strX,
      (3 * typeY) / 4,
      typeX + strX,
      typeY / 2,
      typeX / 2 + strX,
      typeY / 2
    );
    p5.vertex(typeX / 2, typeY / 2);
    p5.bezierVertex(0, typeY / 2, 0, (3 * typeY) / 4, 0, (3 * typeY) / 4);
    p5.vertex(0, (3 * typeY) / 4 + strY);
    p5.bezierVertex(
      0,
      (3 * typeY) / 4 + strY,
      0,
      typeY + strY,
      typeX / 2,
      typeY + strY
    );
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY
    );
    p5.vertex(typeX + strX, typeY / 2);
    p5.endShape();

    p5.pop();
  }

  function letter_B(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, typeY + strY);
    p5.vertex(0, 0);
    p5.vertex(typeX / 2 + strX, 0);
    p5.bezierVertex(
      typeX / 2 + strX,
      0,
      typeX + strX,
      0,
      typeX + strX,
      typeY / 4
    );
    p5.vertex(typeX + strX, typeY / 4 + strY / 2);
    p5.bezierVertex(
      typeX + strX,
      typeY / 2 + strY / 2,
      typeX / 2 + strX / 2,
      typeY / 2 + strY / 2,
      typeX / 2 + strX / 2,
      typeY / 2 + strY / 2
    );
    p5.vertex(0, typeY / 2 + strY / 2);
    p5.endShape();

    //repeat top hump
    p5.push();
    p5.translate(0, typeY / 2 + strY / 2);
    p5.beginShape();
    p5.vertex(0, 0);
    p5.vertex(typeX / 2 + strX, 0);
    p5.bezierVertex(
      typeX / 2 + strX,
      0,
      typeX + strX,
      0,
      typeX + strX,
      typeY / 4
    );
    p5.vertex(typeX + strX, typeY / 4 + strY / 2);
    p5.bezierVertex(
      typeX + strX,
      typeY / 2 + strY / 2,
      typeX / 2 + strX / 2,
      typeY / 2 + strY / 2,
      typeX / 2 + strX / 2,
      typeY / 2 + strY / 2
    );
    p5.vertex(0, typeY / 2 + strY / 2);
    p5.endShape();
    p5.pop();
    p5.pop();
  }

  function letter_b(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, typeY / 2);
    p5.bezierVertex(
      typeX + strX,
      typeY / 2,
      typeX + strX,
      typeY / 4,
      typeX / 2 + strX,
      typeY / 4
    );
    p5.vertex(typeX / 2, typeY / 4);
    p5.bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
    p5.vertex(0, (3 * typeY) / 4 + strY);
    p5.bezierVertex(
      0,
      (3 * typeY) / 4 + strY,
      0,
      typeY + strY,
      typeX / 2,
      typeY + strY
    );
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY
    );
    p5.vertex(typeX + strX, typeY / 2);
    p5.endShape();

    p5.line(0, 0, 0, typeY + strY);
    p5.pop();
  }

  function letter_C(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, typeY / 3);
    p5.bezierVertex(
      typeX + strX,
      typeY / 3,
      typeX + strX,
      0,
      typeX / 2 + strX,
      0
    );
    p5.vertex(typeX / 2, 0);
    p5.bezierVertex(0, 0, 0, typeY / 3, 0, typeY / 3);
    p5.vertex(0, (2 * typeY) / 3 + strY);
    p5.bezierVertex(
      0,
      (2 * typeY) / 3 + strY,
      0,
      typeY + strY,
      typeX / 2,
      typeY + strY
    );
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (2 * typeY) / 3 + strY,
      typeX + strX,
      (2 * typeY) / 3 + strY
    );
    p5.endShape();
    p5.pop();
  }

  function letter_c(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, typeY / 2);
    p5.bezierVertex(
      typeX + strX,
      typeY / 2,
      typeX + strX,
      typeY / 4,
      typeX / 2 + strX,
      typeY / 4
    );
    p5.vertex(typeX / 2, typeY / 4);
    p5.bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
    p5.vertex(0, (3 * typeY) / 4 + strY);
    p5.bezierVertex(
      0,
      (3 * typeY) / 4 + strY,
      0,
      typeY + strY,
      typeX / 2,
      typeY + strY
    );
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY
    );
    p5.endShape();

    p5.pop();
  }

  function letter_D(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, typeY / 3);
    p5.bezierVertex(
      typeX + strX,
      typeY / 3,
      typeX + strX,
      0,
      typeX / 2 + strX,
      0
    );
    p5.vertex(0, 0);
    p5.vertex(0, typeY + strY);
    p5.vertex(typeX / 2, typeY + strY);
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (2 * typeY) / 3 + strY,
      typeX + strX,
      (2 * typeY) / 3 + strY
    );
    p5.vertex(typeX + strX, typeY / 3);
    p5.endShape();
    p5.pop();
  }

  function letter_d(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, typeY / 2);
    p5.bezierVertex(
      typeX + strX,
      typeY / 2,
      typeX + strX,
      typeY / 4,
      typeX / 2 + strX,
      typeY / 4
    );
    p5.vertex(typeX / 2, typeY / 4);
    p5.bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
    p5.vertex(0, (3 * typeY) / 4 + strY);
    p5.bezierVertex(
      0,
      (3 * typeY) / 4 + strY,
      0,
      typeY + strY,
      typeX / 2,
      typeY + strY
    );
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY
    );
    p5.vertex(typeX + strX, typeY / 2);
    p5.endShape();

    p5.line(typeX + strX, 0, typeX + strX, typeY + strY);
    p5.pop();
  }

  function letter_E(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, 0);
    p5.vertex(0, 0);
    p5.vertex(0, typeY + strY);
    p5.vertex(typeX + strX, typeY + strY);
    p5.endShape();

    p5.line(
      0,
      typeY / 2 + strY / 2,
      (2 * typeX) / 3 + strX,
      typeY / 2 + strY / 2
    );
    p5.pop();
  }

  function letter_e(strX, strY) {
    p5.push();

    p5.beginShape();

    p5.vertex(0, (5 * typeY) / 8 + strY / 2);
    p5.vertex(typeX + strX, (5 * typeY) / 8 + strY / 2);
    p5.vertex(typeX + strX, typeY / 2);
    p5.bezierVertex(
      typeX + strX,
      typeY / 2,
      typeX + strX,
      typeY / 4,
      typeX / 2 + strX,
      typeY / 4
    );
    p5.vertex(typeX / 2, typeY / 4);
    p5.bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
    p5.vertex(0, (3 * typeY) / 4 + strY);
    p5.bezierVertex(
      0,
      (3 * typeY) / 4 + strY,
      0,
      typeY + strY,
      typeX / 2,
      typeY + strY
    );
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY
    );
    p5.endShape();

    p5.pop();
  }

  function letter_F(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, 0);
    p5.vertex(0, 0);
    p5.vertex(0, typeY + strY);
    p5.endShape();

    p5.line(
      0,
      typeY / 2 + strY / 2,
      (2 * typeX) / 3 + strX,
      typeY / 2 + strY / 2
    );
    p5.pop();
  }

  function letter_f(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX / 2 + strX / 2, typeY + strY);
    p5.vertex(typeX / 2 + strX / 2, typeY / 4);
    p5.bezierVertex(
      typeX / 2 + strX / 2,
      typeY / 4,
      typeX / 2 + strX / 2,
      0,
      typeX + strX / 2,
      0
    );
    p5.vertex(typeX + strX, 0);
    p5.endShape();

    p5.line(0, typeY / 2 + strY / 2, typeX + strX, typeY / 2 + strY / 2);
    p5.line(0, typeY + strY, typeX + strX, typeY + strY);
    p5.pop();
  }

  function letter_G(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, typeY / 3);
    p5.bezierVertex(
      typeX + strX,
      typeY / 3,
      typeX + strX,
      0,
      typeX / 2 + strX,
      0
    );
    p5.vertex(typeX / 2, 0);
    p5.bezierVertex(0, 0, 0, typeY / 3, 0, typeY / 3);
    p5.vertex(0, (2 * typeY) / 3 + strY);
    p5.bezierVertex(
      0,
      (2 * typeY) / 3 + strY,
      0,
      typeY + strY,
      typeX / 2,
      typeY + strY
    );
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (2 * typeY) / 3 + strY,
      typeX + strX,
      (2 * typeY) / 3 + strY
    );
    p5.endShape();

    p5.beginShape();
    p5.vertex(typeX / 2 + strX / 2, typeY / 2 + strY / 2);
    p5.vertex(typeX + strX, typeY / 2 + strY / 2);
    p5.vertex(typeX + strX, typeY + strY);
    p5.endShape();
    p5.pop();
  }

  function letter_g(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, typeY / 2);
    p5.bezierVertex(
      typeX + strX,
      typeY / 2,
      typeX + strX,
      typeY / 4,
      typeX / 2 + strX,
      typeY / 4
    );
    p5.vertex(typeX / 2, typeY / 4);
    p5.bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
    p5.vertex(0, typeY / 2 + strY);
    p5.bezierVertex(
      0,
      typeY / 2 + strY,
      0,
      (3 * typeY) / 4 + strY,
      typeX / 2,
      (3 * typeY) / 4 + strY
    );
    p5.vertex(typeX / 2 + strX, (3 * typeY) / 4 + strY);
    p5.bezierVertex(
      typeX + strX,
      (3 * typeY) / 4 + strY,
      typeX + strX,
      typeY / 2 + strY,
      typeX + strX,
      typeY / 2 + strY
    );
    p5.vertex(typeX + strX, typeY / 2);
    p5.endShape();

    p5.beginShape();
    p5.vertex(typeX / 2 + strX / 2, (3 * typeY) / 4 + strY);
    p5.vertex(typeX + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (5 * typeY) / 4 + strY,
      typeX / 2 + strX,
      (5 * typeY) / 4 + strY
    );
    p5.vertex(typeX / 2, (5 * typeY) / 4 + strY);
    p5.bezierVertex(
      0,
      (5 * typeY) / 4 + strY,
      0,
      typeY + strY,
      0,
      typeY + strY
    );
    p5.endShape();

    p5.line(typeX / 2 + strX / 2, typeY / 4, typeX + strX, typeY / 4);

    p5.pop();
  }

  function letter_H(strX, strY) {
    p5.push();

    p5.line(0, 0, 0, typeY + strY);
    p5.line(0, typeY / 2 + strY / 2, typeX + strX, typeY / 2 + strY / 2);
    p5.line(typeX + strX, 0, typeX + strX, typeY + strY);
    p5.pop();
  }

  function letter_h(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, typeY + strY);
    p5.vertex(typeX + strX, typeY / 2);
    p5.bezierVertex(
      typeX + strX,
      typeY / 2,
      typeX + strX,
      typeY / 4,
      typeX / 2 + strX,
      typeY / 4
    );
    p5.vertex(typeX / 2, typeY / 4);
    p5.bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
    p5.vertex(0, typeY + strY);
    p5.endShape();

    p5.line(0, 0, 0, typeY + strY);

    p5.pop();
  }

  function letter_I(strX, strY) {
    p5.push();

    p5.line(0, 0, typeX + strX, 0);
    p5.line(0, typeY + strY, typeX + strX, typeY + strY);
    p5.line(typeX / 2 + strX / 2, 0, typeX / 2 + strX / 2, typeY + strY);
    p5.pop();
  }

  function letter_i(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, typeY / 4);
    p5.vertex(typeX / 2 + strX / 2, typeY / 4);
    p5.vertex(typeX / 2 + strX / 2, typeY + strY);
    p5.endShape();

    p5.line(0, typeY + strY, typeX + strX, typeY + strY);
    p5.line(typeX / 2 + strX / 2, 0, typeX / 2 + strX / 2, typeY / 8);

    p5.pop();
  }

  function letter_J(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, (2 * typeY) / 3 + strY);
    p5.bezierVertex(
      0,
      (2 * typeY) / 3 + strY,
      0,
      typeY + strY,
      typeX / 2,
      typeY + strY
    );
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (2 * typeY) / 3 + strY,
      typeX + strX,
      (2 * typeY) / 3 + strY
    );
    p5.vertex(typeX + strX, 0);
    p5.vertex(typeX / 3, 0);
    p5.endShape();
    p5.pop();
  }

  function letter_j(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX / 4, typeY / 4);
    p5.vertex((3 * typeX) / 4 + strX, typeY / 4);
    p5.vertex((3 * typeX) / 4 + strX, typeY + strY);
    p5.bezierVertex(
      (3 * typeX) / 4 + strX,
      typeY + strY,
      (3 * typeX) / 4 + strX,
      (5 * typeY) / 4 + strY,
      typeX / 4 + strX,
      (5 * typeY) / 4 + strY
    );
    p5.vertex(0, (5 * typeY) / 4 + strY);
    p5.endShape();

    p5.line((3 * typeX) / 4 + strX, 0, (3 * typeX) / 4 + strX, typeY / 8);

    p5.pop();
  }

  function letter_K(strX, strY) {
    p5.push();

    p5.line(0, 0, 0, typeY + strY);
    p5.line(0, (2 * typeY) / 3 + strY, typeX + strX, 0);

    let ang = p5.atan(((2 * typeY) / 3 + strY) / (typeX + strX));
    let angX = (typeY / 2 + strY / 2) / p5.tan(ang);

    p5.line(
      typeX + strX - angX,
      typeY / 2 + strY / 2,
      typeX + strX,
      typeY + strY
    );
    p5.pop();
  }

  function letter_k(strX, strY) {
    p5.push();

    p5.line(0, 0, 0, typeY + strY);
    p5.line(typeX + strX, typeY / 4, 0, (3 * typeY) / 4 + strY);
    p5.line(
      typeX + strX,
      typeY + strY,
      typeX / 2 + strX / 2,
      typeY / 2 + strY / 2
    );

    p5.pop();
  }

  function letter_L(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, 0);
    p5.vertex(0, typeY + strY);
    p5.vertex(typeX + strX, typeY + strY);
    p5.endShape();
    p5.pop();
  }

  function letter_l(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, 0);
    p5.vertex(typeX / 2 + strX / 2, 0);
    p5.vertex(typeX / 2 + strX / 2, typeY + strY);
    p5.endShape();

    p5.line(0, typeY + strY, typeX + strX, typeY + strY);
    p5.pop();
  }

  function letter_M(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, typeY + strY);
    p5.vertex(0, 0);
    p5.vertex(typeX / 2 + strX / 2, (2 * typeY) / 3 + strY);
    p5.vertex(typeX + strX, 0);
    p5.vertex(typeX + strX, typeY + strY);
    p5.endShape();
    p5.pop();
  }

  function letter_m(strX, strY) {
    p5.push();

    p5.line(0, typeY / 4, 0, typeY + strY);

    //left Hump
    p5.beginShape();
    p5.vertex(0, (3 * typeY) / 8);
    p5.bezierVertex(0, (3 * typeY) / 8, 0, typeY / 4, typeX / 4, typeY / 4);
    p5.vertex(typeX / 4 + strX / 2, typeY / 4);
    p5.bezierVertex(
      typeX / 2 + strX / 2,
      typeY / 4,
      typeX / 2 + strX / 2,
      (3 * typeY) / 8,
      typeX / 2 + strX / 2,
      (3 * typeY) / 8
    );
    p5.vertex(typeX / 2 + strX / 2, typeY + strY);
    p5.endShape();

    p5.translate(typeX / 2 + strX / 2, 0);
    p5.beginShape();
    p5.vertex(0, (3 * typeY) / 8);
    p5.bezierVertex(0, (3 * typeY) / 8, 0, typeY / 4, typeX / 4, typeY / 4);
    p5.vertex(typeX / 4 + strX / 2, typeY / 4);
    p5.bezierVertex(
      typeX / 2 + strX / 2,
      typeY / 4,
      typeX / 2 + strX / 2,
      (3 * typeY) / 8,
      typeX / 2 + strX / 2,
      (3 * typeY) / 8
    );
    p5.vertex(typeX / 2 + strX / 2, typeY + strY);
    p5.endShape();

    p5.pop();
  }

  function letter_N(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, typeY + strY);
    p5.vertex(0, 0);
    p5.vertex(typeX + strX, typeY + strY);
    p5.vertex(typeX + strX, 0);
    p5.endShape();
    p5.pop();
  }

  function letter_n(strX, strY) {
    p5.push();

    p5.line(0, typeY / 4, 0, typeY + strY);

    p5.beginShape();
    p5.vertex(typeX + strX, typeY + strY);
    p5.vertex(typeX + strX, typeY / 2);
    p5.bezierVertex(
      typeX + strX,
      typeY / 2,
      typeX + strX,
      typeY / 4,
      typeX / 2 + strX,
      typeY / 4
    );
    p5.vertex(typeX / 2, typeY / 4);
    p5.bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
    p5.endShape();

    p5.pop();
  }

  function letter_O(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, typeY / 3);
    p5.bezierVertex(
      typeX + strX,
      typeY / 3,
      typeX + strX,
      0,
      typeX / 2 + strX,
      0
    );
    p5.vertex(typeX / 2, 0);
    p5.bezierVertex(0, 0, 0, typeY / 3, 0, typeY / 3);
    p5.vertex(0, (2 * typeY) / 3 + strY);
    p5.bezierVertex(
      0,
      (2 * typeY) / 3 + strY,
      0,
      typeY + strY,
      typeX / 2,
      typeY + strY
    );
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (2 * typeY) / 3 + strY,
      typeX + strX,
      (2 * typeY) / 3 + strY
    );
    p5.vertex(typeX + strX, typeY / 3);
    p5.endShape();
    p5.pop();
  }

  function letter_o(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, typeY / 2);
    p5.bezierVertex(
      typeX + strX,
      typeY / 2,
      typeX + strX,
      typeY / 4,
      typeX / 2 + strX,
      typeY / 4
    );
    p5.vertex(typeX / 2, typeY / 4);
    p5.bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
    p5.vertex(0, (3 * typeY) / 4 + strY);
    p5.bezierVertex(
      0,
      (3 * typeY) / 4 + strY,
      0,
      typeY + strY,
      typeX / 2,
      typeY + strY
    );
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY
    );
    p5.vertex(typeX + strX, typeY / 2);
    p5.endShape();

    p5.pop();
  }

  function letter_P(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, typeY + strY);
    p5.vertex(0, 0);
    p5.vertex(typeX / 2 + strX, 0);
    p5.quadraticVertex(typeX + strX, 0, typeX + strX, typeY / 4);
    p5.vertex(typeX + strX, typeY / 4 + strY / 2);
    p5.quadraticVertex(
      typeX + strX,
      typeY / 2 + strY / 2,
      typeX / 2 + strX,
      typeY / 2 + strY / 2
    );
    p5.vertex(0, typeY / 2 + strY / 2);
    p5.endShape();
    p5.pop();
  }

  function letter_p(strX, strY) {
    p5.push();

    p5.line(0, typeY / 4, 0, (5 * typeY) / 4 + strY);

    p5.beginShape();
    p5.vertex(typeX + strX, typeY / 2);
    p5.bezierVertex(
      typeX + strX,
      typeY / 2,
      typeX + strX,
      typeY / 4,
      typeX / 2 + strX,
      typeY / 4
    );
    p5.vertex(typeX / 2, typeY / 4);
    p5.bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
    p5.vertex(0, (3 * typeY) / 4 + strY);
    p5.bezierVertex(
      0,
      (3 * typeY) / 4 + strY,
      0,
      typeY + strY,
      typeX / 2,
      typeY + strY
    );
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY
    );
    p5.vertex(typeX + strX, typeY / 2);
    p5.endShape();

    p5.pop();
  }

  function letter_Q(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, typeY / 3);
    p5.bezierVertex(
      typeX + strX,
      typeY / 3,
      typeX + strX,
      0,
      typeX / 2 + strX,
      0
    );
    p5.vertex(typeX / 2, 0);
    p5.bezierVertex(0, 0, 0, typeY / 3, 0, typeY / 3);
    p5.vertex(0, (2 * typeY) / 3 + strY);
    p5.bezierVertex(
      0,
      (2 * typeY) / 3 + strY,
      0,
      typeY + strY,
      typeX / 2,
      typeY + strY
    );
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (2 * typeY) / 3 + strY,
      typeX + strX,
      (2 * typeY) / 3 + strY
    );
    p5.vertex(typeX + strX, typeY / 3);
    p5.endShape();

    p5.line(typeX / 2 + strX / 2, typeY / 2 + strY, typeX + strX, typeY + strY);
    p5.pop();
  }

  function letter_q(strX, strY) {
    p5.push();

    p5.line(typeX + strX, typeY / 4, typeX + strX, (5 * typeY) / 4 + strY);

    p5.beginShape();
    p5.vertex(typeX + strX, typeY / 2);
    p5.bezierVertex(
      typeX + strX,
      typeY / 2,
      typeX + strX,
      typeY / 4,
      typeX / 2 + strX,
      typeY / 4
    );
    p5.vertex(typeX / 2, typeY / 4);
    p5.bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
    p5.vertex(0, (3 * typeY) / 4 + strY);
    p5.bezierVertex(
      0,
      (3 * typeY) / 4 + strY,
      0,
      typeY + strY,
      typeX / 2,
      typeY + strY
    );
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY
    );
    p5.vertex(typeX + strX, typeY / 2);
    p5.endShape();

    p5.pop();
  }

  function letter_R(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, typeY + strY);
    p5.vertex(0, 0);
    p5.vertex(typeX / 2 + strX, 0);
    p5.quadraticVertex(typeX + strX, 0, typeX + strX, typeY / 4);
    p5.vertex(typeX + strX, typeY / 4 + strY / 2);
    p5.quadraticVertex(
      typeX + strX,
      typeY / 2 + strY / 2,
      typeX / 2 + strX,
      typeY / 2 + strY / 2
    );
    p5.vertex(0, typeY / 2 + strY / 2);
    p5.endShape();

    p5.line(
      typeX / 2 + strX / 2,
      typeY / 2 + strY / 2,
      typeX + strX,
      typeY + strY
    );
    p5.pop();
  }

  function letter_r(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, typeY / 2);
    p5.bezierVertex(
      typeX + strX,
      typeY / 2,
      typeX + strX,
      typeY / 4,
      typeX / 2 + strX,
      typeY / 4
    );
    p5.vertex(typeX / 2, typeY / 4);
    p5.bezierVertex(0, typeY / 4, 0, typeY / 2, 0, typeY / 2);
    p5.endShape();

    p5.line(0, typeY / 4, 0, typeY + strY);

    p5.pop();
  }

  function letter_S(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, typeY / 4);
    p5.bezierVertex(
      typeX + strX,
      typeY / 4,
      typeX + strX,
      0,
      typeX / 2 + strX,
      0
    );
    p5.vertex(typeX / 2, 0);
    p5.bezierVertex(0, 0, 0, typeY / 4, 0, typeY / 4);
    p5.bezierVertex(
      0,
      (2 * typeY) / 3 + strY,
      typeX + strX,
      typeY / 3,
      typeX + strX,
      (3 * typeY) / 4 + strY
    );
    p5.bezierVertex(
      typeX + strX,
      (3 * typeY) / 4 + strY,
      typeX + strX,
      typeY + strY,
      typeX / 2 + strX,
      typeY + strY
    );
    p5.vertex(typeX / 2, typeY + strY);
    p5.bezierVertex(
      0,
      typeY + strY,
      0,
      (2 * typeY) / 3 + strY,
      0,
      (2 * typeY) / 3 + strY
    );
    p5.endShape();
    p5.pop();
  }

  function letter_s(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex((7 * typeX) / 8 + strX, (3 * typeY) / 8);
    p5.bezierVertex(
      (7 * typeX) / 8 + strX,
      (3 * typeY) / 8,
      (7 * typeX) / 8 + strX,
      typeY / 4,
      typeX / 2 + strX,
      typeY / 4
    );
    p5.vertex(typeX / 2, typeY / 4);
    p5.bezierVertex(
      typeX / 8,
      typeY / 4,
      typeX / 8,
      (3 * typeY) / 8,
      typeX / 8,
      (3 * typeY) / 8
    );
    p5.bezierVertex(
      typeX / 8,
      (5 * typeY) / 8 + strY,
      typeX + strX,
      (3 * typeY) / 8,
      typeX + strX,
      (3 * typeY) / 4 + strY
    );
    p5.bezierVertex(
      typeX + strX,
      (3 * typeY) / 4 + strY,
      typeX + strX,
      typeY + strY,
      typeX / 2 + strX,
      typeY + strY
    );
    p5.vertex(typeX / 2, typeY + strY);
    p5.bezierVertex(
      0,
      typeY + strY,
      0,
      (3 * typeY) / 4 + strY,
      0,
      (3 * typeY) / 4 + strY
    );
    p5.endShape();

    p5.pop();
  }

  function letter_T(strX, strY) {
    p5.push();

    p5.line(0, 0, typeX + strX, 0);
    p5.line(typeX / 2 + strX / 2, 0, typeX / 2 + strX / 2, typeY + strY);
    p5.pop();
  }

  function letter_t(strX, strY) {
    p5.push();

    p5.line(0, typeY / 4, typeX + strX, typeY / 4);

    p5.beginShape();
    p5.vertex(typeX / 2 + strX / 2, 0);
    p5.vertex(typeX / 2 + strX / 2, (3 * typeY) / 4 + strY);
    p5.bezierVertex(
      typeX / 2 + strX / 2,
      (3 * typeY) / 4 + strY,
      typeX / 2 + strX / 2,
      typeY + strY,
      (3 * typeX) / 4 + strX / 2,
      typeY + strY
    );
    p5.vertex(typeX + strX, typeY + strY);
    p5.endShape();

    p5.pop();
  }

  function letter_U(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, 0);
    p5.vertex(0, (2 * typeY) / 3 + strY);
    p5.bezierVertex(
      0,
      (2 * typeY) / 3 + strY,
      0,
      typeY + strY,
      typeX / 2,
      typeY + strY
    );
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (2 * typeY) / 3 + strY,
      typeX + strX,
      (2 * typeY) / 3 + strY
    );
    p5.vertex(typeX + strX, 0);
    p5.endShape();
    p5.pop();
  }

  function letter_u(strX, strY) {
    p5.push();

    p5.line(typeX + strX, typeY / 4, typeX + strX, typeY + strY);

    p5.beginShape();
    p5.vertex(0, typeY / 4);
    p5.vertex(0, (3 * typeY) / 4 + strY);
    p5.bezierVertex(
      0,
      (3 * typeY) / 4 + strY,
      0,
      typeY + strY,
      typeX / 2,
      typeY + strY
    );
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY,
      typeX + strX,
      (3 * typeY) / 4 + strY
    );
    p5.endShape();

    p5.pop();
  }

  function letter_V(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, 0);
    p5.vertex(typeX / 2 + strX / 2, typeY + strY);
    p5.vertex(typeX + strX, 0);
    p5.endShape();
    p5.pop();
  }

  function letter_v(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, typeY / 4);
    p5.vertex(typeX / 2 + strX / 2, typeY + strY);
    p5.vertex(typeX + strX, typeY / 4);
    p5.endShape();

    p5.pop();
  }

  function letter_W(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, 0);
    p5.vertex(typeX / 4, typeY + strY);
    p5.vertex(typeX / 2 + strX / 2, typeY / 3);
    p5.vertex((3 * typeX) / 4 + strX, typeY + strY);
    p5.vertex(typeX + strX, 0);
    p5.endShape();
    p5.pop();
  }

  function letter_w(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, typeY / 4);
    p5.vertex(typeX / 4 + strX / 4, typeY + strY);
    p5.vertex(typeX / 2 + strX / 2, typeY / 2 + strY / 2);
    p5.vertex((3 * typeX) / 4 + (3 * strX) / 4, typeY + strY);
    p5.vertex(typeX + strX, typeY / 4);
    p5.endShape();

    p5.pop();
  }

  function letter_X(strX, strY) {
    p5.push();

    p5.line(0, 0, typeX + strX, typeY + strY);
    p5.line(0, typeY + strY, typeX + strX, 0);
    p5.pop();
  }

  function letter_x(strX, strY) {
    p5.push();

    p5.line(0, typeY / 4, typeX + strX, typeY + strY);
    p5.line(0, typeY + strY, typeX + strX, typeY / 4);
    p5.pop();
  }

  function letter_Y(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, 0);
    p5.vertex(typeX / 2 + strX / 2, typeY / 2 + strY / 2);
    p5.vertex(typeX + strX, 0);
    p5.endShape();

    p5.line(
      typeX / 2 + strX / 2,
      typeY / 2 + strY / 2,
      typeX / 2 + strX / 2,
      typeY + strY
    );
    p5.pop();
  }

  function letter_y(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, typeY / 4);
    p5.vertex(typeX / 2 + strX / 2, typeY + strY);
    p5.vertex(typeX + strX, typeY / 4);
    p5.endShape();

    p5.beginShape();
    p5.vertex(typeX / 2 + strX / 2, typeY + strY);
    p5.bezierVertex(
      typeX / 2 + strX / 2,
      typeY + strY,
      typeX / 2 + strX / 2,
      (5 * typeY) / 4 + strY,
      strX / 2,
      (5 * typeY) / 4 + strY
    );
    p5.vertex(0, (5 * typeY) / 4 + strY);
    p5.endShape();

    p5.pop();
  }

  function letter_Z(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, 0);
    p5.vertex(typeX + strX, 0);
    p5.vertex(0, typeY + strY);
    p5.vertex(typeX + strX, typeY + strY);
    p5.endShape();
    p5.pop();
  }

  function letter_z(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, typeY / 4);
    p5.vertex(typeX + strX, typeY / 4);
    p5.vertex(0, typeY + strY);
    p5.vertex(typeX + strX, typeY + strY);
    p5.endShape();

    p5.pop();
  }

  function letter_underscore(strX, strY) {
    p5.push();

    p5.line(0, typeY + strY, typeX + strX, typeY + strY);
    p5.pop();
  }

  function letter_dash(strX, strY) {
    p5.push();

    p5.line(0, typeY / 2 + strY / 2, typeX + strX, typeY / 2 + strY / 2);
    p5.pop();
  }

  function letter_question(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, typeY / 3);
    p5.bezierVertex(0, typeY / 3, 0, 0, typeX / 2, 0);
    p5.vertex(typeX / 2 + strX, 0);
    p5.bezierVertex(
      typeX + strX,
      0,
      typeX + strX,
      typeY / 3,
      typeX + strX,
      typeY / 3
    );
    p5.vertex(typeX + strX, typeY / 3 + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY / 3 + strY,
      typeX + strX,
      typeY / 3 + typeY / 4 + strY,
      typeX / 2 + strX / 2,
      typeY / 3 + typeY / 4 + strY
    );
    p5.vertex(typeX / 2 + strX / 2, (3 * typeY) / 4 + strY);
    p5.endShape();

    p5.line(
      typeX / 2 + strX / 2,
      (7 * typeY) / 8 + strY,
      typeX / 2 + strX / 2,
      typeY + strY
    );
    p5.pop();
  }

  function letter_period(strX, strY) {
    p5.push();

    p5.line(
      typeX / 2 + strX / 2,
      (7 * typeY) / 8 + strY,
      typeX / 2 + strX / 2,
      typeY + strY
    );
    p5.pop();
  }

  function letter_colon(strX, strY) {
    p5.push();

    p5.line(
      typeX / 2 + strX / 2,
      typeY / 2 + strY / 2 - typeY / 8,
      typeX / 2 + strX / 2,
      typeY / 2 + strY / 2
    );
    p5.line(
      typeX / 2 + strX / 2,
      (7 * typeY) / 8 + strY,
      typeX / 2 + strX / 2,
      typeY + strY
    );
    p5.pop();
  }

  function letter_semicolon(strX, strY) {
    p5.push();

    p5.line(
      typeX / 2 + strX / 2,
      typeY / 2 + strY / 2 - typeY / 8,
      typeX / 2 + strX / 2,
      typeY / 2 + strY / 2
    );
    p5.line(
      typeX / 2 + strX / 2,
      (7 * typeY) / 8 + strY,
      typeX / 2 + strX / 2 - typeX / 4,
      typeY + strY
    );
    p5.pop();
  }

  function letter_comma(strX, strY) {
    p5.push();

    p5.line(
      typeX / 2 + strX / 2,
      (7 * typeY) / 8 + strY,
      typeX / 2 + strX / 2 - typeX / 4,
      typeY + strY
    );
    p5.pop();
  }

  function letter_exclaim(strX, strY) {
    p5.push();

    p5.line(
      typeX / 2 + strX / 2,
      0,
      typeX / 2 + strX / 2,
      (3 * typeY) / 4 + strY
    );

    p5.line(
      typeX / 2 + strX / 2,
      (7 * typeY) / 8 + strY,
      typeX / 2 + strX / 2,
      typeY + strY
    );
    p5.pop();
  }

  function letter_slash(strX, strY) {
    p5.push();

    p5.line(0, typeY + strY, typeX + strX, 0);
    p5.pop();
  }

  function letter_amp(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, typeY + strY);
    p5.quadraticVertex(typeX / 8, typeY / 4, typeX / 8, typeY / 8);
    p5.quadraticVertex(typeX / 8, 0, (3 * typeX) / 8, 0);
    p5.vertex((3 * typeX) / 8 + strX, 0);
    p5.bezierVertex(
      (5 * typeX) / 8 + strX,
      0,
      (5 * typeX) / 8 + strX,
      typeY / 8,
      (5 * typeX) / 8 + strX,
      typeY / 8
    );
    p5.bezierVertex(
      (5 * typeX) / 8 + strX,
      typeY / 4,
      0,
      typeY / 2 + strY,
      0,
      (3 * typeY) / 4 + strY
    );
    p5.quadraticVertex(0, typeY + strY, typeX / 2, typeY + strY);
    p5.vertex(typeX / 2 + strX, typeY + strY);
    p5.bezierVertex(
      typeX + strX,
      typeY + strY,
      typeX + strX,
      typeY / 2 + strY / 2,
      typeX + strX,
      typeY / 2 + strY / 2
    );
    p5.vertex((3 * typeX) / 4 + strX, typeY / 2 + strY / 2);
    p5.endShape();
    p5.pop();
  }

  function letter_space(strX, strY) {
    p5.push();

    p5.pop();
  }

  function one(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, typeY / 4);
    p5.vertex(typeX / 2 + strX / 2, 0);
    p5.vertex(typeX / 2 + strX / 2, typeY + strY);
    p5.endShape();

    p5.line(0, typeY + strY, typeX + strX, typeY + strY);
    p5.pop();
  }

  function two(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, typeY / 3);
    p5.quadraticVertex(0, 0, typeX / 2, 0);
    p5.vertex(typeX / 2 + strX, 0);
    p5.quadraticVertex(typeX + strX, 0, typeX + strX, typeY / 3);
    p5.vertex(typeX + strX, typeY / 3 + strY);
    p5.bezierVertex(
      typeX + strX,
      (2 * typeY) / 3 + strY,
      0,
      (2 * typeY) / 3 + strY,
      0,
      typeY + strY
    );
    p5.vertex(typeX + strX, typeY + strY);
    p5.endShape();
    p5.pop();
  }

  function three(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, 0);
    p5.vertex(typeX + strX, 0);
    p5.vertex(typeX / 2 + strX / 2, typeY / 3);
    p5.quadraticVertex(typeX + strX, typeY / 3, typeX + strX, (2 * typeY) / 3);
    p5.vertex(typeX + strX, (2 * typeY) / 3 + strY);
    p5.quadraticVertex(
      typeX + strX,
      typeY + strY,
      typeX / 2 + strX,
      typeY + strY
    );
    p5.vertex(typeX / 2, typeY + strY);
    p5.bezierVertex(
      0,
      typeY + strY,
      0,
      (2 * typeY) / 3 + strY,
      0,
      (2 * typeY) / 3 + strY
    );
    p5.endShape();
    p5.pop();
  }

  function four(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX / 3, 0);
    p5.vertex(0, (2 * typeY) / 3 + strY);
    p5.vertex(typeX + strX, (2 * typeY) / 3 + strY);
    p5.endShape();
    p5.line((2 * typeX) / 3 + strX, 0, (2 * typeX) / 3 + strX, typeY + strY);
    p5.pop();
  }

  function five(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, 0);
    p5.vertex(0, 0);
    p5.vertex(0, typeY / 3);
    p5.vertex(typeX / 2 + strX, typeY / 3);
    p5.quadraticVertex(typeX + strX, typeY / 3, typeX + strX, (2 * typeY) / 3);
    p5.vertex(typeX + strX, (2 * typeY) / 3 + strY);
    p5.quadraticVertex(
      typeX + strX,
      typeY + strY,
      typeX / 2 + strX,
      typeY + strY
    );
    p5.bezierVertex(
      0,
      typeY + strY,
      0,
      (2 * typeY) / 3 + strY,
      0,
      (2 * typeY) / 3 + strY
    );
    p5.endShape();
    p5.pop();
  }

  function six(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX + strX, (2 * typeY) / 3 + strY);
    p5.quadraticVertex(
      typeX + strX,
      typeY + strY,
      typeX / 2 + strX,
      typeY + strY
    );
    p5.vertex(typeX / 2, typeY + strY);
    p5.bezierVertex(
      0,
      typeY + strY,
      0,
      (2 * typeY) / 3 + strY,
      0,
      (2 * typeY) / 3 + strY
    );
    p5.vertex(0, (2 * typeY) / 3);
    p5.quadraticVertex(0, typeY / 3, typeX / 2, typeY / 3);
    p5.vertex(typeX / 2 + strX, typeY / 3);
    p5.bezierVertex(
      typeX + strX,
      typeY / 3,
      typeX + strX,
      (2 * typeY) / 3,
      typeX + strX,
      (2 * typeY) / 3
    );
    p5.vertex(typeX + strX, (2 * typeY) / 3 + strY);
    p5.endShape();

    p5.beginShape();
    p5.vertex(0, (2 * typeY) / 3);
    p5.quadraticVertex(0, 0, (2 * typeX) / 3, 0);
    p5.endShape();
    p5.pop();
  }

  function seven(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, 0);
    p5.vertex(typeX + strX, 0);
    p5.vertex(typeX / 2 + strX / 2, typeY + strY);
    p5.endShape();
    p5.pop();
  }

  function eight(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, typeY / 4);
    p5.quadraticVertex(0, 0, typeX / 2, 0);
    p5.vertex(typeX / 2 + strX, 0);
    p5.bezierVertex(
      typeX + strX,
      0,
      typeX + strX,
      typeY / 4,
      typeX + strX,
      typeY / 4
    );
    p5.vertex(typeX + strX, typeY / 4 + strY / 2);
    p5.quadraticVertex(
      typeX + strX,
      typeY / 2 + strY / 2,
      typeX / 2 + strX,
      typeY / 2 + strY / 2
    );
    p5.vertex(typeX / 2, typeY / 2 + strY / 2);
    p5.bezierVertex(
      0,
      typeY / 2 + strY / 2,
      0,
      typeY / 4 + strY / 2,
      0,
      typeY / 4 + strY / 2
    );
    p5.vertex(0, typeY / 4);
    p5.endShape();

    p5.translate(0, typeY / 2 + strY / 2); //bottom hump
    p5.beginShape();
    p5.vertex(0, typeY / 4);
    p5.quadraticVertex(0, 0, typeX / 2, 0);
    p5.vertex(typeX / 2 + strX, 0);
    p5.bezierVertex(
      typeX + strX,
      0,
      typeX + strX,
      typeY / 4,
      typeX + strX,
      typeY / 4
    );
    p5.vertex(typeX + strX, typeY / 4 + strY / 2);
    p5.quadraticVertex(
      typeX + strX,
      typeY / 2 + strY / 2,
      typeX / 2 + strX,
      typeY / 2 + strY / 2
    );
    p5.vertex(typeX / 2, typeY / 2 + strY / 2);
    p5.bezierVertex(
      0,
      typeY / 2 + strY / 2,
      0,
      typeY / 4 + strY / 2,
      0,
      typeY / 4 + strY / 2
    );
    p5.vertex(0, typeY / 4);
    p5.endShape();

    p5.pop();
  }

  function nine(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(0, typeY / 3);
    p5.quadraticVertex(0, 0, typeX / 2, 0);
    p5.vertex(typeX / 2 + strX, 0);
    p5.bezierVertex(
      typeX + strX,
      0,
      typeX + strX,
      typeY / 3,
      typeX + strX,
      typeY / 3
    );
    p5.vertex(typeX + strX, typeY / 3 + strY);
    p5.quadraticVertex(
      typeX + strX,
      (2 * typeY) / 3 + strY,
      typeX / 2 + strX,
      (2 * typeY) / 3 + strY
    );
    p5.vertex(typeX / 2, (2 * typeY) / 3 + strY);
    p5.bezierVertex(
      0,
      (2 * typeY) / 3 + strY,
      0,
      typeY / 3 + strY,
      0,
      typeY / 3 + strY
    );
    p5.vertex(0, typeY / 3);
    p5.endShape();

    p5.line(typeX + strX, typeY / 3 + strY, typeX + strX, typeY + strY);
    p5.pop();
  }

  function zero(strX, strY) {
    p5.push();

    p5.beginShape();
    p5.vertex(typeX / 2 + strX, 0);
    p5.quadraticVertex(typeX + strX, 0, typeX + strX, typeY / 3);
    p5.vertex(typeX + strX, (2 * typeY) / 3 + strY);
    p5.quadraticVertex(
      typeX + strX,
      typeY + strY,
      typeX / 2 + strX,
      typeY + strY
    );
    p5.vertex(typeX / 2, typeY + strY);
    p5.quadraticVertex(0, typeY + strY, 0, (2 * typeY) / 3 + strY);
    p5.vertex(0, typeY / 3);
    p5.quadraticVertex(0, 0, typeX / 2, 0);
    p5.vertex(typeX / 2 + strX, 0);
    p5.endShape();

    p5.line(
      (2 * typeX) / 3 + strX,
      typeY / 3,
      typeX / 3,
      (2 * typeY) / 3 + strY
    );
    p5.pop();
  }
};
