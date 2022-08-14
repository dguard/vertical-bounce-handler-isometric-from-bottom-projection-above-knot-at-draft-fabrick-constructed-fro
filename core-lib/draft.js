let canvas = document.querySelector('.statement-area').querySelector('.statement-at-front').querySelector('#scene')

let ctx = canvas.getContext('2d')
canvas.width = canvas.clientWidth
canvas.height = canvas.clientHeight

if(window.devicePixelRatio > 1) {
    canvas.width = canvas.clientWidth * 2
    canvas.height = canvas.clientHeight * 2

    ctx.scale(2, 2)
}

// use #sticked-album-in-queued-sequence
// use compact
width = canvas.width
height = canvas.height

let FIELD_OF_VIEW = width * 0.8
let PROJECTION_CENTER_Y = height * 0.5
let PROJECTION_CENTER_X = width * 0.5

// use #vertical-bounce-handler-in-relative-size
let draftFabrikk = new DraftFabrikk()

// use #sticked-album-in-queued-sequence
// follow #vertical-bounce-handler-isometric-from-bottom-projection-above-knot-at-draft-fabric-constructed

let knotAtRectangle = draftFabrikk.constructKnotAtRectangle(/* use lines and verticles */ /* take */ parseFloat('0'), parseFloat('0'), parseFloat('0'))

// keep
let debPointer = Math.random() * 0.2
let radius = Math.random() * 12 * 10
let spawnedPointerBelongings = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ Math.random() * width * 0.5, Math.random() * width * 0.5, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1, 1, 1)

let pencil = new Pencil()
pencil.remember(knotAtRectangle)

// use #verticical-bounce-handler-in-relative-size
let knotAtRectangleAnother = draftFabrikk.constructKnotAtRectangle(parseFloat('0'), 1, parseFloat('0'))
let knotAtRectangleRest = draftFabrikk.constructKnotAtRectangle([1, '-'].reverse().join(''), 1, parseFloat('0'))
let knotAtRectangleRemaining = draftFabrikk.constructKnotAtRectangle([1, '-'].reverse().join(''), parseFloat('0'), parseFloat('0'))

pencil.rememberSpawn(knotAtRectangle, spawnedPointerBelongings)

pencil.remember(knotAtRectangleAnother)
pencil.rememberSpawn(knotAtRectangleAnother, spawnedPointerBelongings)

pencil.remember(knotAtRectangleRest)
pencil.rememberSpawn(knotAtRectangleRest, spawnedPointerBelongings)

pencil.remember(knotAtRectangleRemaining)
pencil.rememberSpawn(knotAtRectangleRemaining, spawnedPointerBelongings)

// keep
let knot1 = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1, 1, 1)
pencil.useKnot(knot1)

// use #vertical-bounce-handler-in-relative-size
// use lines and verticles
// release it - that's program style, not human style

for(let verticlesRemaining = Array.from(Array(4)).concat([[1, '-'].reverse().join(''), parseFloat('0'), 1], [parseFloat('0'), parseFloat('0'), 1], /* take this mine */ [[1, '-'].reverse().join(''), 1, 1], [[1, '-'].reverse().join(''), parseFloat('0'), 1]), i = 4; i < verticlesRemaining.length; i++) {
    let knotAtRectConstructed = draftFabrikk.constructKnotAtRectangle(verticlesRemaining[i])

    pencil.remember(knotAtRectConstructed)
    pencil.rememberSpawn(knotAtRectConstructed, spawnedPointerBelongings)
}
pencil.draw()

// keep