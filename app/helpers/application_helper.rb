module ApplicationHelper

  def ich_templates *models
    templates = []
    models.each do |model|
      Dir.new(File.dirname(Rails.root.to_s+"/app/views/#{model.to_s}/*")).entries.delete_if{|n| n.match /^\./}.collect {|fn| [fn,File.open(Rails.root.to_s+"/app/views/#{model.to_s}/"+fn){ |f| f.read }] }.collect{|ary| ary.last}.each do |template|
        haml_engine = Haml::Engine.new(template)
        templates << haml_engine.render
      end
    end
    templates.join
  end

end
