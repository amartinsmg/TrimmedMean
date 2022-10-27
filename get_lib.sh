#!/bin/bash

[ -d lib ] || mkdir lib
cd lib
([ -d include ] && [ -f statistics.h ] && [ -f percentage.h ]) || git clone https://github.com/amartinsmg/MathAlgorithms.git math
cp  math/src/include ./ -r
cp math/src/statistics.h math/src/basic_operations.h math/src/percentage.h ./
rm -rf math
