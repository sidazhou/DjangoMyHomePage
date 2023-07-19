#!/bin/bash
echo "building image..."

docker build --rm -f docker/Dockerfile -t sidazhou/djangomyhomepage:latest .

# for debug by "You just have to comment out where the RUN command is failing, get it to build successfully – then you can inspect it"
# docker run -it --rm sidazhou/djangomyhomepage:latest bash
