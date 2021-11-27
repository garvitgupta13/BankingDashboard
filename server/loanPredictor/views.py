from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt 
def scoreJson(request):
    print(request.body)
    data = json.loads(request.body)
    print("data is ",data)
    return JsonResponse({'score':1})

@csrf_exempt 
def scoreFile(request):
    return JsonResponse({'score':1})