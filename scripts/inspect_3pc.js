const { products } = require("../src/data/products.ts");

const threePiece = products.filter(p => p.productType === "THREE_PIECE");
console.log(`Found ${threePiece.length} Three-Piece products:\n`);

threePiece.forEach((p, idx) => {
  console.log(`${idx + 1}. [${p.productCode}] ${p.name}`);
});
