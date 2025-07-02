import { runCommands } from '../util';

export default async function handler(req, res) {
  // connect();
  const commandRet = await runCommands();
  const textRet = commandRet.join("\n");
  const result = textRet.split('\n').filter(e => e);
  return res.json(result);
}
