let p5 = null;
function keyboardEngine(_p5) {
  if (!p5) p5 = _p5;

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

  ang = atan((typeX / 2 + strX / 2) / (typeY + strY));
  angX = tan(ang) * (typeY / 3);

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
  p5.bezierVertex(0, (5 * typeY) / 4 + strY, 0, typeY + strY, 0, typeY + strY);
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

  ang = atan(((2 * typeY) / 3 + strY) / (typeX + strX));
  angX = (typeY / 2 + strY / 2) / tan(ang);

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
  quadraticVertex(typeX + strX, 0, typeX + strX, typeY / 4);
  p5.vertex(typeX + strX, typeY / 4 + strY / 2);
  quadraticVertex(
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
  quadraticVertex(typeX + strX, 0, typeX + strX, typeY / 4);
  p5.vertex(typeX + strX, typeY / 4 + strY / 2);
  quadraticVertex(
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
  quadraticVertex(typeX / 8, typeY / 4, typeX / 8, typeY / 8);
  quadraticVertex(typeX / 8, 0, (3 * typeX) / 8, 0);
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
  quadraticVertex(0, typeY + strY, typeX / 2, typeY + strY);
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
  quadraticVertex(0, 0, typeX / 2, 0);
  p5.vertex(typeX / 2 + strX, 0);
  quadraticVertex(typeX + strX, 0, typeX + strX, typeY / 3);
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
  quadraticVertex(typeX + strX, typeY / 3, typeX + strX, (2 * typeY) / 3);
  p5.vertex(typeX + strX, (2 * typeY) / 3 + strY);
  quadraticVertex(typeX + strX, typeY + strY, typeX / 2 + strX, typeY + strY);
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
  quadraticVertex(typeX + strX, typeY / 3, typeX + strX, (2 * typeY) / 3);
  p5.vertex(typeX + strX, (2 * typeY) / 3 + strY);
  quadraticVertex(typeX + strX, typeY + strY, typeX / 2 + strX, typeY + strY);
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
  quadraticVertex(typeX + strX, typeY + strY, typeX / 2 + strX, typeY + strY);
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
  quadraticVertex(0, typeY / 3, typeX / 2, typeY / 3);
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
  quadraticVertex(0, 0, (2 * typeX) / 3, 0);
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
  quadraticVertex(0, 0, typeX / 2, 0);
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
  quadraticVertex(
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
  quadraticVertex(0, 0, typeX / 2, 0);
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
  quadraticVertex(
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
  quadraticVertex(0, 0, typeX / 2, 0);
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
  quadraticVertex(
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
  quadraticVertex(typeX + strX, 0, typeX + strX, typeY / 3);
  p5.vertex(typeX + strX, (2 * typeY) / 3 + strY);
  quadraticVertex(typeX + strX, typeY + strY, typeX / 2 + strX, typeY + strY);
  p5.vertex(typeX / 2, typeY + strY);
  quadraticVertex(0, typeY + strY, 0, (2 * typeY) / 3 + strY);
  p5.vertex(0, typeY / 3);
  quadraticVertex(0, 0, typeX / 2, 0);
  p5.vertex(typeX / 2 + strX, 0);
  p5.endShape();

  p5.line((2 * typeX) / 3 + strX, typeY / 3, typeX / 3, (2 * typeY) / 3 + strY);
  p5.pop();
}
