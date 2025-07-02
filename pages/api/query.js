const { spawn, execSync } = require('child_process');

export default async function handler(req, res) {
  // connect();
  const commandRet = await runCommands();
  const textRet = commandRet.join("\n");
  const result = textRet.split('\n').filter(e => e);
  return res.json(result);
}

function connect() {
  const child = spawn('bash', ['-c', `top`]);

// 我们可以监听子进程的事件
  child.on('error', (err) => {
    console.error('Failed to start child process:', err);
  });
  child.on('exit', (code, signal) => {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
  });
}

async function runCommands() {
  let ret = [];
  try {
    console.log('执行 ps -ef:');
    ret.push(execSync('ps -ef').toString());

    console.log('\n执行 ls -l:');
    ret.push(execSync('ls -l').toString());

    console.log('\n执行 pwd:');
    ret.push(execSync('pwd').toString());
  } catch (error) {
    console.error('执行失败:', error);
    ret.push(error.message);
  }
  return ret;
}

// runCommands();

