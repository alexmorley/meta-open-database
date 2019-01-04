start:
	mkdir -p mongo
	mongod --dbpath ./mongo --port $(PORT)

rebuild: import export

import:
	mongoimport database.json --port $(PORT) --collection mod --jsonArray --drop

export:
	mongoexport --collection mod --port $(PORT) --pretty --out mongo-backup.json --jsonArray
