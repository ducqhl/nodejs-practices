# LOCAL MODULES

### What?

Local Modules forcus to help:

- Better modules management
- Giving better require() paths
- Better reusable

### How?

1. Define local modules

- Creates sub-folder with it own `package.json` with the module name is the package name.
- In root application folder
  - run command `npm i ./path/to/module/`
- Now we could simply using `require('module-name')` to get the module.
- Enjoy :yei:

### Ref:
- https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/wraputilities.md
- https://github.com/ArnaudRinquin/local_modules_poc