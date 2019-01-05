# Patch a currently running instance of the app with changes.
patch-app:
	rsync -a app /var/www/meta-open-database/
