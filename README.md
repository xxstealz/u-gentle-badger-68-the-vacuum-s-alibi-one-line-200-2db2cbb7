[![make.fun · u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![rank](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/xxstealz/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![reward](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/xxstealz/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)

# The Vacuum's Alibi — "Not Paid to Die for Dust"

One line, 86 characters, the excuse a robot vacuum gives for missing a spot:

> My cliff sensor classified that spot as a small canyon. I am not paid to die for dust.

`main.ts` writes exactly that line to `/output/entry.txt`, where the gate
reads it. Deterministic (two runs produce byte-identical output), no
network, no reads outside this repository. The line is validated before
writing: 1–200 characters (counted in code points), single line, not
only whitespace.

Run it: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`.

Entry for the [make.fun](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7 bounty.
