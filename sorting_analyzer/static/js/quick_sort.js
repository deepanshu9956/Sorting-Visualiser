function rectangle(array1, array2) {
    var mydiv = document.getElementById("histo")
    var svgns = "http://www.w3.org/2000/svg";
    animation = []

    quick_sort(array1, 0, array1.length - 1, animation)

    // console.log('animation ', animation)
    animation.forEach(function (animation_indices, i) {
        setTimeout(function () {
            first_index = animation_indices[0]
            second_index = animation_indices[1]
            if (animation_indices[2]) {
                // console.log(first_index, second_index)
                var temp = array2[first_index]
                array2[first_index] = array2[second_index]
                array2[second_index] = temp
            }
            fulfill(array2, first_index, second_index, i)
        }, i * 40)
    })
}

function fulfill(array, first_index, second_index, i) {
    document.getElementById(first_index.toString(10)).style.fill = 'yellow'
    document.getElementById(second_index.toString(10)).style.fill = 'yellow'

    setTimeout(function () {
        for (var i = 0; i < array.length; i++) {
            var rectangle = document.getElementById(i.toString(10))
            rectangle.style.width = 100
            rectangle.style.height = array[i] + "vh"
        }
        document.getElementById(first_index.toString(10)).style.fill = 'rgb(0,0,255)'
        document.getElementById(second_index.toString(10)).style.fill = 'rgb(0,0,255)'
    }, 25)
}

function quick_sort(array, start, end, animation) {
    var pivloc
    if (start >= end) {
        return
    }

    pivloc = partition(array, start, end, animation)
    console.log(pivloc, array[pivloc])
    quick_sort(array, start, pivloc-1, animation)
    quick_sort(array, pivloc+1, end, animation)
}

function partition(array, start, end, animation) {
    var i, j, pivot
    i = start+1
    j = end
    pivot = array[start]

    while (i <= j) {
        while( (array[i] < pivot) && (i < end) ) {
            animation.push([i, j, false])
            i++
        }
        while( array[j] > pivot) {
            animation.push([i, j, false])
            j--
        }
        if (i < j) {
            animation.push([i, j, false])
            animation.push([i, j, true])
            var temp = array[i]
            array[i] = array[j]
            array[j] = temp
            i++
            j--
        } else {
            animation.push([i, j, false])
            i++
        }
    }

    animation.push([start, j, false])
    animation.push([start, j, true])
    array[start] = array[j]
    array[j] = pivot

    return j
}
