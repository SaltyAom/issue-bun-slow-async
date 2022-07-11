// ? Will not defers
// const handle = async () => new Response("Hi")

// export default {
//   port: 8081,
//   fetch: handle
// }

// ? Will Defers
const handle = async () => new Response("Hi")

export default {
  port: 8081,
  fetch: async () => await handle
}
