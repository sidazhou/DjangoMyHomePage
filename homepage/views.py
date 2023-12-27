from django.shortcuts import render
from django.http import HttpResponse
import yaml
import os
from pathlib import Path

# Create your views here.
# /usr/src/app
def home(request):
  # cwd is BASE_DIR
  cwd = Path(os.getcwd())

  # data loading
  with open(cwd / "homepage/static/data/web.yaml", "r") as stream:
    try:
        web_projects=yaml.safe_load(stream)
    except yaml.YAMLError as e:
        print(e)

  with open(cwd / "homepage/static/data/science.yaml", "r") as stream:
    try:
        science_projects=yaml.safe_load(stream)
    except yaml.YAMLError as e:
        print(e)

  with open(cwd / "homepage/static/data/datasci.yaml", "r") as stream:
    try:
        datasci_projects=yaml.safe_load(stream)
    except yaml.YAMLError as e:
        print(e)


  context = {
    'web_projects': web_projects,
    'science_projects': science_projects,
    'datasci_projects': datasci_projects,
  }


  # return HttpResponse('<h1>hepxxx</h1>')
  # print('hepxxx')
  return render(request, 'application.html', context)
