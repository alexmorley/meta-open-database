### Development

*screen 1*
pushd app
npm install
npm run dev

*screen 2*
pushd db
PORT=3001 make start\_dev

*screen 3*
pushd db
PORT=3001 make import
