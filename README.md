Prod
====
```
git pull
./build_image.sh
./prod_container_up.sh
# make sure nginx is configured for django server on correct port
# make sure nginx is configured for static files
```

Dev
====
./dev_container_up.sh


thumbnails
====
# same ratio, height set to 125 pixel
convert weibo_faiss.png -geometry x125 thumb/weibo_faiss.png
