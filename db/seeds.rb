User.delete_all()
Song.delete_all()

user = User.create!(
  email: "piotr.cieslik@outlook.com",
  password: "123456",
  password_confirmation: "123456"
);

# Roxette - Spending my time
roxette_spending_my_time = user.songs.build(
  title: "Spending my time",
  author: "Roxette")
roxette_spending_my_time.lyrics="What's the time?
Seems its already morning
I see the sky, its so beautiful and blue
The TV's on
But the only thing showing is a picture of you

Oh, I get up and make myself some coffee
I try to read a bit but the story's too thin
I thank the Lord above
You're not here to see me
In this shape I'm in

Spending my time
Watching the days go by
Feeling so small
I stare at the wall
Hoping that you think of me too
I'm spending my time

I try to call but I don't know what to tell you
I leave a kiss on your answering machine
Oh, help me please
Is there someone who can make me
Wake up from this dream?

Spending my time
Watching the days go by
Feeling so small
I stare at the wall
Hoping that you are missing me too

I'm spending my time
Watching the sun go down
I fall asleep to the sound
Of 'tears of a clown'
A prayer gone blind

I'm spending my time

My friends keep telling me:
Hey, life will go on
Time will make sure I get over you
This silly game of love you play, you win only to lose.
Oh...

I'm spending my time
Watching the days go by
Feeling so small
I stare at the wall
Hoping that you think of me too

I'm spending my time
Watching the sun go down
I fall asleep to the sound
Of 'tears of a clown'
A prayer gone blind"
roxette_spending_my_time.save!()

# R.E.M. - loo
rem_losing_my_religion = user.songs.build(
  title: "Losing My Religion",
  author: "R.E.M.")
rem_losing_my_religion.lyrics="Oh life, it's bigger
It's bigger than you
And you are not me
The lengths that I will go to
The distance in your eyes
Oh no, I've said too much
I set it up

That's me in the corner
That's me in the spotlight
Losing my religion
Trying to keep up with you
And I don't know if I can do it
Oh no, I've said too much
I haven't said enough

I thought that I heard you laughing
I thought that I heard you sing
I think I thought I saw you try

Every whisper
Of every waking hour
I'm choosing my confessions
Trying to keep an eye on you
Like a hurt, lost and blinded fool, fool
Oh no, I've said too much
I set it up

Consider this
Consider this, the hint of the century
Consider this, the slip
That brought me to my knees, failed
What if all these fantasies come
Flailing around
Now I've said too much

I thought that I heard you laughing
I thought that I heard you sing
I think I thought I saw you try

But that was just a dream
That was just a dream

That's me in the corner
That's me in the spotlight
Losing my religion
Trying to keep up with you
And I don't know if I can do it
Oh no, I've said too much
I haven't said enough

I thought that I heard you laughing
I thought that I heard you sing
I think I thought I saw you try

But that was just a dream
Try, cry, why try
That was just a dream
Just a dream
Just a dream, dream"
rem_losing_my_religion.save!()
