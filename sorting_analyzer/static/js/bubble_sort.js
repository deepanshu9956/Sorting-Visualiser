function rectangle(array1, array2) {
    var mydiv = document.getElementById("histo")
    var svgns = "http://www.w3.org/2000/svg";
    animation = []

    bubble_sort(array1, array1.length, animation)

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
        }, i * 30)
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

function bubble_sort(array, size, animation) {
    var i, j;
    for (i = 0; i < size - 1; i++) {
        // Last i elements are already in place  
        for (j = 0; j < size - i - 1; j++) {
            animation.push([j, j+1, false])
            if (array[j] > array[j + 1]) {
                animation.push([j, j+1, true])
                var temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
}
