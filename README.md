Bun is slowed down while using `await` keyword.

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

<img width="798" alt="Screen Shot 2565-07-11 at 11 16 44" src="https://user-images.githubusercontent.com/35027979/178188382-41eb1679-9c67-4dfb-90b8-ef14df33525c.png">

### However, it runs fast if we don't use `await`
Let's edit `async.ts` to return the async function **without await**.

```typescript
// ? Will not defers
const handle = async () => new Response("Hi")

export default {
  port: 8081,
  fetch: handle
}
```

<img width="798" alt="Screen Shot 2565-07-11 at 11 35 47" src="https://user-images.githubusercontent.com/35027979/178189361-ea73aaf6-2ed7-441a-ac57-e9c7a34776c1.png">

## Prerequisted
- Loadtest tools, script defaults to [wrk](https://github.com/wg/wrk)
