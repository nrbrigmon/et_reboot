# python
import subprocess
import io

print("\n...starting...\n")

def _r(x):
    subprocess.run(x, shell=True, check=True)
cmd = '''
echo "Configuring database: buildingsdb2"

set PGPASSWORD=postgres; 

createdb -U postgres buildingsdb2

echo "buildingsdb2 configured"
'''
#psql -U node_user buildingsdb < ./bin/sql/buildings.sql

s = io.StringIO(cmd)
for line in s:
    _r(line)

print("\n...finished...\n")
