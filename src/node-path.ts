import { sep, join } from "path"
import { existsSync } from "fs"

// curent working directory
const pwd = __dirname.split(sep);

// handle error log
function logError(modName?: string, folder?: string[]) {
    console.error(`Error node_modules folder ${modName ? `with ${modName}` : ""} in ${folder?.join(sep)}`);
}

// find the location of the node_directory folder for packaged modules
export function getNodeModulesPath(modName?: string, location?: string[]) {
    const folder = location || pwd;

    if (folder.length < 1) {
      return logError(modName, folder);
    }

    const nodeModulesPath = folder.concat(["node_modules"]).join(sep);
    
    if (existsSync(modName ? join(nodeModulesPath, modName) : nodeModulesPath)) {
      return nodeModulesPath;
    }

    // recursive try to find node_modules path
    const nodePath = getNodeModulesPath(modName, folder.slice(0, -1));

    if (!nodePath) {
        return logError(modName, folder);
    };

    return nodePath;
  }