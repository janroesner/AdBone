require 'spec_helper'

describe "contacts/index.html.haml" do
  before(:each) do
    assign(:contacts, [
      stub_model(Contact,
        :firstname => "Firstname",
        :lastname => "Lastname",
        :address => "Address",
        :zipcode => "Zipcode",
        :city => "City",
        :country => "Country",
        :phone => "Phone",
        :twitter => "Twitter"
      ),
      stub_model(Contact,
        :firstname => "Firstname",
        :lastname => "Lastname",
        :address => "Address",
        :zipcode => "Zipcode",
        :city => "City",
        :country => "Country",
        :phone => "Phone",
        :twitter => "Twitter"
      )
    ])
  end

  it "renders a list of contacts" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Firstname".to_s, :count => 2
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Lastname".to_s, :count => 2
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Address".to_s, :count => 2
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Zipcode".to_s, :count => 2
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "City".to_s, :count => 2
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Country".to_s, :count => 2
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Phone".to_s, :count => 2
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Twitter".to_s, :count => 2
  end
end
