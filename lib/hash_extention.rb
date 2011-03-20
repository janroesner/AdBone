class ActiveSupport::HashWithIndifferentAccess

  def for_update
    self.for_create.delete_if{|p| p == "id"}
  end

  def for_create
    self.keep_if{|p| @contact.respond_to? p}
  end

end
