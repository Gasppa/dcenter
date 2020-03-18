require 'net/http'
require 'json'
require 'uri'
require 'time'

def sendPayloadDCenter()
    payloadJson = '{
        "externalCode": "9987071",
        "storeId": 282,
        "subTotal": 49.90,
        "deliveryFee": 5.14,
        "total": 55.04,
        "country": "BR",
        "state": "SP",
        "city": "Cidade de Testes",
        "district": "Bairro Fake",
        "street": "Rua de Testes Fake",
        "complement": "galpao",
        "latitude": -23.629037,
        "longitude":  -46.712689,
        "dtOrderCreate": "2019-06-27T19:59:08.251Z",
        "postalCode": "85045020",
        "number": "0",
        "total_shipping": 5.14,
        "customer": {
            "externalCode": "136226073",
            "name": "JOHN DOE",
            "email": "john@doe.com",
            "contact": "41999999999"
        },
        "items": [
            {
                "externalCode": "IT4801901403",
                "name": "Produto de Testes",
                "price": 49.9,
                "quantity": 1,
                "total": 49.9,
                "subItems": []
            }
        ],
        "payments": [
            {
                "type": "CREDIT_CARD",
                "value": 55.04
            }
        ]
    }'

    url = 'http://delivery-center-recruitment-ap.herokuapp.com/'
    uri = URI.parse(url)
    http = Net::HTTP.new(uri.host, uri.port)

    time = Time.new
    dataEnvio = time.strftime("%kh%M-%d/%m/%Y")
  
    request = Net::HTTP::Post.new(
        uri.request_uri, 
        'Content-Type' => 'application/json'
      )
    request.body = payloadJson

    http.request(request)
end