rebuild: import export

import:
	mongoimport database.json --collection meta-open-database --jsonArray --drop

export:
	mongoexport --collection meta-open-database --pretty --out mongo-backup.json --jsonArray
