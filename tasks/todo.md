## 2026-06-17 Review

- Restored Google Places loading as an optional enhancement.
- Kept home and work street fields editable before and after Places loads.
- Added fallback handling for script load errors and Google auth failures.
- Verified inline JavaScript syntax and mocked the Places failure paths.
- Blocked Google Places from loading in `file://` preview so local testing cannot inject the broken Google error UI into the street fields.

## 2026-06-17 PDF export rework

- Swapped the PDF path from live-screen capture to a hidden export clone.
- Kept the live wizard interaction intact and excluded loading text, nav, and buttons from the export.
- Verified the generated PDF has 7 letter-sized pages with consistent full-width page sizing, a readable first page, and consent pages that stay readable instead of shrinking into a screenshot fit.
## 2026-06-17

- Removed the DOCX implementation from `index.html`.
- Kept the `Save as PDF` and `Submit Form` actions in place.
- Verified the file still parses cleanly with `node --check`.
- Stopped before a fresh browser export pass at the user's request.

## 2026-06-17 EmailJS submit update

- Added the EmailJS browser SDK and initialized it with the provided public key.
- Kept the local PDF download first, then sent the office notification on final submit.
- Added success and failure banners for the submit path and a manual mailto fallback on EmailJS failure.
- Verified the inline script still passes `node --check` after the patch.
