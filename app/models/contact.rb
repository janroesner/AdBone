class Contact < ActiveRecord::Base

  attr_accessible :firstname, :lastname, :address, :zipcode, :city, :country, :phone, :twitter
  validates_presence_of :firstname, :lastname

  def to_json(options = {})
    super(options.merge(:except => [ :created_at, :updated_at ]))
  end

end
