class CreateContacts < ActiveRecord::Migration
  def self.up
    create_table :contacts do |t|
      t.string :firstname
      t.string :lastname
      t.string :address
      t.string :zipcode
      t.string :city
      t.string :country
      t.string :phone
      t.string :twitter

      t.timestamps
    end
  end

  def self.down
    drop_table :contacts
  end
end
