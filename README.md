# The Funniest Out-of-Office

[![make.fun · u-kreutzx-the-funniest-out-of-office-054815cf](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/yovmiar19/u-kreutzx-the-funniest-out-of-office-054815cf-entry/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)
[![reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/yovmiar19/u-kreutzx-the-funniest-out-of-office-054815cf-entry/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-funniest-out-of-office-054815cf)

Entry for the [make.fun bounty "The Funniest Out-of-Office"](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf): one line of an out-of-office auto-reply, the funniest we can make it, in 140 characters or fewer.

## The line

> I'm out until Friday, and if this is urgent, I admire your optimism.

68 characters — one line, nothing else. No image, no link, no second line, per the bounty rules.

## How it works

`main.ts` writes exactly that line to `/output/entry.txt`, validates it is 1–140 characters and a single line, then reads the file back to confirm it matches byte for byte.

Run it with Node 22:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
