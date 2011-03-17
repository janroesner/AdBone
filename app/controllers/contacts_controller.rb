class ContactsController < ApplicationController

  respond_to :json

  def index
    @contacts = Contact.all
    respond_with @contacts
  end

  def show
    begin
      @contact = Contact.find params[:id]
      respond_with @contact
    rescue Exception => e
      respond_with nil, :status => :not_found
    end
  end

  def create
    @contact = Contact.new(params[:contact])
    if @contact.save
      respond_with @contact, :status => :created, :location => @contact
    else
      respond_with @contact, :status => :unprocessable_entity
    end
  end

  def update
    begin
      @contact = Contact.find(params[:id])
      if @contact.update_attributes(params[:contact])
        head :ok
      else
        respond_with @contact, :status => :unprocessable_entity
      end
    rescue Exception => e
      respond_with nil, :status => :not_found
    end
  end

  def destroy
    begin
      @contact = Contact.find(params[:id])
      @contact.destroy
      head :ok
    rescue Exception => e
      respond_with nil, :status => :not_found
    end
  end

end
