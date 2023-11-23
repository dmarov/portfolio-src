const { spawn } = require("child_process");

class Deployer {
  async deploy() {
    const cmds = [
      "npm run prettier",
      "npm run lint",
      "npm run lint:styles",
      "npm run test",
      "npm run build:prod",
      "cd ../../dmarov.github.io",
      "git pull",
      "rm -rdf ./**",
      "cp -r ../portfolio-src/dist/portfolio/** ./",
      "git add -A",
      "git commit -m \"deploy $(date '+%Y-%m-%d %H:%M:%S')\"",
      "git push",
    ];

    this.execute(cmds.join(" && "), __dirname);
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
