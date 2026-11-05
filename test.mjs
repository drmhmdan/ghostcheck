import { strict as assert } from 'node:assert';
import { inspect } from './logic.mjs';
assert.ok(inspect('', 'source').error);
assert.deepEqual(inspect('120 subjects, 80 improved', '120 subjects; improvement was not measured').missing, ['80']);
assert.deepEqual(inspect('There were 120 subjects', '120 subjects enrolled').missing, []);
assert.equal(inspect('No numbers here', 'A source').hasNumbers, false);
console.log('4 checks passed');
