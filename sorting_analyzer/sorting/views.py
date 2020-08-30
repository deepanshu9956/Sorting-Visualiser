from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from random import seed
from random import randint
from datetime import datetime
import json
# Create your views here.


def home(request):
    array = random_array()
    return render(request, 'base.html', {'array': array, 'size': len(array)})


# def hello_world_ajax(request):
#         # seed random number generator
#     array = random_array()

#     print(array)
#     return JsonResponse({'array1': array, 'size': len(array)})


def merge_sort(request):
    array1 = []
    if "array" in request.POST:
        arr_string = request.POST["array"]
        arr_string = arr_string.replace("\'", "\"")

        array1 = json.loads(arr_string)
    else:
        array1 = random_array()

    array2 = []
    for element in array1:
        array2.append(element)    
    return render(request, 'merge_sort.html', {'array': array1, 'array1': array2, 'size': len(array1)})


def quick_sort(request):
    array1 = []
    if "array" in request.POST:
        arr_string = request.POST["array"]
        arr_string = arr_string.replace("\'", "\"")

        array1 = json.loads(arr_string)
    else:
        array1 = random_array()

    array2 = []
    for element in array1:
        array2.append(element)
    return render(request, 'quick_sort.html', {'array': array1, 'array1': array2, 'size': len(array1)})


def selection_sort(request):
    array1 = []
    if "array" in request.POST:
        arr_string = request.POST["array"]
        arr_string = arr_string.replace("\'", "\"")

        array1 = json.loads(arr_string)
    else:
        array1 = random_array()

    array2 = []
    for element in array1:
        array2.append(element)
    return render(request, 'selection_sort.html', {'array': array1, 'array1': array2, 'size': len(array1)})


def bubble_sort(request):
    array1 = []
    if "array" in request.POST:
        arr_string = request.POST["array"]
        arr_string = arr_string.replace("\'", "\"")

        array1 = json.loads(arr_string)
    else:
        array1 = random_array()

    array2 = []
    for element in array1:
        array2.append(element)
    return render(request, 'bubble_sort.html', {'array': array1, 'array1': array2, 'size': len(array1)})


def random_array():
    seed(datetime. now())
    array = []

    # generate some integers
    total_required = 51

    for i in range(total_required):
        value = randint(0, total_required)
        value = value*80 / total_required
        array.append(value)

    return array
