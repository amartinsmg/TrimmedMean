import { trimmedMean } from "./js/trimmed_mean.js";

// Initializes the application by setting up DOM elements and event listeners.

function main() {
  const form = document.querySelector("#input-form"),
    datasetInput = document.querySelector(
      "#dataset-input",
    ),
    percentageInput = document.querySelector(
      "#percentage-input",
    ),
    outputEl = document.querySelector("#out"),
    copyOutBtn = document.querySelector("#copy-out");

  /**
    This function handles the form submit event.
    @param e - The event object.
  */
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
      const strDataset = datasetInput.value.split(/\s*(,|;)\s*/),
        numericDataset = strDataset
          .map((s) => parseFloat(s))
          .filter((n) => !isNaN(n)),
        percentage = parseFloat(percentageInput.value),
        mean = trimmedMean(numericDataset, percentage);
      outputEl.textContent = mean.toString();
      copyOutBtn.disabled = false;
    } catch (err) {
      outputEl.textContent = err instanceof Error ? err.message : String(err);
      copyOutBtn.disabled = true;
    }
  });

  // Copies the output to the clipboard and temporarily updates the button text.

  copyOutBtn.addEventListener("click", () => {
    const outContent = outputEl.textContent,
      tmpBtnText = copyOutBtn.textContent;
    navigator.clipboard.writeText(outContent);
    copyOutBtn.textContent = "Copied!";
    setTimeout(() => (copyOutBtn.textContent = tmpBtnText), 1200);
  });
}

// Execute the main function on page load.

window.addEventListener("load", main);
