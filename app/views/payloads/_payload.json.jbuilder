json.extract! payload, 
:id, :externalCode, :storeId, :subTotal, 
:deliveryFee, :total, :country, :state, :city,
:district, :street, :customerName, :customerCode, :paymentType
json.url payload_url(payload, format: :json)

# :externalCode, type: String
#   field :storeId, type: Integer
#   field :subTotal, type: Float
#   field :deliveryFee, type: Float
#   field :total, type: Float
#   field :country, type: String
#   field :state, type: String
#   field :city, type: String
#   field :district, type: String
#   field :street, type: String
#   field :customerName, type: String
#   field :customerCode, type: String
#   field :paymentType, type: String