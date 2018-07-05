# python
import subprocess
import io

print("\n...starting...\n")

#this will run shell script based on the string inputs
def _r(x):
    subprocess.run(x, shell=True, check=True)

cmd = '''
echo "Configuring database: buildingsdb"

set PGPASSWORD=node_password

psql -U node_user buildingsdb < ./bin/sql/new_tables_0704.sql

echo "new_tables_0704 process done"
'''
#get string inputs and run line by line
s = io.StringIO(cmd)
for line in s:
    _r(line)

print("\n...script finished...\n")
