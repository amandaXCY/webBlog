#!/bin/bash

lastTime= date +%Y-%m-%d-%H-%M

git tag -a '$lastTime' -m 'prod $lastTime'