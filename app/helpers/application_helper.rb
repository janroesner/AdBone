module ApplicationHelper

  # returns all ich templates for given models
  def ich_templates *models
    templates = []
    models.each do |model|
      Dir.new(File.dirname(Rails.root.to_s+"/app/views/#{model.to_s}/*")).entries.delete_if do |file|
        file.match /^\./
      end.collect do |filename|
          [filename ,File.open(Rails.root.to_s+"/app/views/#{model.to_s}/" + filename) do |file|
            file.read
          end]
      end.collect{|ary| ary.last}.each do |template|
        templates << Haml::Engine.new(template).render
      end
    end
    templates.join.html_safe
  end

end
