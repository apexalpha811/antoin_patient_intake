## Lessons

- When an external autocomplete API is unreliable, keep the form fields as normal editable inputs first. Load autocomplete as optional enhancement, and route load, auth, and constructor failures back to manual input.
- When the app is opened via `file://`, do not load Google Places at all. Local file preview should stay manual-only, while hosted `https://` deployments can still enhance the same fields with autocomplete.
- When PDF export needs stable layout, build a hidden export clone and render that instead of the live screen. That keeps loading text, buttons, and transient UI state out of the file and makes page width predictable.
- When Playwright cannot launch its bundled browser in this workspace, attach to a headless Chrome started with remote debugging instead of stalling on the launch error.
- When a browser-side DOCX export starts producing wrapper-like or pseudo-document output, remove the DOCX path instead of trying to salvage it. Keep the stable PDF and submit flows, then add DOCX back only if a real Word output path is proven end to end.
- When adding office notifications to a form submit, keep the PDF download first, then send the notification, and branch the banner copy by success or failure instead of inventing a second submit flow.
