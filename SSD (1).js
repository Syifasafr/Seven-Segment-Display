document.addEventListener("DOMContentLoaded", function () {
  // Array input dan output yang sesuai
  const inputLines = [
    "0000",
    "0001",
    "0010",
    "0011",
    "0100",
    "0101",
    "0110",
    "0111",
    "1000",
    "1001",
  ];
  const outputLines = [
    "1110111",
    "0010010",
    "1011101",
    "1011011",
    "0111010",
    "1101011",
    "1101111",
    "1010010",
    "1111111",
    "1111011",
  ];


  const segmentDisplay = getSegmentDisplay();

  const truthTable = document.getElementById("truth-table");


  document.getElementById("Tombol").onclick("change", (evt) => {

    const selectedInput = inputLines[+evt.target.value];

    const mappedOutput = outputLines[inputLines.indexOf(selectedInput)];

    updateSegmentDisplay(mappedOutput);

    displayTruthTable(selectedInput, mappedOutput);
  });


  function updateSegmentDisplay(outputWires) {
    [...segmentDisplay].forEach((seg, index) => {
      seg.classList[outputWires[index] === "1" ? "add" : "remove"]("segLit");
    });
  }


  function getSegmentDisplay() {
    return document.querySelectorAll(".seven-segment .segment");
  }


  function displayTruthTable(input, output) {

    if (truthTable.rows.length > 1) {
      truthTable.deleteRow(1);
    }


    const row = truthTable.insertRow(-1);
    const inputCell = row.insertCell(0);
    inputCell.textContent = input;


    for (let i = 0; i < output.length; i++) {
      const outputCell = row.insertCell(i + 1);
      outputCell.textContent = output[i];
    }
  }
});
