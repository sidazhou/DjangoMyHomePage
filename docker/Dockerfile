FROM python:3

MAINTAINER Sida Zhou <sidazhou@gmail.com>
SHELL ["/bin/bash", "-c"]


ENV WORKDIR=/usr/src/app
WORKDIR $WORKDIR

# https://stackoverflow.com/a/25307587/2202107
ADD requirements.txt ./
RUN pip install -r requirements.txt

# https://stackoverflow.com/questions/65301487/django-with-docker-stuck-on-watching-for-file-changes-with-statreloader
ENV PYTHONUNBUFFERED=1

EXPOSE 8000
EXPOSE 8080

RUN python --version

ADD . $WORKDIR

# CMD ["python", "manage.py", "runserver", "0.0.0.0:8080"]
CMD ["gunicorn", "myhomepage.wsgi", "-b", "0.0.0.0:8000"]
