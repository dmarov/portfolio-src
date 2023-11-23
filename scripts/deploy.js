const { spawn } = require("child_process");

class Deployer {
  async deploy() {
    const cd = 'cd ../../dmarov.github.io';
    const prettier = 'npm run prettier';
    const lintScripts = 'npm run lint';
    const lintStyles = 'npm run lint:styles';
    const test = 'npm run test';
    const build = 'npm run build:prod';

    const cmd = `${cd} && ${prettier} && ${lintScripts} && ${lintStyles} && ${test} && ${build}`;

    this.execute(cmd, __dirname);
  }

  async execute(cmd, cwd, params = []) {
    console.log(`Executing: ${cmd}`);

    return new Promise((res, rej) => {
      const proc = spawn(cmd, params, {
        cwd,
        shell: true,
      });

      proc.stderr.setEncoding("utf-8");
      proc.stdout.pipe(process.stdout);
      proc.stderr.pipe(process.stderr);

      proc.on("close", (code) => {
        code === 0 ? res() : rej();
      });
    });
  }
}

const instance = new Deployer();

instance.deploy();
