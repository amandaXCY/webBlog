#!/bin/bash

lastTime=`date "+%Y%m%d%H%M"`
echo $lastTime

git tag -a "$lastTime" -m "prod $lastTime"

