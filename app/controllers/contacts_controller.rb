class ContactsController < ApplicationController
  # GET /contacts

  respond_to :json

  def index
    @contacts = Contact.all

    respond_to do |format|
      format.html
      format.json { respond_with @contacts }
    end
  end

  # GET /contacts/1
  def show
    begin
      @contact = Contact.find(params[:id])
      respond_to do |format|
        format.html
        format.json { respond_with @contact }
      end
    rescue Exception => e
      respond_to do |format|
        format.html { raise e }
        # respond_with(nil, :status => 404)
      end
    end
  end

  # GET /contacts/new
  def new
    @contact = Contact.new

    respond_to do |format|
      format.html
      format.json { respond_with @contact }
    end
  end

  # GET /contacts/1/edit
  def edit
    @contact = Contact.find(params[:id])
  end

  # POST /contacts
  def create
    @contact = Contact.new(params[:contact])

    respond_to do |format|
      if @contact.save
        format.html { redirect_to(@contact, :notice => 'Contact was successfully created.') }
        format.json { respond_with @contact, :status => :created, :location => @contact }
      else
        format.html { render :action => "new" }
        format.json { respond_with @contact, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /contacts/1
  def update
    begin
      @contact = Contact.find(params[:id])
      respond_to do |format|
        if @contact.update_attributes(params[:contact])
          format.html { redirect_to(@contact, :notice => 'Contact was successfully updated.') }
          format.json  { head :ok }
        else
          format.html { render :action => "edit" }
          format.json { respond_with @contact, :status => :unprocessable_entity }
        end
      end
    rescue Exception => e
      respond_to do |format|
        format.html { raise e }
        format.json { respond_with(nil, :status => 404) }
      end
    end
  end

  # DELETE /contacts/1
  def destroy
    begin
      @contact = Contact.find(params[:id])
      @contact.destroy

      respond_to do |format|
        format.html { redirect_to(contacts_url) }
        format.json { head :ok }
      end
    rescue Exception => e
      respond_to do |format|
        format.html { raise e }
        format.json { respond_with(nil, :status => 404) }
      end
    end
  end
end
