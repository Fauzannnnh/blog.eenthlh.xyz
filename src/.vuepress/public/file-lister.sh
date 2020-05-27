#!/bin/bash

ROOT=.
HTTP="/"
OUTPUT="filelist.html"

i=0
echo "<ul>" > $OUTPUT
for filepath in `find "$ROOT" -maxdepth 1 -mindepth 0 -type d| sort`; do
    path=`basename "$filepath"`
    echo "  <li>$path</li>" >> $OUTPUT
    echo "  <ul>" >> $OUTPUT
    for i in `find "$filepath" -maxdepth 1 -mindepth 0 -type f| sort`; do
        file=`basename "$i"`
        echo "      <li><a href=\"/$path/$file\">$file</a></li>" >> $OUTPUT
    done
    echo "  </ul>" >> $OUTPUT
done
echo "</ul>"    >> $OUTPUT

