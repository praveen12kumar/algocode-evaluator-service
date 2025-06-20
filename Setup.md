## Steps to set TypeScript Express project

1.
```
npm init
```

2.
```
npm install -D typescript
```

3.
```
tsc --init
```

4.
```
Add the following scripts in package.json
{
    "scripts": {
    "build": "tsc",
    "watch": "tsc -w",
    "prestart": "npm run build",
    "start": "nodemon dist/index.js",
    "dev": "npx concurrently --kill-others \"npm run watch\" \"npm run start\""
  },
}

```

Note: Make revelent config changes in tsconfig.json

5.
```
npm run dev
```

