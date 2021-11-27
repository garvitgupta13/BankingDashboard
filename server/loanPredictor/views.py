from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json,os,pickle
import numpy as np

path = os.getcwd()+'/weight/'
model = pickle.load(open(path+'finalized_model.sav','rb'))

@csrf_exempt 
def scoreJson(request):

    data = json.loads(request.body)
    
    gender = 1
    married = 1
    dependants = 1
    education = 1
    selfEmployed = 1
    totalIncome = int(data['Income'])
    loanAmmount = int(data['Amount'])//1000
    loanAmmountTerm = int(data['Months'])
    creditHistory = 1
    propertyArea = 0

    k = np.array([gender,married,dependants,education,selfEmployed,
       totalIncome,loanAmmount,loanAmmountTerm,creditHistory,propertyArea])
    
    k = k.reshape(1,-1)
    output = model.predict(k)[0]
    print("output is ",output)
    return JsonResponse({'output':int(output)})
