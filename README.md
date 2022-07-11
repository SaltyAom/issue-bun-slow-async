Bun is slowed down while using `async` / `await` keyword.

This repo is to reproduce the problem and issue to Bun repo.

## Proof of Concept
This repo is consists of 2 file, serving the same response, the only difference is that one is using sync while another is using async, and await to simulate async usage in real-world app.

- Sync running at :8080
- Async running at :8081

Simply serve the web server:
```bash
bun sync.ts
bun async.ts
```

and run the load test command
```
./loadtest.sh
```

## Prerequisted
- Loadtest tools, script defaults to [wrk](https://github.com/wg/wrk)
