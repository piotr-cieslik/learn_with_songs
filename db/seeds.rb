User.delete_all()
Song.delete_all()

user = User.create!(
  email: "piotr.cieslik@outlook.com",
  password: "123456",
  password_confirmation: "123456"
);

(1..20).each() do |n|
  song = user.songs.build(
    title: "title #{n}",
    author: "P. Cieślik",
    lyrics: "uuuu, lalal, Ola!")
  song.save!()
end
