void (async function () {
  const { ok: assert } = require("assert"),
    { readFileSync } = require("fs"),
    WasmBuffer = readFileSync(__dirname + "/../../build/assets/program.wasm"),
    WasmModule = await WebAssembly.instantiate(WasmBuffer, {
      wasi_snapshot_preview1: {
        proc_exit: (code) => {
          if (code) throw `Exit code ${code}`;
        },
      },
    }),
    { memory, trimmedMean } = WasmModule.instance.exports,
    roundTo = (num, decimalPlaces) => {
      let base10 = 10 ** decimalPlaces,
        result = Math.round(num * base10) / base10;
      return result;
    },
    Arr = [-10, 2, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 7, 8, 8, 8, 10, 11],
    F64Arr = new Float64Array(memory.buffer, 0, Arr.length);
  F64Arr.set(Arr);

  assert(
    roundTo(trimmedMean(F64Arr.byteOffset, F64Arr.length, 5), 6) == 4.888889
  );

  console.log("Passed all tests successfully!");
})();
