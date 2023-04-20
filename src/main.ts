import "./main.css";
import { trimmedMean } from "./trimmed_mean";

function main() {
  const Form = document.querySelector("#input-form") as HTMLFormElement,
    NumbersInput = document.querySelector(
      "#numbers-input"
    ) as HTMLTextAreaElement,
    PercentageInput = document.querySelector(
      "#percentage-input"
    ) as HTMLInputElement,
    OutputEl = document.querySelector("#out") as HTMLElement;

  /**
    This function handles the form submit event.
    @param e - The event object.
    @returns - This function does not return anything.
  */

  Form.addEventListener("submit", (e) => {
    e.preventDefault();
    const StrNumbers = NumbersInput.value.split(/\s*,\s*/),
      Numbers = StrNumbers.map((s) => parseFloat(s)).filter((n) => !isNaN(n)),
      PERCENTAGE = parseFloat(PercentageInput.value);
    try {
      const MEAN = trimmedMean(Numbers, PERCENTAGE);
      OutputEl.textContent =
        (MEAN * 1e6) % 0 ? MEAN.toFixed() : MEAN.toFixed(6);
    } catch (err) {
      OutputEl.textContent = err instanceof Error ? err.message : String(err);
    }
  });
}

window.addEventListener("load", main);
