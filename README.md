# TrimmedMeanCalculator

The **Trimmed Mean Calculator** is a streamlined web application designed to provide a more accurate measure of central tendency by filtering out extreme values. By removing a user-defined percentage of outliers from both the top and bottom of a dataset, it ensures your statistical analysis remains robust and representative.

---

## 👨‍💻 Tech Stack

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3)
![HTML5](https://img.shields.io/badge/HTML5-E34F26)
![CSS3](https://img.shields.io/badge/CSS3-1572B6)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB)

---

## 🎯 Key Features

- **Customizable Trimming**: Effortlessly define the exact percentage of data to be excluded from both ends of the distribution.
- **Client-Side Computation**: Powered by optimized JavaScript directly in the browser, providing instant results without server-side latency.
- **Comprehensive Numeric Support**: Handles both integers and floating-point numbers (decimals) for precise statistical analysis.
- **Outlier Resilience**: Automatically mitigates the impact of extreme values that typically skew a standard arithmetic mean.

---

## ⚙️ Technical Note

The calculation is performed entirely on the client side, ensuring privacy and immediate feedback. For a dataset $X$ sorted as $x_{(1)} \le x_{(2)} \le \dots \le x_{(n)}$, the app identifies and removes the $k$ smallest and $k$ largest values based on your input percentage.

---

## 💻 How to run the project

Follow the instructions below to set up the development environment on your machine:

Step 1: Clone this repo using `git clone`.

Step 2: Inside the project folder, run `yarn install` to download all necessary packages.

Step 3: Launch the local server with the following command:

```sh
yarn dev
```

The application will be available at your localhost. The server will automatically reload if you make any changes to the source files!

---

## 💡 Contributing

Contributions are what make the open-source community thrive. Feel free to:

- **Open an issue** for bugs or feature requests.
- **Submit a pull request** with your improvements.

---

## 📜 License

Distributed under the MIT License.
See the [LICENSE](./LICENSE) file for details.
