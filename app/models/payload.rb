class Payload
  include Mongoid::Document
  field :externalCode, type: String
  field :storeId, type: Integer
  field :subTotal, type: Float
  field :deliveryFee, type: Float
  field :total, type: Float
  field :country, type: String
  field :state, type: String
  field :city, type: String
  field :district, type: String
  field :street, type: String
  field :customerName, type: String
  field :customerCode, type: String
  field :paymentType, type: String
end

# "externalCode": "9987071",
#   "storeId": 282,
#   "subTotal": "49.90",
#   "deliveryFee": "5.14",
#   "total": "55.04",
#   "country": "BR",
#   "state": "SP",
#   "city": "Cidade de Testes",
#   "district": "Bairro Fake",
#   "street": "Rua de Testes Fake",
#   "customerName": "JOHN DOE",
#   "customerCode": "136226073",
#   "paymentType": "CREDIT_CARD"