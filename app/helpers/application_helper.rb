module ApplicationHelper

  # determines which models to load templates for and load 'em
  def ich_templates *models
    case models.size
    when 1
      case models.first.class.to_s
      when "Hash"
        templates_for *all_apps_models.delete_if{ |t| models.first[:except].include?(t) }
      when "Symbol"
        return templates_for models.first if not models.first == :all
        templates_for *all_apps_models
      end
    else
      templates_for *models
    end
  end

  # returns a list of all models of that app, pluralized already
  def all_apps_models
    Dir['app/models/*.rb'].map{ |f| File.basename(f, '.*').pluralize.to_sym }
  end

  # returns all ich templates for given models
  def templates_for *models
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

  # wraps the given template string into a script whose id will be constructed from models name and template-file's basename
  def script_wrap string, modelname, templatename
    "<script id='#{modelname}_#{templatename}' type='text/html'>#{string}</script>"
  end
end
