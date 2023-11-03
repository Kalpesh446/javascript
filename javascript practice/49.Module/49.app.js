import { default as us, name, withdraw } from "./modules/user.js";
import * as act from "./modules/acount.js";
import { withdraw as wd, diposit } from "./modules/acount.js";
import { code } from "./modules/user.js";

console.log(name);
us();
act.withdraw();
act.diposit();
withdraw();
diposit();
code();
