function rectangle(array1, array2) {
    var mydiv = document.getElementById("histo")
    var svgns = "http://www.w3.org/2000/svg";
    animation = []

    selection_sort(array1, array1.length, animation)

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

function selection_sort(array, size, animation) {
    var i, j, min_idx;

    // One by one move boundary of unsorted subarray  
    for (i = 0; i < size; i++) {
        // Find the minimum element in unsorted array  
        min_idx = i;
        for (j = i + 1; j < size; j++) {
            animation.push([min_idx, j, false])
            if (array[j] < array[min_idx]) {
                min_idx = j;
            }
        }

        animation.push([min_idx, i, false])
        animation.push([min_idx, i, true])
        var temp = array[min_idx]
        array[min_idx] = array[i]
        array[i] = temp
    }
}
