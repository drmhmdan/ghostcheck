import { inspect } from './logic.mjs';
const claim = document.querySelector('#claim'), source = document.querySelector('#source'), output = document.querySelector('#output');
document.querySelector('#demo').addEventListener('click', () => { claim.value = 'The fictional moonlight study included 120 volunteers and found that 80% slept better.'; source.value = 'Fictional demo: The moonlight study included 120 volunteers. Sleep quality was not measured.'; output.innerHTML = '<div class="empty"><h2>Example loaded.</h2><p>Reveal the clues, then decide what the source actually says.</p></div>'; });
document.querySelector('#inspect').addEventListener('click', () => {
 const r = inspect(claim.value, source.value); output.replaceChildren();
 const add = (tag, text, cls) => { const el = document.createElement(tag); el.textContent = text; if (cls) el.className = cls; output.appendChild(el); };
 if (r.error) { add('p', r.error, 'alert'); return; }
 add('p', 'CLUES, NOT A VERDICT', 'eyebrow'); add('h2', 'The evidence is yours to judge.');
 add('h3', 'Numbers to inspect'); add('p', r.missing.length ? `Claim numbers absent as exact text in the excerpt: ${r.missing.join(', ')}. Check units and context.` : r.hasNumbers ? 'Claim numbers also appear as text in the excerpt. This does not establish support.' : 'No numbers detected in the claim.');
 add('h3', 'Shared words'); add('p', r.shared.length ? r.shared.join(' · ') : 'No shared words of five or more English letters detected.');
 add('p', 'This simple text comparison can miss contradictions, paraphrases, units, and negation. Read the full source before drawing conclusions.', 'warning');
});
