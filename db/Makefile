start:
	mkdir -p /db/mongo-1
	mongod --dbpath /db/mongo-1 --port $(PORT)

rebuild: import export

import:
	mongoimport database.json --port $(PORT) --collection mod --jsonArray --mode=merge --upsertFields=name

export:
	mongoexport --collection mod --port $(PORT) --pretty --out mongo-backup.json --jsonArray
