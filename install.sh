#!/usr/bin/env bash

docker build -t "scientilla-promotion:latest" .

docker run --rm -t -i -p 8090:8090 --name scientilla-promotion scientilla-promotion