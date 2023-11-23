const { spawn } = require("child_process");

// $DEPLOY_DIR=../dmarov.github.io

// npm run prettier \
// && npm run lint \
// && npm run lint:styles \
// && npm run test \
// && npm run build:prod \
// && cd $DEPLOY_DIR
// && rm -rdf ./** \
// && cp -r ../protfolio-src/dist/portfolio/** ./ \
// && git add -A \
// && git commit -m"deploy $(date '+%Y-%m-%d %H:%M:%S')" \
// && git push \
// && cd ../protfolio-src
class Deployer {
  async deploy() {
    const prettier = "npm run prettier";
    const lintScripts = "npm run lint";
    const lintStyles = "npm run lint:styles";
    const test = "npm run test";
    const build = "npm run build:prod";
    const cd = "cd ../../dmarov.github.io";
    const pull = "git pull";
    const rm = "rm -rdf ./**"
    const copyDist = "cp -r ../protfolio-src/dist/portfolio/** ./";
    const add = "git add -A";
    const commit = "git commit -m \"deploy $(date '+%Y-%m-%d %H:%M:%S')\"";
    const push = "git push";
    const cdBack = "cd ../protfolio-src";

    const cmd = `${prettier} && ${lintScripts} && ${lintStyles} && ${test} && ${build} && ${cd} && ${pull} && ${rm} && ${copyDist} && ${add} && ${commit} && ${push} && ${cdBack}`;

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
