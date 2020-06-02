import "module-alias/register";

import User from "@app/user";

function main() {
  const user = new User("Glayson");
  console.log(user.greeter());
}

main();
