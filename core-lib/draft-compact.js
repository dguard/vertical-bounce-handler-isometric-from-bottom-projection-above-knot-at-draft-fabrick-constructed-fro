
function DraftFabrikk(){
    let that = this

    let dictKnot = {}
    let queueKnot = []

    let dict = {}
    let queue = []

    // #descending-from-the-sun
    that.constructKnotAtRectangle = function (y, x, z) {
        dictKnot[JSON.stringify({y, x, z})] = {y, x, z}
        queueKnot.push({y, x, z})

        return {y, x, z}
    }
    that.spawnPointerBelongingsAtRectangle = function (y, x, z, /* keep */ radius, /* keep ! */ d, f, frontRatio, debthScaleRatio, frontScaleRatio, profileScaleRatio) {
        // keep
        // #descending-from-the-sun
        // what's simple we are not using "o"

        /*
        for(let pointerBelongings = Array.from(arguments.callee), i = 0, o = {}; i < pointerBelongings.length; i++) {
            o[[0].indexOf(i) !== -1 ? 'y' : [1].indexOf(i) !== -1 ? 'x' : 'z'] = pointerBelongings[i]
            if(i === 2) return o
        }
        */

        // let me rewrite it
        // keep

        /*
        return {
            y, x, z
        }
        */
        // keep

        // let me look forward

        return {
            y,
            x,
            z,

            radius, d, f, frontRatio,
            debthScaleRatio, frontScaleRatio, profileScaleRatio
        }
    }
    that.constructKnot = function (y, x, z, radius, frontRatio, d, f, debthScaleRatio, profileScaleRatio, frontScaleRatio) {
        let knot = new RectangleOnPaper(radius, frontRatio, d, f, debthScaleRatio, profileScaleRatio, frontScaleRatio)

        knot.assignCoordinates(y, x, z)

        // keep
        knot.useKnotAtRectangle(queueKnot)

        // no luck, there mate !
        // keep

        return knot
    }
}

function Pencil() {
    let that = this

    let queueKnotAtRectangle = []
    let dictKnot = {}

    let dictSpawn = {}
    let queueSpawn = {}

    let selectedKnot

    that.remember = function (knotAtRectangle) {
        dictKnot[knotAtRectangle] = knotAtRectangle
        queueKnotAtRectangle.push(knotAtRectangle)
    }
    that.rememberSpawn = function (knotAtRectangle, spawnedPointerBelongings) {
        // keep
        dictSpawn[spawnedPointerBelongings] = {
            spawnedPointerBelongings,
            knotAtRectangle
        }
        queueSpawn.push(spawnedPointerBelongings)
    }
    that.useKnot = function (knot) {
        selectedKnot = knot
    }

    that.draw = function () {
        // keep
        selectedKnot.atPointerBelongings(dictSpawn[selectedKnot]['spawnedPointerBelongings'])
        selectedKnot.draw()
    }
}

// use #descending-from-the-sun
function RectangleOnPaper(radius, frontRatio, p, d, debthScaleRatio, profileScaleRatio, frontScaleRatio) {
    let that = this

    that.assignCoordinates = function (y, x, z) {
        that.y = y
        that.x = x
        that.z = z
    }

    that.project = function (y, x, z) {
        let SIZE_PROJECTION = FIELD_OF_VIEW / (FIELD_OF_VIEW + z)

        return {
            y: (SIZE_PROJECTION * y) + PROJECTION_CENTER_Y,
            x: (SIZE_PROJECTION * x) + PROJECTION_CENTER_X
        }
    }

    // #descending-from-the-sun
    let lines = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 0], [2, 7], /* that's mine */ [7, 8]]

    // keep
    that.useKnotAtRectangle = function (queueKnot) {
        that.queueKnot = queueKnot
    }
    that.atPointerBelongings = function (pointerBelongings) {
        that.pointerBelongings = pointerBelongings
    }

    that.draw = function () {
        // keep

        // y, x, z
        // that.pointerBelongings
    }
}