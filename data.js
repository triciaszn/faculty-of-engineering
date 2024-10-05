var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.3158092658880136,
        "pitch": -0.1834362946499546,
        "fov": 1.1678810529903434
      },
      "linkHotspots": [
        {
          "yaw": 0.18207390601169315,
          "pitch": -0.25740847150500556,
          "rotation": 12.566370614359176,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3182026792407697,
          "pitch": -0.3363467127203634,
          "title": "Fun Fact!",
          "text": "Men outnumber women 3 to 1!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.08933280363231688,
        "pitch": -0.06822180722157434,
        "fov": 1.1678810529903434
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -1.3212406026441599,
          "pitch": 0.11720998373254687,
          "title": "Fun Fact!",
          "text": "This cafe is gone"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.0547110370385937,
        "pitch": -0.18326596838084086,
        "fov": 1.1678810529903434
      },
      "linkHotspots": [
        {
          "yaw": 0.0809077732641903,
          "pitch": -0.05962417535033637,
          "rotation": 0,
          "target": "1-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.08187639757904464,
          "pitch": -0.26681642818501494,
          "title": "Fun Fact!",
          "text": "I have never been here"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
