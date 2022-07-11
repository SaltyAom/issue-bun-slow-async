echo "Sync:"
wrk -t 4 -c 250 -d 20s http://localhost:8080

echo "\nAsync:"
wrk -t 4 -c 250 -d 20s http://localhost:8081
