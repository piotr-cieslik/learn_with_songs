class Api::TranslationsController < ApplicationController
  respond_to(:json)
  before_action(:authenticate)

  def create
    parsedParams = translation_params();

    # raises exception if song don't belong to user
    current_user().songs.find(parsedParams[:song_id].to_i)

    translation = Translation.new(parsedParams)
    if translation.save
      render(json: translation, status: :ok, location: [:api, translation])
    else
      render(json: { errors: translation.errors }, status: :unprocessable_entity)
    end
  end

  def destroy
    current_user.translations.find(params[:id]).destroy()
    head(:no_content)
  end

  private

    def translation_params
      ActiveModelSerializers::Deserialization.jsonapi_parse(params, only: ['foreign-meaning', 'native-meaning', 'song-id'])
    end
end
