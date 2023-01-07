//Get reference to Canvas
var canvas = document.getElementById('canvas');

//Get reference to Canvas Context
var context = canvas.getContext('2d');

// Initialize loading variable
var load_counter = 0;

// Initialize images for layers
var layers_1 = new Image();
var layers_2 = new Image();
var layers_3 = new Image();
var layers_4 = new Image();
var layers_5 = new Image();
var layers_6 = new Image();
var layers_7 = new Image();

// Create a list of layer objects
var layer_list = [
    {
        'image': layers_1,
        'src': './images/layer-01-background-water.png',
        'z-index': -3,
        'position' : {x: 0, y: 0},
        'blend': null,
        'opacity':1
    },
    {
        'image': layers_2,
        'src': './images/layer-02-leaf.png',
        'z-index': -2,
        'position' : {x: 0, y: 0},
        'blend': null,
        'opacity':1
    },
    {
        'image': layers_3,
        'src': './images/layer-03-wave.png',
        'z-index': -1,
        'position' : {x: 0, y: 0},
        'blend': null,
        'opacity':1
    },
    {
        'image': layers_4,
        'src': './images/layer-04-body.png',
        'z-index': 0,
        'position' : {x: 0, y: 0},
        'blend': null,
        'opacity':1
    },
    {
        'image': layers_5,
        'src': './images/layer-05-head.png',
        'z-index': 1,
        'position' : {x: 0, y: 0},
        'blend': null,
        'opacity':1
    },
    {
        'image': layers_6,
        'src': './images/layer-06-sun-rays.png',
        'z-index': 2,
        'position' : {x: 0, y: 0},
        'blend': null,
        'opacity':1
    },
    {
        'image': layers_7,
        'src': './images/layer-07-sun.png',
        'z-index': 3,
        'position' : {x: 0, y: 0},
        'blend': null,
        'opacity':1
    },
];

layer_list.forEach(function(layer, index){
    layer.image.onload = function() {
        load_counter += 1;
        if (load_counter >= layer_list.length) {
            requestAnimationFrame(drawCanvas);
        }
    }
    layer.image.src = layer.src;
});

function drawCanvas() {
    // clear whatever is in the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Loop throught each layer and draw it to the canvas
    layer_list.forEach(function(layer, index) {
        if (layer.blend) {
            context.globalCompositeOperation = layer.blend;
        } else {
            context.globalCompositeOperation = 'normal';
        }
        context.globalAlpha = layer.opacity;


        context.drawImage(layer.image, layer.position.x, layer.position.y);
    });

    requestAnimationFrame(drawCanvas);
};


//// TOUCH AND MOUSE CONTROLS ////
var moving = false;

// initialize touch and mouse position
var pointer_initial = {
    x: 0,
    y: 0
};

canvas.addEventListener('touchstart', pointerStart);
canvas.addEventListener('mousedown', pointerStart);

function pointerStart(event) {
    moving = true;
    if (event.type === 'touchstart') {
        alert('touch');

    } else if ( event.type === 'mousedown') {
        alert('mouseDown');
    }
};