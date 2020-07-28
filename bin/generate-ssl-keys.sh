mkdir config/core/ssl/ -p
cd config/core/ssl/

# Generate db-params
openssl dhparam -out dhparam.pem 2048

# Generate Keys
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem

# Clear files
rm csr.pem
