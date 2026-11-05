// Surface literal clues, never infer factual support from word overlap.
export function inspect(claim, source) {
  if (!claim.trim() || !source.trim()) return { error: 'Add both a claim and a source excerpt first.' };
  const numbers = text => [...new Set(text.match(/\b\d+(?:[.,]\d+)?%?\b/g) || [])];
  const sourceNumbers = numbers(source);
  const missing = numbers(claim).filter(n => !sourceNumbers.includes(n));
  const tokens = text => new Set((text.toLowerCase().match(/[a-z]{5,}/g) || []));
  const a = tokens(claim), b = tokens(source);
  const shared = [...a].filter(w => b.has(w)).slice(0, 8);
  return { missing, shared, hasNumbers: numbers(claim).length > 0 };
}
