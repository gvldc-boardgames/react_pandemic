import React from 'react';
import {cities} from './../constants/cities';

// TODO: get locations from some sort of state... global reducer perhaps?
const locations = {
  0: {
    coords: [250, 205],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  1: {
    coords: [200, 320],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  2: {
    coords: [265, 350],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0,
    station: true
  },
  3: {
    coords: [185, 410],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  4: {
    coords: [255, 445],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  5: {
    coords: [205, 475],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  6: {
    coords: [240, 660],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  7: {
    coords: [175, 665],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  8: {
    coords: [205, 720],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  9: {
    coords: [155, 755],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  10: {
    coords: [215, 780],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  11: {
    coords: [140, 835],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  12: {
    coords: [320, 215],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  13: {
    coords: [345, 305],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  14: {
    coords: [445, 370],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  15: {
    coords: [510, 420],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  16: {
    coords: [390, 420],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  17: {
    coords: [310, 425],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  18: {
    coords: [560, 485],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  19: {
    coords: [510, 530],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  20: {
    coords: [385, 695],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  21: {
    coords: [435, 760],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  22: {
    coords: [535, 815],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  23: {
    coords: [390, 840],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  24: {
    coords: [275, 710],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  25: {
    coords: [300, 830],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  26: {
    coords: [245, 845],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  27: {
    coords: [270, 895],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  28: {
    coords: [350, 920],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  29: {
    coords: [200, 900],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  30: {
    coords: [245, 955],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  31: {
    coords: [310, 970],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  32: {
    coords: [360, 990],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  33: {
    coords: [285, 1030],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  34: {
    coords: [375, 1040],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  35: {
    coords: [315, 1085],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  36: {
    coords: [440, 1095],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  37: {
    coords: [365, 1115],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  38: {
    coords: [220, 1145],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  39: {
    coords: [285, 1170],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  40: {
    coords: [345, 1175],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  41: {
    coords: [425, 1185],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  42: {
    coords: [205, 1220],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  43: {
    coords: [320, 1230],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  44: {
    coords: [405, 1255],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  45: {
    coords: [225, 1270],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  46: {
    coords: [280, 1285],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  },
  47: {
    coords: [555, 1320],
    yellow: 0,
    red: 0,
    black: 0,
    blue: 0
  }
};

const CityLayer = () => {
  const items = [];
  Object.entries(cities).forEach(([id, city]) => {
  });
  return <div>All the cities</div>
};

export default CityLayer;
