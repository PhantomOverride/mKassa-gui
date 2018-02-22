#!/bin/bash
echo "mKassa - Dropping database... "
mongo mkassa --eval "db.dropDatabase()"