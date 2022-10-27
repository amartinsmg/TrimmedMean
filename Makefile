all: compile

# Create directories build and assets if there are no they

dir: 
	([ -d build ] || mkdir build ) && ([ -d build/assets ] || mkdir build/assets )

# Create diretory debug if there is no

dir-debug: 
	[ -d debug ] || mkdir debug
	
# Get the diretory math if there is no

lib: 
	bash get_lib.sh

# Compile C source code to bynary code in WebAssembly format

compile: lib dir
	emcc -I"src/include" -I"lib" -sWASM=1 -sERROR_ON_UNDEFINED_SYMBOLS=0 \
	-sEXPORTED_FUNCTIONS=_trimmedMean	-Wl,--no-entry -o build/assets/program.wasm src/program.c

# Generate WebAssembly text format for debugging

wat: compile dir-debug
	npx wasm2wat -o debug/program.wat build/assets/program.wasm

# Generate debug files

debug: wat
	echo program.wat generated successfully
