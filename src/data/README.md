# TryHackMe activity

`tryhackme-activity.json` is a saved snapshot of the public yearly calendar at
https://tryhackme.com/p/gabsacluti, captured on 2026-11-05.

The source displayed 1,850 events for 2026 and 365 chronological day squares.
`daysByLevel` stores one-based day-of-year indices grouped by the source legend's
intensity levels. Unlisted days have level zero. Levels are not event counts.

This is not an automatic API integration: direct requests encountered a security
checkpoint. To refresh, capture the public calendar again, verify its year and
total, and replace the day levels and `updatedAt` together. Do not update the
timestamp without refreshing the data. Keep the snapshot year until a new year's
data is available. No credentials are used or stored.
