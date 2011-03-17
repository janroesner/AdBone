class Contact < ActiveRecord::Base
  validates_presence_of :firstname, :lastname

  def to_json(options = {})
    super(options.merge(:except => [ :created_at, :updated_at ]))
  end

end
