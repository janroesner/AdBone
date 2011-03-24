module ApplicationHelper

  # returns all ich templates for given models
  def ich_templates *models
    templates = []
    basenames = []
    models.each do |model|
      Dir.new(File.dirname(Rails.root.to_s+"/app/views/#{model.to_s}/*")).entries.delete_if do |file|
        file.match /^\./
      end.collect do |filename|
          [filename ,File.open(Rails.root.to_s+"/app/views/#{model.to_s}/" + filename) do |file|
            basenames << File.basename(file, '.haml').split(".").first
            file.read
          end]
      end.collect{|ary| ary.last}.each_with_index do |template, index|
        templates << script_wrap(Haml::Engine.new(template).render, model.to_s, basenames[index])
      end
    end
    templates.join.html_safe
  end

  # wraps the given template string into a script whose id will be construvted from models name and template-file's basename
  def script_wrap string, modelname, templatename
    "<script id='#{modelname}_#{templatename}' type='text/html'>#{string}</script>"
  end
end
