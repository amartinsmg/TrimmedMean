import "./main.css";
import { trimmedMean } from "./trimmed_mean";

// The main function that handles the form submit event to calculate the trimmed mean of the set of numerical data based on user input.

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

// Execute the main function on page load.

window.addEventListener("load", main);
