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
  end

  def destroy
  end

  private

    def song_params
      params.require(:song).permit(:author, :title, :lyrics)
    end
end
