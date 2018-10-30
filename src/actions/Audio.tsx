
export function playBuffer(buffer: any, ctx: AudioContext) {
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(ctx.destination);
  source.start(0);
}
