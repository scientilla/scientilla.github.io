#!/usr/bin/env bash

docker build -t "promotion_website:latest" .

docker run --rm -p 8080:8080 --name promotion_website promotion_website