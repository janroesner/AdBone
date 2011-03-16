require 'spec_helper'

describe "contacts/edit.html.haml" do
  before(:each) do
    @contact = assign(:contact, stub_model(Contact,
      :firstname => "MyString",
      :lastname => "MyString",
      :address => "MyString",
      :zipcode => "MyString",
      :city => "MyString",
      :country => "MyString",
      :phone => "MyString",
      :twitter => "MyString"
    ))
  end

  it "renders the edit contact form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => contacts_path(@contact), :method => "post" do
      assert_select "input#contact_firstname", :name => "contact[firstname]"
      assert_select "input#contact_lastname", :name => "contact[lastname]"
      assert_select "input#contact_address", :name => "contact[address]"
      assert_select "input#contact_zipcode", :name => "contact[zipcode]"
      assert_select "input#contact_city", :name => "contact[city]"
      assert_select "input#contact_country", :name => "contact[country]"
      assert_select "input#contact_phone", :name => "contact[phone]"
      assert_select "input#contact_twitter", :name => "contact[twitter]"
    end
  end
end
