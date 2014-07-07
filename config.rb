require 'compass/import-once/activate'
# Require any additional compass plugins here.

# Require any additional compass plugins here.
add_import_path "web/src/bower_components/bootstrap-sass-official/assets/stylesheets"

# Set this to the root of your project when deployed:
http_path = "/"
css_dir         = "web/dist/css"
images_dir      = "web/dist/img"
javascripts_dir = "web/dist/js/lib"
fonts_dir       = "web/dist/fonts"

sass_dir        = "web/src/scss"

output_style = :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
color_output = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass public/sass scss && rm -rf sass && mv scss sass
::Sass::Script::Number.precision = [10, ::Sass::Script::Number.precision].max
