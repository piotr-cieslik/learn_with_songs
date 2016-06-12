class Api::SongsController < ApplicationController
  respond_to(:json)
  before_action(:authenticate)

  def index
    respond_with(current_user.songs)
  end

  def show
    respond_with(current_user.songs.find(params[:id]))
  end

  def create
    song = current_user.songs.build(song_params)
    if song.save
      render(json: song, status: :ok, location: [:api, song])
    else
      render(json: { errors: song.errors }, status: :unprocessable_entity)
    end
  end

  def update
    song = current_user.songs.find(params[:id])
    if song.update(song_params)
      render(json: song, status: :ok, location: [:api, song])
    else
      render(json: { errors: song.errors }, status: :unprocessable_entity)
    end
  end

  def destroy
    current_user.songs.find(params[:id]).destroy()
    head(:no_content)
  end

  private

    def song_params
      ActiveModelSerializers::Deserialization.jsonapi_parse(params, only: [:author, :title, :lyrics])
    end
end
