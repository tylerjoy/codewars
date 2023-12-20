function DNAStrand(dna) {
  return dna
    .split("")
    .map((e) =>
      e === "A"
        ? "T"
        : e === "T"
        ? "A"
        : e === "C"
        ? "G"
        : e === "G"
        ? "C"
        : null
    )
    .join("");
}
