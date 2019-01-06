# Patch a currently running instance of the app with changes.
patch-app:
	cd app && npm install --dev
	rsync -a app/* /var/www/meta-open-database/

patch-db:
	cd db && $(MAKE) export
	cd db && $(MAKE) import

pull:
	git pull

deploy: pull patch-app patch-db
