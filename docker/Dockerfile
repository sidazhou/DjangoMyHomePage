FROM python:3

MAINTAINER Sida Zhou <sidazhou@gmail.com>
SHELL ["/bin/bash", "-c"]


ENV HOME=/usr/src/app
COPY . $HOME
WORKDIR $HOME

COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .

EXPOSE 8000

RUN python --version

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# docker build -f docker/Dockerfile -t django .
# # docker run -it --rm --user "$(id -u):$(id -g)" -v "$PWD":/usr/src/app -w /usr/src/app django-admin startproject myhomepage
# docker run -p 8000:8000 --name django django
