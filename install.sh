#!/usr/bin/env bash

docker build -t "scientilla-promotion:latest" .

docker run --rm -p 8090:8090 --name scientilla-promotion scientilla-promotion