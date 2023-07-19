#!/bin/bash

docker rm -f djangomyhomepage &> /dev/null
echo "starting container..."

docker run -itd \
                -p 8080:8080 \
                -v $(pwd):/usr/src/app \
                --name djangomyhomepage \
                sidazhou/djangomyhomepage:latest python manage.py runserver 0.0.0.0:8080
docker logs -f djangomyhomepage


# # docker run -p 8000:8000 --user "$(id -u):$(id -g)" -v "$PWD":/usr/src/app --name myhomepage django-admin startproject myhomepage
# docker run -p 8000:8000 --user "$(id -u):$(id -g)" -v "$PWD":/usr/src/app --name myhomepage django
# docker run -p 8000:8000 --name django django


###########################
# get into container
# docker exec -it djangomyhomepage bash

# 8000 gunicorn server
# 8080 django dev server
# chown $(id -u):$(id -g) ~ if necessary
