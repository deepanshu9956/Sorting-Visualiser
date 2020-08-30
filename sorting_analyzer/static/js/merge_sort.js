function rectangle(array1, array2) {
    var mydiv = document.getElementById("histo")
    var svgns = "http://www.w3.org/2000/svg";
    animation = []

    merge_sort(array1, 0, array1.length - 1, animation)

    // console.log('animation ', animation)
    animation.forEach(function (animation_indices, i) {
        setTimeout(function () {
            first_index = animation_indices[0]
            second_index = animation_indices[1]
            if (array2[first_index] > array2[second_index]) {
                // console.log(first_index, second_index)
                element = array2[second_index]
                array2.splice(second_index, 1)
                array2.splice(first_index, 0, element)
            }
            fulfill(array2, first_index, second_index, i)
        }, i*40)
    })
}

function fulfill(array, first_index, second_index, i) {
    document.getElementById(first_index.toString(10)).style.fill = 'yellow'
    document.getElementById(second_index.toString(10)).style.fill = 'yellow'

    setTimeout( function() {
        for (var i = 0; i < array.length; i++) {
            var rectangle = document.getElementById(i.toString(10))
            rectangle.style.width = 100
            rectangle.style.height = array[i] + "vh"
        }
        document.getElementById(first_index.toString(10)).style.fill = 'rgb(0,0,255)'
        document.getElementById(second_index.toString(10)).style.fill = 'rgb(0,0,255)'
    }, 25)
}

function merge_sort(array, start, end, animation) {
    var mid = Math.floor((start + end) / 2)
    if (start >= end) {
        return 0
    }

    merge_sort(array, start, mid, animation)
    merge_sort(array, mid + 1, end, animation)

    return merge(array, start, mid, end, animation)
}

function merge(array, start, mid, end, animation) {
    var i = start
    var j = mid + 1

    var shift_x = i
    var shift_y = j
    temp = []
    // console.log(array)
    while (i <= mid && j <= end) {
        // console.log(i, mid, j, end, array[i], array[j])
        if (array[i] <= array[j]) {
            temp.push(array[i++])
            animation.push([shift_x++, shift_y])
        } else {
            temp.push(array[j++])
            animation.push([shift_x++, shift_y++])
        }
    }

    while(i<=mid) {
        temp.push(array[i++])
    }
    while(j<=end) {
        temp.push(array[j++])
    }

    for (let ii=start; ii<=end; ii++) {
        array[ii] = temp[ii-start]
    }
}
