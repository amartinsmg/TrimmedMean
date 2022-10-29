require("./main.css");

interface WasmExport {
  memory: WebAssembly.Memory;
  trimmedMean: (pointer: number, length: number, percentage: number) => number;
}

async function main() {
  const WasmModule = await WebAssembly.instantiateStreaming(
      await fetch("./assets/program.wasm"),
      {
        wasi_snapshot_preview1: {
          proc_exit: (code: number) => {
            if (code) throw `Exit code ${code}`;
          },
        },
      }
    ),
    { memory, trimmedMean }: WasmExport = WasmModule.instance.exports as any,
    Form = document.querySelector("#input-form") as HTMLFormElement,
    NumbersInput = document.querySelector(
      "#numbers-input"
    ) as HTMLTextAreaElement,
    PercentageInput = document.querySelector(
      "#percentage-input"
    ) as HTMLInputElement,
    OutputEl = document.querySelector("#out") as HTMLElement;

  Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const StrNumbers = NumbersInput.value.split(/\s*,\s*/),
      Numbers = StrNumbers.map((s) => parseFloat(s)).filter((n) => !isNaN(n)),
      PERCENTAGE = parseFloat(PercentageInput.value),
      NumbersArr = new Float64Array(memory.buffer, 0, Numbers.length);
    NumbersArr.set(Numbers);
    try {
      const MEAN = trimmedMean(
        NumbersArr.byteOffset,
        NumbersArr.length,
        PERCENTAGE
      );
      OutputEl.textContent =
        (MEAN * 1e6) % 0 ? MEAN.toFixed() : MEAN.toFixed(6);
    } catch (err) {
      OutputEl.textContent = err instanceof Error ? err.message : String(err);
    }
  });
}

window.addEventListener("load", main);
