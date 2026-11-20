# gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/0xnici/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/0xnici/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

This repository hands in one video: a 17.5-second vertical Short cut from the
official GTA 6 launch trailer and published on YouTube, where the bounty's
places are decided by views. The cut opens on the Ocean Drive street beat —
the red sports car, the crossing pedestrians, the police car — under the line
"GTA 6 IS FINALLY HERE", rides the dirt-bike jump beside the monorail in slow
motion, and lands on the pitch over the trailer's darkest shot: make clips
like this with AI and earn money on make.fun. The frame is a blur-fill
vertical: the 16:9 picture sits sharp in the middle of a blurred copy of
itself, so nothing of the moment is cropped away.

`VIDEO.json` at the root holds the video's YouTube address, and that address
is the entire entry. `main.ts` is the hand-in program: it copies `VIDEO.json`
from this repository into the output directory it is given, byte for byte,
and checks the copy still names a video before it exits. It does nothing
else — no network, no clock, no randomness — so the house always reads the
same address and goes to judge the video itself.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=1n20pv53&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
