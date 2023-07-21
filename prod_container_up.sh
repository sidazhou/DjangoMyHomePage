#!/bin/bash

docker rm -f djangomyhomepage &> /dev/null
echo "starting container..."

echo "collectstatic and moving to a public path that user www-data can access"
docker run -it --rm \
        -v $(pwd):/usr/src/app \
        sidazhou/djangomyhomepage:latest python manage.py collectstatic

# public static folder for nginx
# tail -222 /var/log/nginx/error.log
sudo mkdir -p /www-data/staticroot/
sudo chown -R www-data:www-data /www-data/
# https://superuser.com/a/1563652
sudo find /www-data/ -type d -exec chmod 755 {} \;
sudo find /www-data/ -type f -exec chmod 644 {} \;

echo ''' nginx config should be:
server {
    listen 80;
    server_name sidazhou.com;

    # this is STATIC_URL in django
    location /static/ {
       alias /www-data/staticroot/;
    }
}
'''

docker run -itd \
                -p 8000:8000 \
                -v $(pwd):/usr/src/app \
                --name djangomyhomepage \
                sidazhou/djangomyhomepage:latest
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
